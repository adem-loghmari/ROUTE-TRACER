// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLQRAO09QXALDs4l1CLUBNcOCq593kAXQ",
  authDomain: "route-tracer-33520.firebaseapp.com",
  projectId: "route-tracer-33520",
  storageBucket: "route-tracer-33520.appspot.com",
  messagingSenderId: "521810186197",
  appId: "1:521810186197:web:ed84136e31456ab567775c",
  measurementId: "G-DXK5L6P7R7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
