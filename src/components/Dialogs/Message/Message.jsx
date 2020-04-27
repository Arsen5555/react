import React from 'react';
import classes from './../Dialogs.module.css'



const Message = (props) => {
  return <div className={classes.message}>{props.messages}</div>
}


export default Message;