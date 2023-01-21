import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
const Login = () => {
    //email inp state
    const [email,setEmail]=useState('')
    //password inp state
    const [password,setPassword]=useState('')
    //importing state by usecontext file
    const {login}=useUserAuth()
    //error state
    const [error,setError]=useState('')
    //using navigate to redirect user to login page after signup sucessfully
    const navigate=useNavigate();
    //submit function
    const handleSubmit=async (e)=>{
        //to prevnt page everytime from refresh
            e.preventDefault();
            try{
                await login(email,password)
                //as the login was success so we need to set error as none and also redirect user to home page
                navigate('/home_todo')
                setError('')
                }catch(err){
                setError(err.message)
            }
    }
    //google sign in 
    const {googleSignIn}=useUserAuth()
    const handleGoogleSignIn=async ()=>{
        try{
                await googleSignIn()
                //as the login is success then redirect user to home page
                navigate('/home_todo')
    }catch(err){
        console.log(err.message)
    }
}
    return (
        <div className="w-[400px] m-auto mt-20 text-center border-2 shadow-xl rounded-md">
          <div className="p-4 box">
            <h2 className="mb-3 font-bold text-3xl">Login Here....</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3 text-xl" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e)=>setEmail(e.target.value)}
                className='p-2'
            />
          </Form.Group>

          <Form.Group className="mb-3 text-xl " controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
              className='p-2'
            />
          </Form.Group>

          <div className="d-grid gap-2 text-xl ">
            <Button variant="primary" type="Submit" className="bg-slate-200 p-2 rounded-xl my-2 hover:cursor-pointer hover:bg-gray-400">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn w-full m-auto mt-4"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center ">
        Don't have an account? <Link to={'/signup'}><span className="hover:cursor-pointer text-blue-700 underline">Sign up</span></Link> 
      </div>
    </div>
  );
   
}

export default Login