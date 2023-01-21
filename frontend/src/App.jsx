import { useState,useEffect } from 'react'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './components/Todo';
import {db} from './firebase'
import {query,collection, onSnapshot, updateDoc, doc, deleteDoc, addDoc} from 'firebase/firestore'
import Login from './components/Login';
import Home from './components/Home';
import { Navigate,Link, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import { UserAuthContext } from './Context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
  <div className='app'>
    <UserAuthContext>
      {/* making a layer on all over all app cmp of the state provider function  */}
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home_todo' element={ <ProtectedRoute><Home/></ProtectedRoute>}/>
     </Routes>
     </UserAuthContext>
  </div>
  )
}

export default App
