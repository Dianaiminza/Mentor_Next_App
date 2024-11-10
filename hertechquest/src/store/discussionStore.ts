import { create } from 'zustand';
import apiService from "@hertechquest/app/services/apiService";

interface DiscussionStore {
    discussions: DiscussionsResponse;
    setDiscussions: (discussions: DiscussionsResponse) => void;
    fetchDiscussions: (token: string) => Promise<void>;
}

const useDiscussionStore = create<DiscussionStore>((set) => ({
    discussions: { success: false, data: [] },
    setDiscussions: (discussions: DiscussionsResponse) => set({ discussions }),
    fetchDiscussions: async (token: string) => {
        const fetchedDiscussions = await apiService.fetchDiscussions(token);
        set({ discussions: fetchedDiscussions });
    },
}));
export default useDiscussionStore;
