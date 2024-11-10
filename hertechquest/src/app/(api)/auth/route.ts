import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

async function encrypt(payload: any) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(key);
}

async function fetchTokenFromAPI(email: string, password: string) {
    const url = 'https://mentorapi-tawz.onrender.com/api/users/signin';
    console.log(`your incoming request ${JSON.stringify({ email, password })}`)
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch token");
    }

    const data = await response.json();
    console.log(`your auth response data ${JSON.stringify(data)}`)

    return data;
}

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    try {
        const tokenData = await fetchTokenFromAPI(email, password);

        const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiry
        const session = await encrypt({ token: tokenData.token, expires });


        const response = NextResponse.json({
            message: 'Login successful',
            user: {
                _id: tokenData._id,
                name: tokenData.name,
                email: tokenData.email,
                isAdmin: tokenData.isAdmin,
            },
            token: tokenData.token,
        });

        response.cookies.set('hertech_session', session, {
            httpOnly: true,
            maxAge: 60 * 60,
            path: '/',
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { message: 'Authentication failed', error: error },
            { status: 400 }
        );
    }
}
