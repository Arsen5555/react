import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";







const Dialogs = (props) => {
  return (

     <div className={classes.dialogs}>
       <div className={classes.dialogsItems}>
         <div className={classes.dialog + ' ' + classes.active}>
           <NavLink to="/dialogs/1">Item1</NavLink>
         </div>
         <div className={classes.dialog}>
           <NavLink to="/dialogs/2">Item2</NavLink>
         </div>
         <div className={classes.dialog}>
           <NavLink to="/dialogs/3">Item3</NavLink>
         </div>
         <div className={classes.dialog}>
           <NavLink to="/dialogs/4">Item4</NavLink>
         </div>
         <div className={classes.dialog}>
           <NavLink to="/dialogs/5">Item5</NavLink>
         </div>
         <div className={classes.dialog}>
           <NavLink to="/dialogs/6">Item6</NavLink>
         </div>
       </div>
       <div className={classes.messages}>
         <div className={classes.message}>Hi</div>
         <div className={classes.message}>Hello</div>
         <div className={classes.message}>Good</div>
       </div>
     </div>
  );
};

export default Dialogs;