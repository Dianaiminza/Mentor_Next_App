"use client"
import Image from "next/image"
import Link from "next/link";

export default function Page(){
    //const url = 'https://mentorapi-tawz.onrender.com/api/users/signin'
    const url = '/api/login/'
   async function handleSubmit(e) {
        e.preventDefault()
        console.log(e, e.target)
        const formData = new FormData(e.target);
        const fromForm = Object.fromEntries(formData)
        const json = JSON.stringify(fromForm)
        const request = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: json
        }
        const response = await fetch(url, request)

       if (response.ok){
       }
    }
    return (
        <div className="w-full lg:grid lg:min-h-[95vh]  lg:grid-cols-2 xl:min-h-[95vh]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                    </div>
                    <div className="grid gap-4">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-2">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                        <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2.5" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2.5"/>
                                </div>
                            </div>
                            <button className=" w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type='submit'>
                                Login
                            </button>
                        </form>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="#" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <Image
                    src="/hertechquest1.jpg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}