import { useEffect } from "react";
import useUserAxiosStore from "../store/useUserAxiosStore";

const UserAxios = () => {
    const { users, fetchUsers } = useUserAxiosStore();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-center">Users</h1>
            <ul className="list-disc pl-4">
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
  )
}

export default UserAxios
