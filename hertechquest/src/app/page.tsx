"use client";
import Image from "next/image";
import useAuthStore from "@hertechquest/store/authStore";
import Dashboard from "@hertechquest/components/dashboard";
import Hero from "@hertechquest/components/sections/hero/hero";
import Community from "@hertechquest/components/sections/community/community";
import Navbar from "@hertechquest/components/sections/navbar/navbar";
import MentorsSect from "@hertechquest/components/sections/mentors/mentors.section";

export default function Home() {
    const user = useAuthStore((state) => state.user);
    if ( user) {
        return (
            <>
                <Dashboard />
            </>
        );
    }
    return (
        <main className="relative bg-[#1b1834]">
            <Navbar/>
            <div className="max-w-screen-xl min-h-screen mx-auto overflow-hidden">
                <Hero/>
                <MentorsSect/>
            </div>

        </main>
    );
}
