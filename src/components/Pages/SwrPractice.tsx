import { useState } from "react";
import { AddPost, Post, User } from "../SWR/components/HookUse"

const SwrPractice = () => {
  const [showPost, setShowPost] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  
  return (
    <div>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setShowPost(!showPost)}>Show Post</button>
      {showPost && <Post />}
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setShowUser(!showUser)}>Show User</button>
      {showUser && <User />}
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setShowAddPost(!showAddPost)}>Show Add Post</button>
      {showAddPost && <AddPost />}
    </div>
  )
}

export default SwrPractice
