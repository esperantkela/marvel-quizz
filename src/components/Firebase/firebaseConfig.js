import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBHSzqot_hDwvQeXldxUhAN-genfGf7N4g",
    authDomain: "marvel-quizz-1c4ab.firebaseapp.com",
    projectId: "marvel-quizz-1c4ab",
    storageBucket: "marvel-quizz-1c4ab.appspot.com",
    messagingSenderId: "431332149388",
    appId: "1:431332149388:web:3f25cb58261974cd1053a9"
  };

const app = initializeApp(config); 
export const auth = getAuth(app);

export const firestore = getFirestore()
export const user = (uid)  => doc(firestore, `users/${uid}`)