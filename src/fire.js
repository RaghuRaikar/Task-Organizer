// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBVUq2lzoHtEiaeqttF3_DcLmmAiUfrDLw",
  authDomain: "login-d1770.firebaseapp.com",
  projectId: "login-d1770",
  storageBucket: "login-d1770.appspot.com",
  messagingSenderId: "480233248369",
  appId: "1:480233248369:web:b5ef351e861fd0e9b4add0"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(fire);
export const auth = getAuth(fire);
export const provider = new GoogleAuthProvider();

export default fire;