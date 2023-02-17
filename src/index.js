import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './components/store/FirebaseCotext';
import Firebase from './components/firebase/Config';
import Context from './components/store/FirebaseCotext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <FirebaseContext.Provider value={{Firebase}}>
    <Context>
    <App />
    </Context>
    </FirebaseContext.Provider>
  
);

