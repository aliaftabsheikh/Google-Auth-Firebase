import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBqRgsalZibVT4VXcXaicxxxVH2wQztTjA",
  authDomain: "auth-5a5f8.firebaseapp.com",
  projectId: "auth-5a5f8",
  storageBucket: "auth-5a5f8.appspot.com",
  messagingSenderId: "699188334908",
  appId: "1:699188334908:web:17e5bbc548b298dd3f0e39",
  measurementId: "G-T2TWYFQ70T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export const signInWithGoogle = ()=>{
    signInWithPopup (auth, provider).then((result)=>{

    const name = result.user.displayName
    const email = result.user.email
    const profilePic = result.user.photoURL

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic)

    }).catch((error)=>{
        console.log(error);
    })
}