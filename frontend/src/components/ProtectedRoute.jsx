import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';
const ProtectedRoute = ({children}) => {
  let { user }=useUserAuth();
  if(!user){
    //if the user is not signed in so redirect him to the login page
    const navigate=useNavigate()
   return navigate('/')
  }
  //else its signed in then just return that child component 
    return children; 
}

export default ProtectedRoute