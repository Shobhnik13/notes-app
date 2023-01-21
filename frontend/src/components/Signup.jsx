import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";
import { auth } from "../firebase";
const Signup = () => {
    //email inp state
    const [email,setEmail]=useState('')
    //password inp state
    const [password,setPassword]=useState('')
    //importing state by usecontext file
    const {signUp}=useUserAuth()
    //error state
    const [error,setError]=useState('')
    //using navigate to redirect user to login page after signup sucessfully
    const navigate=useNavigate();
    //submit function
    const handleSubmit=async (e)=>{
        //to prevnt page everytime from refresh
            e.preventDefault();
            try{
                await signUp(email,password)
                //as the signup was success so we need to set error as none and also redirect user to login page
                navigate('/')
                setError('')
                }catch(err){
                setError(err.message)
            }
    }
    return (
        <div className="w-[400px] m-auto mt-20 text-center border-2 shadow-xl rounded-md">
    <div className="p-4 box">
            <h2 className="mb-3 font-bold text-3xl">Signup here...</h2>
           {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3 text-xl" controlId="formBasicEmail">
                <Form.Control
                type="email"
                  placeholder="Email address"
                onChange={(e)=>setEmail(e.target.value)}  
                className='p-2'
                />
              </Form.Group>
    
              <Form.Group className="mb-3 text-xl" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    className='p-2'
                />
              </Form.Group>
    
              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit" className="bg-slate-200 p-2 rounded-xl text-xl mt-2 hover:cursor-pointer hover:bg-gray-400">
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
          <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to={'/'}><span className="hover:cursor-pointer text-blue-700 underline">Log in</span></Link>
          </div>
        </div>
      );
    };
    
    export default Signup;