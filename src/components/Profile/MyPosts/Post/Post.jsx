import React from "react";
import smth from "./Post.module.css";

const Post = () => {
  return (
    <div className={smth.item}>
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png"
        alt="smile"
      ></img>
      Post 1
      <div>
        <span>Like</span>
        <span>Dislike</span>
      </div>
    </div>
  );
};

export default Post;
