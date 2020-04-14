import React from "react";
import classes from"./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx"
const Profile = () => {
  return (
    <div >
      <div>
        <img src="https://i.gadgets360cdn.com/large/assassins_creed_odyssey_combat_1536908832693.jpg" />
      </div>
      <div>My post</div>
     <MyPosts/>
      </div>
  );
};

export default Profile;
