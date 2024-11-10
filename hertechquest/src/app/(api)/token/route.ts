import { NextRequest, NextResponse } from 'next/server';
import {decodeJwt, jwtVerify} from 'jose';

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

async function route(token: string) {
    try {
        console.log('Verifying token...');
        const { payload } = await jwtVerify(token, key);
        console.log('Decoded Payload:', payload);
        if (typeof payload.token === 'string') {
            const innerPayload = decodeJwt(payload.token);
            console.log('Decoded Inner Token Payload:', innerPayload);
            return innerPayload;
        } else {
            return payload;
        }
    } catch (error) {
        console.error('Error verifying token:', error);
        throw new Error("Invalid or expired token");
    }
}

export async function GET(req: NextRequest) {
    const tokenCookie = req.cookies.get('hertech_session');

    if (!tokenCookie || !tokenCookie.value) {
        console.log('Token not found in cookies');
        return NextResponse.json({ message: 'No token found' }, { status: 401 });
    }

    const token = tokenCookie.value;

    try {
        const decodedData = await route(token);
        return NextResponse.json({
            message: 'Token validated successfully',
            user: {
                _id: decodedData._id,
                name: decodedData.name,
                email: decodedData.email,
                isAdmin: decodedData.isAdmin,
            },
            token: decodedData.token,
            expires: decodedData.expires,
            iat: decodedData.iat,
            exp: decodedData.exp
        }, { status: 200 });
    } catch (error) {
        console.error('Token validation failed:', error);
        return NextResponse.json({ message: 'Invalid token', error: error }, { status: 401 });
    }
}
