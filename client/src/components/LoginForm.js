import React, { useState } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import useLogin from '../hooks/useLogin';




export default function LoginForm() {
    
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const {login,error,isLoading}=useLogin()
const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(email,password)
    await login(email,password)
}
const styles = {
    paper: {
        width: "20rem", padding: "1rem"
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
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>
                
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel >E-mail</InputLabel>
                    <OutlinedInput onChange={(e)=> setEmail(e.target.value)} type="email" value={email}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel >Password</InputLabel>
                    <OutlinedInput onChange={(e)=> setPassword(e.target.value)} type="password" value={password}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                    Login
                </Button>
                {error && <p>{error}</p>}
            </form>
        </Paper>
    )
}

