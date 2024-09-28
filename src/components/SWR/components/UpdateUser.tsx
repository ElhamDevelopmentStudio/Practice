import Custom404 from "@/components/Error/Custom404";
import { useUserData } from "../hooks/useUser";
import APIError from "@/components/Error/APIError";
import Loading from "@/components/Loaders/Loading";

export const OptimisticComponent = ({ userId }: {userId: number}) => {
    const { data, error, isValidating, updateUser } = useUserData(userId);
  
    const handleUpdate = () => {
      updateUser({ name: value }); 
    };

    let value = "";
  
    if (error) return <APIError error={error.message || "Error loading user data"} />;
    if (!data) return <Custom404 />;
    if (isValidating) return <Loading />;
  
    return (
      <div className="bg-white border-2 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <input className="text-xl font-bold text-gray-700 mb-2 pb-2 border-b-2 border-gray-200" onChange={(e) => value = e.target.value}></input>
        <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Change Name</button>
      </div>
    );
  };