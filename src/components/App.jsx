import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setnotes] = useState([]);

  function addnote(note){
    setnotes(prevnotes => {
      return [...prevnotes,note];
    });

  }

  function DeleteNote(id){
    setnotes(prevNote => {
      return prevNote.filter((noteItem,index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd = {addnote} />
      {notes.map((noteItem,index) => {
        return <Note key ={index} id={index} title = {noteItem.title} content = {noteItem.content} onDelete = {DeleteNote} />
      })}
    
      <Footer />
    </div>
  );
}

export default App;
