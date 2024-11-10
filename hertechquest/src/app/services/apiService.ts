import { User } from "@hertechquest/types/User";
import {Mentor} from "@hertechquest/types/Mentors";

class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async makeRequest<T>(
        endpoint: string,
        method: string = 'GET',
        headers: HeadersInit = {},
        body: any = null,
        token?: string
    ): Promise<T | null> {
        try {
            const requestOptions: RequestInit = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
                },
                body: body ? JSON.stringify(body) : null,
            };

            const response = await fetch(`${this.baseUrl}${endpoint}`, requestOptions);

            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }

            const data: T = await response.json();
            return data;
        } catch (error) {
            console.error('Error making API call:', error);
            return null;
        }
    }

    public async fetchUsers(token: string): Promise<User[]> {
        const data = await this.makeRequest<User[]>('/api/users', 'GET', {}, null, token);
        return data ?? [];
    }

    public async createUser(userData: User, token: string): Promise<User | null> {
        return await this.makeRequest<User>('/api/users', 'POST', {}, userData, token);
    }

    public async fetchMentors(token: string): Promise<Mentor[]> {
        const data = await this.makeRequest<Mentor[]>('/api/mentors', 'GET', {}, null, token);
        return data ?? [];
    }

    public async fetchDiscussions(token: string): Promise<DiscussionsResponse> {
        try {
            const data = await this.makeRequest<DiscussionsResponse>('/api/discussions', 'GET', {}, null, token);

            if (!data || !data.data) {
                return { success: false, data: [] };
            }
            console.log(`Fetched discussions: ${JSON.stringify(data)}`);

            return data;
        } catch (error) {
            console.error('Error fetching discussions:', error);
            return { success: false, data: [] };
        }
    }




}

export default new ApiService('https://mentorapi-tawz.onrender.com');
