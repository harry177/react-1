import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://www.ghimprove.com/_blog/images/posts/hello-world/mountain.jpg"
          alt="banner"
          className={classes.banner}
        ></img>
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
