'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import {ArrowRightIcon} from "@heroicons/react/24/outline";

type Props = {}

function Hero({}: Props) {
    const wrapper = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.35,
            }
        }
    }

    const list = {
        hidden:{opacity:0, x:-100},
        visible:{
            opacity:1,
            x:0,
            transition:{duration:0.3 , ease:[0.455, 0.03, 0.515, 0.955], delay:1}
        }
    }
    const container = {
        visible:{
            transition:{
                staggerChildren:0.025
            }
        }
    }
    const textSets = [
       /* [
            { text: 'Empowering young Women to', gradient: 'from-pink-400 to-zinc-300' },
            { text: 'Excel in Tech', gradient: 'from-pink-400 to-purple-600' },
            { text: 'with Confidence', gradient: 'from-purple-600 to-zinc-300' },
        ],*/
        [
            { text: 'Unlock Potential to' , gradient: 'from-blue-400 to-green-300' },
            { text: 'Achieve Greatness and', gradient: 'from-green-400 to-yellow-600' },
            { text: 'Inspire the World', gradient: 'from-yellow-600 to-pink-400' },
        ],
       /* [
            { text: 'Embrace Innovation', gradient: 'from-purple-400 to-blue-300' },
            { text: 'Build with Purpose', gradient: 'from-blue-300 to-green-600' },
            { text: 'Lead with Vision', gradient: 'from-green-600 to-purple-400' },
        ],*/
    ];
    const fadeVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.8 } },
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentTextSet = textSets[currentIndex] || [];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textSets.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='w-full p-2 sm:px-8 lg:px-16 pt-2'>
            <div className='flex flex-col md:flex-row md:gap-x-6 lg:gap-x-0 xl:grid xl:grid-cols-2 mt-4'>
                <div className='shrink-0 md:w-1/2 lg:w-7/12 xl:w-auto'>
                    <h1 className="text-4xl lg:text-5xl mb-8 font-semibold">
                        {textSets[currentIndex].map((segment, index) => (
                            <div
                                key={index}
                                className={`text-transparent bg-clip-text bg-gradient-to-br ${segment.gradient}`}
                            >
                                {segment.text}
                            </div>
                        ))}
                    </h1>


                    <ul className='text-purple-600 space-y-2'>
                        <li className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className="fill-current h-5 shrink-0 mt-0.5">
                                <path
                                    d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
                            </svg>
                            <span>Strengthening Technical Skills and Confidence</span>
                        </li>
                        <li className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className="fill-current h-5 shrink-0 mt-0.5">
                                <path
                                    d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
                            </svg>
                            <span>Fostering a Community of Mentorship and Support</span>
                        </li>
                        <li className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className="fill-current h-5 shrink-0 mt-0.5">
                                <path
                                    d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
                            </svg>
                            <span>Resources to Learn and Lead in Tech Innovation</span>
                        </li>
                        <li className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className="fill-current h-5 shrink-0 mt-0.5">
                                <path
                                    d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
                            </svg>
                            <span>Encouraging Innovation and Leadership for the Future</span>
                        </li>
                    </ul>
                    <div className='mt-10 flex flex-col items-center sm:flex-row gap-3'>
                        <a href="/"
                           className='inline-flex relative z-10 h-10 rounded-xl p-px shadow-lg bg-gradient-to-b from-gray-950 to-zinc-300'>
                            <div
                                className='flex items-center gap-1 px-6 font-medium rounded-xl whitespace-nowrap bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 text-blue-200'>
                                <span>Join community</span>
                            </div>
                        </a>
                    </div>

                </div>

                <div className='relative hidden md:block pt-1 shrink grow overflow-hidden z-0'>
                    <div className='relative overflow-hidden rounded-full'>
                        <Image src='/hertechquest1.jpg' className='object-cover object-center' width={800}
                               height={800} alt='Hero-Image'/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero

