import { useState } from 'react';
import {  useAddData, useFetchData } from '../hooks/useFetchData';

export const Post = () => {

    const [page, setPage] = useState(1);
  const { data, error, isLoading } = useFetchData('/posts', { _page: page.toString(), _limit: 5 });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Hook Usage</h1>
      {data.map((post: any) => (
        <div key={post.id} className='border-2 border-gray-300 p-4 rounded-md'>
          <h2 className='text-2xl font-bold test-gray-500'>{post.title}</h2>
          <p className='text-gray-500'>{post.body}</p>

        </div>
        
      ))}
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}

export const User = () => {

    const { data, error, isLoading } = useFetchData("/users");

   

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    return (
        <div>
            <h1>User</h1>
            {data.map((user: any) => (
                <div key={user.id} className='border-2 border-gray-300 p-4 rounded-md'>
                    <h2 className='text-2xl font-bold test-gray-500'>{user.name}</h2>
                    <p className='text-gray-500'>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export const AddPost = () => {
    const { addData } = useAddData('/posts');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      // Add new post
      await addData({ title, body, userId: 1 });
      // Clear form after submission
      setTitle('');
      setBody('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    );
  };

