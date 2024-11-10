import {create} from 'zustand';
import {User} from "@hertechquest/types/User";
import apiService from "@hertechquest/app/services/apiService";
interface UserStore {
    users: User[];
    fetchUsers: (token: string) => Promise<void>;
}

const useUserStore = create<UserStore>((set) => ({
    users: [],
    fetchUsers: async (token: string) => {
        const fetchedUsers = await apiService.fetchUsers(token);
        set({ users: fetchedUsers });
    },
}));
export default useUserStore;