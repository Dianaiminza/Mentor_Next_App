import Image from 'next/image';

type AvatarProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, width, height, className }) => (
    <div className={`relative ${className}`}>
        <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    </div>
);

type Props = {}

const Community: React.FC<Props> = () => {
    const avatars = [
        { src: '/hertechquestlogo.jpg', alt: 'Avatar-Image', width: 100, height: 100 },
        { src: '/hertechquestlogo.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquestlogo.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquestlogo.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquestlogo.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquest1.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquest1.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquest1.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquest1.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquest1.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquest1.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquest1.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquest1.jpg', alt: 'Cont-Image', width: 100, height: 100 },
        { src: '/hertechquest1.jpg', alt: 'Cont-Image', width: 100, height: 100 }
    ];

    return (
        <div className='relative pb-20'>
            <div className='absolute inset-x-0 top-0 h-96 overflow-hidden'>
                <div className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-white/5 blur-3xl' style={{ borderRadius: "50% 50%" }}></div>
            </div>
            <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-32'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl text-green-700 text-center mb-16 font-semibold'>
                    <span className="font-bold">
                        Join our community
                    </span>
                </h2>
                <div>
                    <div className='h-28 flex justify-between'>
                        {avatars.slice(0, 8).map((avatar, index) => (
                            <div key={index} className={`h-full ${index % 2 === 0 ? 'flex items-center' : 'flex items-start'}`}>
                                <Avatar {...avatar} />
                            </div>
                        ))}
                    </div>
                    <div className='sm:hidden h-28 flex justify-between'>
                        {avatars.slice(0, 5).map((avatar, index) => (
                            <div key={index} className='h-full flex items-start'>
                                <Avatar {...avatar} />
                            </div>
                        ))}
                    </div>
                    <div className='flex mt-8 sm:mt-0'>
                        <div className='grow sm:w-1/3 lg:w-2/5'>
                            <div className='flex justify-around h-24'>
                                {avatars.slice(8, 11).map((avatar, index) => (
                                    <div key={index} className='h-full flex items-center'>
                                        <Avatar {...avatar} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community;
