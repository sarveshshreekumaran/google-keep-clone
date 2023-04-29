import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setInputArea(false);
    event.preventDefault();
  }

  const [inputArea, setInputArea] = useState(false);

  function expand() {
    setInputArea(true);
  }

  return (
    <div className="row">
      <form className="create-note col-xl-6 col-lg-6 col-md-6 col-sm-8">
        <input
          name="title"
          type={inputArea ? "text" : "hidden"}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={inputArea ? "3" : "1"}
        />
        <Zoom in={inputArea}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
