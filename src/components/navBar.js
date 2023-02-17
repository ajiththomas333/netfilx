import React, { useContext } from 'react'
import "./navBar.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext, FirebaseContext } from './store/FirebaseCotext';
import { getAuth,signOut } from "firebase/auth";

function NavBar() {
  const{user}=useContext(AuthContext)
  const{}=useContext(FirebaseContext)
  const navigate=useNavigate()
  return (
    <div className="navbar">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="they have no image" />
        <img className="avter" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt='aveter'/>
        {user ?<h1 className='ttt'>{user.displayName}</h1> : <button className='ddd' onClick={()=>{
          navigate('/')
        }
        }>login
        </button>}
        {user && <button  className='ddd' onClick={()=>{
          const auth = getAuth();
          signOut(auth);
          navigate('/')
        }}>logout</button>}

      
      
      
      
    
    </div>
  )
}    

export default NavBar
