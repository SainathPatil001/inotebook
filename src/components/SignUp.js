import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import alertContex from "../context/alert/alertContext";
export default function SignUp() {
    const [signUp, setSignUp] = useState({name:"",email:"",password:"",cpassword:""})
    const handleChange=(e)=>{
        setSignUp({...signUp,[e.target.name]:e.target.value})
    }
const alert = useContext(alertContex)
    const history=useHistory()
    const handleSubmit=async(e)=>{
        e.preventDefault();
          const response=await fetch("http://localhost:8000/api/auth/signup",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({email:signUp.email,password:signUp.password,name:signUp.name})

          });
         const json=await response.json()
          if(!json.error)
        {
            alert.setShowAlert(true);
            alert.setType("success")
            alert.setMessage("Account Created  Sucessfully..😊")
            setTimeout(() => {
              alert.setShowAlert(false);
            }, 3000);
  
            localStorage.setItem("token",json.authToken)
            history.push("/")
        }
        else{
            alert.setShowAlert(true);
            alert.setType("danger")
            alert.setMessage(json.error)
            setTimeout(() => {
              alert.setShowAlert(false);
            }, 3000);
        }
    }
    return (
        <div>
        <form  onSubmit={handleSubmit}>
        <div className="mb-3 my-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" value={signUp.name} id="name" onChange={handleChange} name="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" value={signUp.email}onChange={handleChange} name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={signUp.password}onChange={handleChange}id="password" name="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1"  className="form-label">Confirm Password</label>
    <input type="password" className="form-control"value={signUp.cpassword} onChange={handleChange}id="cpassword" name="cpassword"/>
    {signUp.password !==signUp.cpassword && signUp.cpassword.length>0&&<div id="emailHelp" className="form-text">Password don't Match..🙄</div>}
  </div>
   <button type="submit" disabled={signUp.password !==signUp.cpassword } className="btn btn-primary">Submit</button>
</form>
        </div>

    )
}
