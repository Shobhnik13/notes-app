import React from 'react'
import { createContext } from 'react';
import { useContext } from 'react'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useEffect } from 'react';
import { useState } from 'react';
const userAuthContextProvider=createContext();
export const UserAuthContext = ({children}) => {
    //user state
    const [user,setUser]=useState('');
    // signup function 
  const signUp=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
//   login funcion 
  const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
//   telling/notifying by uisng onAuthStateChanged funcion which will be rendered one time only when a user signs up 
        useEffect(()=>{
            const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
                        //as now the user is signed in so we are updating the user state by current user 
                        setUser(currentUser)
            })
            //as when the user component gets unmounted so we need to do the cleanup this 
            return ()=>{
                unsubscribe()
            }
        },[])
        //logout function
        const logout=()=>{
            return signOut(auth);
        }
        //google login functionality 
        const googleSignIn=()=>{
            const provider = new GoogleAuthProvider();
            return signInWithPopup(auth,provider)

        }
    return (
    <userAuthContextProvider.Provider value={{user,signUp,login,logout,googleSignIn}} >
        {children}
    </userAuthContextProvider.Provider>
        )
}
export const useUserAuth=()=>{
    return useContext(userAuthContextProvider);
}