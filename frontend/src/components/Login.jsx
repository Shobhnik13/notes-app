import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";

const Login = () => {
    return (
        <div className="w-[400px] m-auto mt-20 text-center border-2 shadow-xl rounded-md">
          <div className="p-4 box">
            <h2 className="mb-3">Login Here....</h2>
            <Form >
          <Form.Group className="mb-3 text-xl" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
            />
          </Form.Group>

          <Form.Group className="mb-3 text-xl " controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
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
          
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center ">
        Don't have an account? <span className="hover:cursor-pointer text-blue-700 underline">Sign up</span> 
      </div>
    </div>
  );
   
}

export default Login