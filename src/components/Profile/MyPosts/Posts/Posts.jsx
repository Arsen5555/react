import React from "react";
import classes from "./Posts.module.css";

const Posts = (props) => {
  return (
    
        <div className={classes.item}>
<img src="https://avatarfiles.alphacoders.com/944/94465.jpg" alt=""/>
{props.messages} 
         <div>
          <span>like  </span> {props.likeCount}
          </div>
          </div>
  );
};

export default Posts;
