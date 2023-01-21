// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUNMZX2T7-yEb0rsmK6770nqaA4iNC3T4",
  authDomain: "todo-app-4e21c.firebaseapp.com",
  projectId: "todo-app-4e21c",
  storageBucket: "todo-app-4e21c.appspot.com",
  messagingSenderId: "589748988025",
  appId: "1:589748988025:web:f726c24c15aa534dce4ca8",
  measurementId: "G-4FQLQ27XMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth=get