import {useEffect} from 'react';
import useUserStore from "@hertechquest/store/userStore";

const AllUsers = () => {
    const { users, fetchUsers } = useUserStore();
    useEffect(() => {
        const fetchTokenAndUsers = async () => {
            try {
                const response = await fetch("/token");

                if (response.ok) {
                    const data = await response.json();
                    const token = data.token;

                        await fetchUsers(token);

                } else {
                    console.log("Failed to fetch token");
                }
            } catch (error) {
                console.error("Error fetching token:", error);
            }
        };

        fetchTokenAndUsers().then(r => {});
    }, [fetchUsers]);
    return (
        <div className="container mx-auto py-6">
            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="min-w-full table-auto text-left">
                    <thead className="bg-gray-100 text-gray-600">
                    <tr>
                        <th className="py-3 px-4 font-semibold text-sm">Name</th>
                        <th className="py-3 px-4 font-semibold text-sm">Email</th>
                        <th className="py-3 px-4 font-semibold text-sm">Role</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.email} className="border-t border-b hover:bg-gray-50">
                                <td className="py-3 px-4">{user.name}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.isAdmin ? 'Admin' : 'User'}</td>

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

export default AllUsers;
