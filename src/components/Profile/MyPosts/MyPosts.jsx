import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        New posts
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="Hi, how are you?" likeCount={3} />
        <Post message="My first post" likeCount={12}/>
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
