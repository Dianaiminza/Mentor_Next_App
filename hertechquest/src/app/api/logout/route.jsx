'use server'
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {deleteTokens, getToken, setToken} from "../../lib/auth";

export async function POST(request) {
    const url = 'https://mentorapi-tawz.onrender.com/api/users/signin';

const token = deleteTokens();
console.log(token)
    return  NextResponse({}, {status: 200})
}
