import React,{useState} from 'react'
import authContext  from './authContext'
export default function AuthState() {

    
    return (
        <authContext.Provider value={alert}>
             
        </authContext.Provider>
    )
}
