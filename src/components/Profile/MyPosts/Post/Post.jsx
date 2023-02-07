import React from "react";
import smth from "./Post.module.css";

const Post = (props) => {
  //console.log(props.message);

  return (
    <div className={smth.item}>
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/emoji-emoticon/smile-icon.png"
        alt="smile"
      ></img>
      {props.message}
      <div>
        <span>Like</span>
        <span>Dislike</span>
      </div>
      <p>Like count: {props.likeCount}</p>
    </div>
  );
};

export default Post;
