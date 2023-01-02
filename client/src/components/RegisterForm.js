import React, { useState } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import { navigate } from '@reach/router';
import useReg from '../hooks/useReg';




export default function RegisterForm() {
    
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")   
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState('')
const {reg,isLoading,error}=useReg()
const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(email,password)
    await reg(firstName,lastName,email,password,confirmPassword)
    
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
                    <InputLabel >first name</InputLabel>
                    <OutlinedInput onChange={(e)=> setFirstName(e.target.value)} type="text" value={firstName}/>
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
                    <InputLabel >last name</InputLabel>
                    <OutlinedInput onChange={(e)=> setLastName(e.target.value)} type="text" value={lastName}/>
            </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel >E-mail</InputLabel>
                    <OutlinedInput onChange={(e)=> setEmail(e.target.value)} type="email" value={email}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel >Password</InputLabel>
                    <OutlinedInput onChange={(e)=> setPassword(e.target.value)} type="password" value={password}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel >CPassword</InputLabel>
                    <OutlinedInput onChange={(e)=> setConfirmPassword(e.target.value)} type="password" value={confirmPassword}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                    Login
                </Button>
                {error && <p>{error}</p>}

            </form>
        </Paper>
    )
}

