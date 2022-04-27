import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Form} from "react-bootstrap";
import {useState, Alert} from "react";
import {useUserAuth} from "../context/UserAuthContext";

function Login() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError]=useState("");
  const {logIn} =useUserAuth();
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setEmail(e.target.value)
  console.log(e.target.value);
  }

  const handleChangePass=(e)=>{
    setPassword(e.target.value)
    console.log(e.target.value);
    }

    const handleSubmit=async(e)=>{
     e.preventDefault();
     setError("");
     console.log("submitted")
     try{
       await logIn(email, password);
          navigate("/Home")
     }catch (err){
       setError(err.message);
     }
    };
    // console.log("hello");
  return (
    <div className='p-4 box'>
    <h2 className='mb-3'>Firebase Auth Login</h2>
    <p className='err-login'>{error}</p>
    {/* {error && <Alert variant="danger">{error}</Alert>} */}
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controldId="formBasicEmail">
      <Form.Control type="email" placeholder="Email address" onChange={ handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controldId="formBasicPassword">
      <Form.Control type="password" placeholder="Password" onChange={ handleChangePass}/>
    </Form.Group>

    <div className='d-grid gap-2'>
      <button variant="primary" type='Submit'>
        Log In
      </button>
    </div>
    </Form>
    <hr />
    
    <div className='p-4 box mt-3 text-centre'>
     Don't have ab account? <Link to="/Signin">Signup</Link> 
    </div>
    </div>
  )
}

export default Login;