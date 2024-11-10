import { useEffect } from "react";
import useAuthStore from "@hertechquest/store/authStore";

export default function useAuth() {
    const token = useAuthStore((state) => state.token);
    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);
    const setToken = useAuthStore((state) => state.setToken);

    useEffect(() => {
        const validateSession = async () => {
            if (!token) {
                const response = await fetch("/api/token");
                const data = await response.json();

                if (response.ok) {
                    setUser(data.user);
                } else {
                    console.log("No valid token found");
                }
            }
        };

        validateSession();
    }, [token, setUser, setToken]);

    return { token, user };
}
