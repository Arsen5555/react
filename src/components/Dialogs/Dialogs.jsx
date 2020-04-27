import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

  let messagesElements = props.state.messages.map(m => <Message messages={m.message}/>);

  let newmessages = React.createRef();

  let send=()=>{
    let sendtext=newmessages.current.value;
    alert(sendtext)
  }

  return (
     <div>
       <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
           {dialogsElements}
         </div>
         <div className={classes.messages}>
           {messagesElements}
         </div>

       </div>
       <div className={classes.dialogs}>
         <div className={classes.messagesdiv}>
           <textarea className={classes.text} cols="30" rows="3" ref={newmessages}></textarea>
         </div>
         <div className={classes.senddiv}>
           <button className={classes.buttonsend} onClick={send}>SEND</button>
         </div>
       </div>
     </div>
  );
};

export default Dialogs;