
import React,{useState} from "react"

import NoteContext from "./notesContext"

const NoteState=(props)=>{
const host="http://localhost:8000"
   const notesInitals=
     [
      
    ]
  


    // add a note
    const addNote=async(note)=>{
      const {title,description,tag}=note
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token')
        },
        body:JSON.stringify({title,description,tag})
      })
      const res=await response.json();
      console.log(res);
      setNotes(notes.concat(res.savedNote))
    }





    // get all notes
    const getAllNotes=async()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token')
        },
    })


    
    
      const data=await response.json()
   
   if(data.message ==="Access Denied")
   {
     return;
   }
   setNotes(data);
   
    
   
  }

    // edit note
    const editNote=async(id,title ,description ,tag)=>{
       await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token')
        },
           body:JSON.stringify({title,description,tag})

        
      })

const newNoteArr= notes.map((note)=>{
  
  if(note._id===id)
  {
    note.title=title
    note.description=description
    note.tag=tag

  }

  return note;

})

     setNotes(newNoteArr) 
   
      
}
    // delete note
    const deleteNote=async(id)=>{
       await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token')
        },
        
      })
        setNotes(notes.filter(note=>id!==note._id))
    }

    const [notes, setNotes] = useState(notesInitals)
return(
    <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getAllNotes}}>
       {props.children}
    </NoteContext.Provider>
)
}


export default NoteState;