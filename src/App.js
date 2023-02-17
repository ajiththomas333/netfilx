
import React, {useContext,useEffect} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Apps from './Apps'
import { AuthContext, FirebaseContext } from './components/store/FirebaseCotext'

function App() {
  const {Firebase}=useContext(FirebaseContext)
  const{user,setUser}=useContext(AuthContext)

  useEffect(()=>{
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  setUser(user)
  })
})
  return (
    <div >
      
     
   
   <Router>
    <Routes>
    <Route  element={<Apps/>} path="/home"/>
      <Route  element={<Signup/>} path="/signup"/>
      <Route element={<Login/>} path="/"/>
    </Routes>
   </Router>
   

    </div>
  );
}

export default App;
