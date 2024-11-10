import { cookies } from "next/headers";

export function setToken(token) {
    cookies().set("mentor_auth_token", token, { path: '/', httpOnly: true, secure: true, sameSite: "strict" });
}

export function getToken() {
    return cookies().get("mentor_auth_token")?.value || null;
}
