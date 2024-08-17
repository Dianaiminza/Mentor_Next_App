'use server'
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {getToken, setToken} from "../../lib/auth";

export async function POST(request) {
    const url = 'https://mentorapi-tawz.onrender.com/api/users/signin';

    // Get the token from the cookies
    let token = getToken();
    console.log('Token from cookies:', token);

    // Parse the incoming request data
    const data = await request.json();
    console.log('Request data:', data);

    // Prepare the POST request
    const req = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(token && { 'Authorization': `Bearer ${token}` }) // Optionally add the token to headers
        },
        body: JSON.stringify(data)
    };

    // Send the request to the API
    const response = await fetch(url, req);
    const rdata = await response.json();
    console.log('Response data:', rdata);

    // Check if the response is successful and contains the required fields
    if (response.ok && rdata.token) {
        console.log("Logged in");

        // Extract values from the response data
        const { _id, name, email, isAdmin, token: authToken } = rdata;

        // If no token in cookies, set the token from response
        if (!token) {
            token = authToken;
           setToken(authToken)
            console.log('Token set from response:', token);
        }

        // Return a successful response with the extracted username
        return NextResponse.json({ "loggedIn": true,"email": email,  "name": name }, { status: 200 });
    } else {
        // Handle cases where response is not ok or token is missing
        console.error('Failed to log in or token is missing:', rdata);
        return NextResponse.json({ "error": "Failed to log in or token is missing" }, { status: 400 });
    }
}
