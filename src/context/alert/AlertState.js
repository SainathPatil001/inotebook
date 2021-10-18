import React,{useState} from 'react'
import AlertContex from './alertContext'
export default function AlertState(props) {
    const [showAlert, setShowAlert] = useState(false)
    const [type, setType] = useState("primary")
    const [message, setMessage] = useState("")
    return (
        <AlertContex.Provider value={{showAlert,setShowAlert,setType,type,message,setMessage}} >
           {props.children}
        </AlertContex.Provider>
    )
}
