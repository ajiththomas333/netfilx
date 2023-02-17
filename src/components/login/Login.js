import React, { useContext} from 'react'
import './login.css'
import { useState } from 'react'
import { AuthContext, FirebaseContext } from '../store/FirebaseCotext'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Logo from "../../ajiththomas.png"
const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('');
  const{Firebase}=useContext(FirebaseContext)
  const{setUser}=useContext(AuthContext)

 
  const navigate=useNavigate()
   const handlelogin=(e)=>{
    e.preventDefault()
   

   const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    navigate("/home")
    
  }).catch((error)=>{
    alert(error.message)
  })
   }
  return (

    <div>
       <div className="loginParentDiv">
        <img width="450px" height="400px" src={Logo}></img>
        <form  onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
             placeholder='Email'
          />
          <br />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            placeholder='Password'
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <br/>
        <a style={{color:'white'}} href='/signup'> l have no accout</a>
        <br/>
        <a style={{color:'red'}}  href='/Home'> direct home</a>
      </div>
    </div>
  )
}

export default Login

       