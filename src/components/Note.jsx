import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"

function Note(props) {

  function handlclick(){
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick = {handlclick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
