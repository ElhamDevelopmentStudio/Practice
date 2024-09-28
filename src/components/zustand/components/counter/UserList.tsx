import { useEffect } from 'react';
import useStore from '../../store/useStore';
import Loading from '@/components/Loaders/Loading';
import APIError from '@/components/Error/APIError';

const UserList = () => {
  const { users, loading, error, fetchUsers } = useStore();

  useEffect(() => {
    fetchUsers(); 
  }, [fetchUsers]);

  if (loading) return <Loading />;
  if (error) return <APIError error={error} />;

  return (
    <div className='bg-white p-4 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4 mt-8 text-center'>User List</h2>
      <ul className='list-disc pl-4 space-y-2'>
        {users.map((user) => (
          <li key={user.id} className='text-lg'>{user.id} - {user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;