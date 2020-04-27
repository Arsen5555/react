import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
     <div>
       <div>
         <img src="https://i.gadgets360cdn.com/large/assassins_creed_odyssey_combat_1536908832693.jpg" />
       </div>
       <div className={classes.descriptionBlock}>ava + description</div>
     </div>
  );
};

export default ProfileInfo;