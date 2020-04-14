import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
<button> Add post </button>
      <div className={classes.posts}>

      <Posts messages='hi'  likeCount='13' />
        <Posts messages='its my' likeCount='25'/>
      </div>
    </div>
  );
};

export default MyPosts;
