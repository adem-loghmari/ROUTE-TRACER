// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsONb3CDwVMFYlLnZ_0HT4ATEJcjbfHP8",
  authDomain: "route-tracer-3d08b.firebaseapp.com",
  projectId: "route-tracer-3d08b",
  storageBucket: "route-tracer-3d08b.appspot.com",
  messagingSenderId: "774235150992",
  appId: "1:774235150992:web:5e1e42fc2b56e812445615",
  measurementId: "G-2CQH4FHRML"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
