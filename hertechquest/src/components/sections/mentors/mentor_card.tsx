import Image from "next/image";

type MentorCardProps = {
    mentor: {
        name: string;
        bio: string;
        profile?: string;
    };
};

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
    return (
        <figure className="md:flex bg-[#1b1834] rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <Image
                src={mentor.profile || "/hertechquestlogo.jpg"}
                alt={`${mentor.name} Avatar`}
                width={280}
                height={280}
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            />

            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        {mentor.bio}
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {mentor.name}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Staff Engineer, Algolia {/* This can be dynamic as well */}
                    </div>
                </figcaption>
            </div>
        </figure>
    );
};

export default MentorCard;
