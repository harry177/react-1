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
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
