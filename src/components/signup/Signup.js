import React, { useContext } from 'react'
import './signup.css'
import { useState } from 'react'
import { FirebaseContext } from '../store/FirebaseCotext'
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import Logo from "../../ajiththomas.png"

function Signup() {
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  const{Firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()


const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(username)
}
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((result)=>{
    updateProfile(result.user,{displayName:username})
      
    setDoc(doc(Firebase, "user", "LA"), {
      id:result.user.uid,
      username:username,
      phone:phone,
      email:email,
      password:password

    
    }).then(()=>{
      navigate('/')
    }
    )

  })





  return (
    <div>
       <div className='aaa'>
    <div className="signupParentDiv">
      <img width="400px" height="200px" src={Logo}></img>
      <form onSubmit={handleSubmit} >
        <label htmlFor="fname">Username</label>
        <br />
        <input
          className="input"
          type="text"
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
          id="fname"
          name="name"
          placeholder='Username'
        />
        <br />
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
        <label htmlFor="lname">Phone</label>
        <br />
        <input
          className="input"
          type="number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          id="lname"
          name="phone"
          placeholder='Phone number'
        />
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
          placeholder='password'
        />
        <br />
        <br />
        <br/>
        <button>Signup</button>
      </form>
      <br/>
      <a style={{color:"red"}} href ='/'>Login</a>
    </div>
  </div>
    </div>
  )
}

export default Signup
