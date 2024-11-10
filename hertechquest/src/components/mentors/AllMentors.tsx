import {useEffect} from 'react';
import useMentorStore from "@hertechquest/store/mentorStore";

const AllMentors = () => {
    const { mentors, fetchMentors } = useMentorStore();
    useEffect(() => {
        const fetchAllMentors = async () => {
            try {
                const response = await fetch("/token");

                if (response.ok) {
                    const data = await response.json();
                    const token = data.token;

                    await fetchMentors(token);

                } else {
                    console.log("Failed to fetch token");
                }
            } catch (error) {
                console.error("Error fetching token:", error);
            }
        };

        fetchAllMentors().then(r => {});
    }, [fetchMentors]);
    return (
        <div className="container mx-auto py-6">
            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="min-w-full table-auto text-left">
                    <thead className="bg-gray-100 text-gray-600">
                    <tr>
                        <th className="py-3 px-4 font-semibold text-sm">Name</th>
                        <th className="py-3 px-4 font-semibold text-sm">Email</th>
                        <th className="py-3 px-4 font-semibold text-sm">Bio</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    {mentors.length > 0 ? (
                        mentors.map((mentor) => (
                            <tr key={mentor.email} className="border-t border-b hover:bg-gray-50">
                                <td className="py-3 px-4">{mentor.name}</td>
                                <td className="py-3 px-4">{mentor.email}</td>
                                <td className="py-3 px-4">{mentor.bio}</td>

                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td  className="py-3 px-4 text-center">Loading users...</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllMentors;
