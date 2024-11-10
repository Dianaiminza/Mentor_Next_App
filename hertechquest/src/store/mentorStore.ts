import {create} from 'zustand';
import apiService from "@hertechquest/app/services/apiService";
import {Mentor} from "@hertechquest/types/Mentors";
interface MentorStore {
    mentors: Mentor[];
    fetchMentors: (token: string) => Promise<void>;
}

const useMentorStore = create<MentorStore>((set) => ({
    mentors: [],
    fetchMentors: async (token: string) => {
        const fetchedMentors= await apiService.fetchMentors(token);
        set({ mentors: fetchedMentors });
    },
}));
export default useMentorStore;