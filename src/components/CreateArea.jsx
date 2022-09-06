import React, { useState } from "react";
import Addicon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  const [isExpandd, setExpandd] = useState(false);
  function handlchang(event) {
    const { name, value } = event.target;
    setnote((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setnote({
      title: " ",
      content: " "
    });
    event.preventDefault();
  }

  function expand() {
    setExpandd(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpandd && (
          <input
            onChange={handlchang}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={handlchang}
          name="content"
          placeholder="Take a note..."
          rows={isExpandd ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isExpandd}>
          <Fab onClick={submitNote}>
            <Addicon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
