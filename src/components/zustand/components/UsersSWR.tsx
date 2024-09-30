import useUserSWRStore from "../store/useUserSWRStore";

const UsersSWR = () => {

    const { users, isLoading, error } = useUserSWRStore();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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

export default UsersSWR
