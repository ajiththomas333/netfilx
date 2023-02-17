import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDAEtvS8gG2RUkOmK60035bG_9PjdRfHJw",
    authDomain: "netflix-ba38a.firebaseapp.com",
    projectId: "netflix-ba38a",
    storageBucket: "netflix-ba38a.appspot.com",
    messagingSenderId: "782711289100",
    appId: "1:782711289100:web:d51b7afa29134ba1788529",
    measurementId: "G-Z6GJSWHLX6"
  };
   initializeApp(firebaseConfig)
  const Firebase=getFirestore()
  export default Firebase