import React from "react";
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
      <div>
        My posts
        <div>New posts</div>
        <div>
          <div className={classes.item}>Post 1</div>
          <div className={classes.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
