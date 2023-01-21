import { useState,useEffect } from 'react'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './components/Todo';
import {db} from './firebase'
import {query,collection, onSnapshot, updateDoc, doc, deleteDoc, addDoc} from 'firebase/firestore'
import Login from './components/Login';
import Home from './components/Home';
function App() {
  return (
  <div className='app'>
    <Home/>
    <Login/>
  </div>
  )
}

export default App
