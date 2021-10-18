import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/notesContext'

const AddNote = () => {
    const context = useContext(noteContext)
const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleChange=(e)=>{
      
      setNote({...note,[e.target.name]:e.target.value})
    }
const {addNote}=context
    return (
        <div>
            <h1>Add a Note</h1>
            <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >title</label>
    <input type="text" className="form-control" id="title" value={note.title} name="title" aria-describedby="emailHelp" onChange={
      handleChange
    }/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  value={note.description} name="description" onChange={
      handleChange
    }/>
  </div>
  <div className="mb-3 form-check">    
  </div>
  <button type="submit" className="btn btn-primary" disabled={note.description.length>4 && note.title.length>3 ?false:true} onClick={(e)=>{
    e.preventDefault()
      addNote(note)
      setNote({title:"",description:"",tag:""})
      
  }}>Add Note</button>
</form>

<h2 className="my-4">Your Notes Are</h2>
        </div>
    )
}

export default AddNote
