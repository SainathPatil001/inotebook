 import React,{useContext}from 'react'
import noteContext from '../context/notes/notesContext'
export default function NoteItem(props) {
  const context = useContext(noteContext)

  const {deleteNote}=context
    const {note}=props

    return (
        <div className="col-md-3 my-1">
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fas fa-trash-alt mx-2" onClick={()=>{
      deleteNote(note._id)
    }}></i>
    <i className="fas fa-edit mx-2" onClick={()=>{
      props.updateNote(note)
    }}></i>
  </div>
</div>
</div>
    )
}
