import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/notesContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useHistory } from "react-router";

export const Notes = () => {
  const [note, setNote] = useState({title:"",description:"",tag:"default"});
const history=useHistory()
  const ref = useRef("");
  const modalRef = useRef("");
  const context = useContext(noteContext);
  useEffect(() => {
      if(localStorage.getItem("token"))
      {

        getAllNotes();
      }
      else{
        history.push("/login")
      }

// eslint-disable-next-line 
  }, []);

  const updateNote = (note) => {
    setNote(note);
    ref.current.click();
  };
  const { notes, getAllNotes ,editNote} = context;
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick=(note)=>
  {
    editNote(note._id,note.title,note.description,note.tag)
       
  }
  return (
    <>
      <AddNote />
      <button
        type="button"
        style={{ display: "none" }}
        className="btn btn-primary"
        ref={ref}
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Update Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Update Note
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={note.title}
                    name="title"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={note.description}
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 form-check"></div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{
                  handleClick(note)
              }}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 container">
        {notes&&notes.length===0?<h4>No Notes to show</h4>:notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
};
