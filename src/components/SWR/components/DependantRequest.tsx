import Loading from "@/components/Loaders/Loading";
import { useUserProfile } from "../hooks/useUser";
import APIError from "@/components/Error/APIError";
import { OptimisticComponent } from "./UpdateUser";

const DependantRequest = () => {

    const {user, posts, error, isLoading} = useUserProfile(10);

    if(isLoading ) return <Loading />
    if(error) return <APIError error={error.message} />

    return (
    <div>
    
      <h1 className='text-4xl font-bold text-center mb-4 mt-4'>{user?.name}</h1>
      <OptimisticComponent userId={10} />
      <h2 className='text-2xl font-bold mb-4 mt-8 text-center'>Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.map((post: any) => (
          <div key={post.id} className='bg-white border-2 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col'>
            <h3 className='text-xl font-bold text-gray-700 mb-2 pb-2 border-b-2 border-gray-200'>{post.title}</h3>
            <p className='text-gray-600 flex-grow'>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DependantRequest
