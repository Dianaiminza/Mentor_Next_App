import useAuthStore from "@hertechquest/store/authStore";

export default function DashboardContent() {
    const user = useAuthStore((state) => state.user);


    return (
        <>
            <div className="min-h-full">
               Hello Dashboard I am {user.name}
            </div>
        </>
    );
}
