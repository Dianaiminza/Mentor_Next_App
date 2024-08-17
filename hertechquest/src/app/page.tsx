"use client"
import Image from "next/image";
import {useState} from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Home() {
    const url = "https://mentorapi-tawz.onrender.com/api/users";

    const { data, error, isLoading } = useSWR(url, fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    //const [data, setData] = useState()
    async function getData() {
        /*try {
            const response = await fetch(url);
           // console.log(response)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
            setData(json)
        } catch (error) {
            console.error(error.message);
        }*/
    }
async function handleClick(){
        await getData()
}
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/hertechquest1.jpg"
          alt="HerTechQuest"
          width={280}
          height={47}
          priority
        />
      </div>
        <button onClick={handleClick}>
            Load users
        </button>
        <div>
            {JSON.stringify(data)}
        </div>
    </main>
  );
}
