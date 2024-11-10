"use client";
import {useEffect, useState} from "react";
import useAuthStore from "@hertechquest/store/authStore";
import { useRouter } from "next/navigation";
export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useAuthStore((state) => state.setUser);
    const setToken = useAuthStore((state) => state.setToken);
    const user = useAuthStore((state) => state.user);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const validateSession = async () => {
            const response = await fetch("/token");

            const data = await response.json();

            if (response.ok) {
                setUser(data.user);
            } else {
                console.log("No valid token found");
            }
        };

        validateSession();
    }, [setUser, setToken]);


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const response = await fetch("/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Authentication failed");
                setLoading(false);
                return;
            }

            setUser(data.user);
            setToken(data.token);
            setLoading(false);
        } catch (error: any) {
            setError(error.message || "An error occurred during login");
            setLoading(false);
        }
    };
    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);
    return (
        <div className="flex  items-center justify-center min-h-screen bg-[#1b1834]">
            <div
                className=" bg-emerald-50 w-[28rem] shadow-2xl rounded md:flex-row md:space-y-0"
            >
                <form onSubmit={handleLogin}>
                    <div className="md:p-14">
                        <div className="py-4 ">
                            <span className="mb-2 text-md">Email</span>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md p-2.5 text-gray-900"
                            />
                        </div>
                        <div className=" py-4">
                            <span className="mb-2 text-md">Password</span>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md p-2.5 text-gray-900"
                            />
                        </div>
                        {loading ? (
                            <button type="submit"
                                    className="w-full bg-[#1b1834] text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                            >
                                Signing in ...
                            </button>
                        ) : (
                            <button type="submit"
                                    className="w-full bg-[#1b1834] text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
                            >
                            Sign in
                            </button>
                        )}

                    </div>

                </form>

            </div>
        </div>
        /*   <div className="bg-[#1b1834] min-h-screen flex items-center justify-center ">
               <div className="bg-amber-300 border-r-8">
                   <form onSubmit={handleLogin} className="grid gap-4">
                       <div>
                           <label htmlFor="email" className="block text-sm font-medium">Email address</label>
                           <input
                               id="email"
                               name="email"
                               type="email"
                               required
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               className="block w-full rounded-md p-2.5 text-gray-900"
                           />
                       </div>
                       <div>
                           <label htmlFor="password" className="block text-sm font-medium">Password</label>
                           <input
                               id="password"
                               name="password"
                               type="password"
                               required
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               className="block w-full rounded-md p-2.5 text-gray-900"
                           />
                       </div>
                       {loading ? (
                           <button type="button" className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded"
                                   disabled>
                               Logging in...
                           </button>
                       ) : (
                           <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded">
                               Login
                           </button>
                       )}
                   </form>

               </div>


           </div>*/
    );
}
