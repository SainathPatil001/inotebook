import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import alertContex from "../context/alert/alertContext";


export default function Login() {
  const history=useHistory()
  const alert = useContext(alertContex);

    const [login, setLogin] = useState({email:"",password:""})

    const handleChange=(e)=>{
setLogin({...login,[e.target.name]:e.target.value})

    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{

        
      const response= await fetch("http://localhost:8000/api/auth/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({email:login.email,password:login.password})
        })

        const json=await response.json();
        if(json.success)
        {
          alert.setShowAlert(true);
          alert.setType("success")
          alert.setMessage("Login Sucessfully..😊")
          setTimeout(() => {
            alert.setShowAlert(false);
          }, 3000);

          localStorage.setItem("token",json.authToken)
          history.push("/")
        }
        else{
          alert.setShowAlert(true);
          alert.setType("danger")
          alert.setMessage("Login Failed..😣")
          setTimeout(() => {
            alert.setShowAlert(false);
          }, 3000);
        }
        }
        catch(err)
         {
             console.log(err);
         }
     
    } 
    return (
        <div>
        <form  onSubmit={handleSubmit}>
  <div className="mb-3 my-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={handleChange} name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={handleChange}id="password" name="password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
