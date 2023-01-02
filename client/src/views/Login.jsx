import React, { useState } from "react";
// import { LazyGram } from "../../Icons";
import { Link } from '@reach/router';
import logo from './LazyGram.png'
import backGround2 from './gradient-background-instagram-free-vector.jpg'
import useLogin from '../hooks/useLogin';


import {
  Paper,
  Button
} from '@material-ui/core';
export default function  Login()  {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const {login,error,isLoading}=useLogin()
const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log("email,password")
    await login(email,password)
}
  const styles = {
    paper: {
        width: "20rem", padding: "1rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage:`url(${backGround2})` 
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}
  return (
    <Paper elevation={3} style={styles.paper}>
    <div>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div>

            <input  placeholder="Email address" onChange={(e)=> setEmail(e.target.value)} type="email" value={email} />
          </div>
          <div>
            <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}  value={password} />
          </div>
          <br></br>
          <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
          Login
          </Button>
          {error && <p>{error}</p>}
     
        </form>

        <div>
          <p>OR</p>
        </div>
        
      </div>
      <div>
        <p>
          Don't have and account?
          <span>
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
    </Paper>
  );
};

