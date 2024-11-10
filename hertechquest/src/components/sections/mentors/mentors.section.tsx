import Image from 'next/image';
import useMentorStore from "@hertechquest/store/mentorStore";
import { useEffect, useState } from "react";

type AvatarProps = {
    src?: string;
    alt: string;
    name: string;
    width?: number;
    height?: number;
    className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, name, width = 80, height = 80, className }) => {
    const getInitials = (name: string) => {
        return name.slice(0, 2).toUpperCase();
    };

    return (
        <div className={`relative ${className}`} style={{ width, height, borderRadius: '50%' }}>
            {src ? (
                <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                    <Image src={src} alt={alt} layout="fill" objectFit="cover" />
                </div>
            ) : (
                <div className='flex items-center justify-center w-full h-full rounded-full bg-gray-300 text-gray-950 font-bold border border-white shadow-lg'>
                    {getInitials(name)}
                </div>
            )}
        </div>
    );
};

const MentorsSect: React.FC = () => {
    const { mentors, fetchMentors } = useMentorStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const fetchAllMentors = async () => {
            try {
                await fetchMentors('');
            } catch (error) {
                console.error("Failed to fetch mentors:", error);
            }
        };

        fetchAllMentors();
        setIsMounted(true);
    }, [fetchMentors]);

    if (!isMounted) {
        return null;
    }

    return (
        <div className='relative h-screen flex flex-col justify-center items-center pb-20'>
            <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl text-green-700 text-center mb-16 font-semibold'>
                    <span className="font-bold">Join our community</span>
                </h2>
                <div className='flex justify-around flex-wrap'>
                    {mentors?.slice(0, 8).map((mentor, index) => (
                        <div key={index}
                             className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">

                            <figure className="bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center">
                                <Avatar src={mentor.profile} alt={mentor.name} name={mentor.name}
                                        className="w-20 h-20 mb-4"/>
                                <div className="text-center">
                                    <p className="text-sm text-gray-200 font-medium mb-1 line-clamp-1">{mentor.name}</p>
                                    <figcaption className="text-xs text-gray-400 mt-1 line-clamp-1">
                                        {mentor.occupation}
                                    </figcaption>
                                    <p className="text-xs text-gray-400 line-clamp-2">
                                        {mentor.expertise}
                                    </p>
                                </div>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MentorsSect;