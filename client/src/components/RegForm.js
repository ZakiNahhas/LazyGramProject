import React, { useState } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

export default function RegForm(props) {
const {initialName,initialName2,initialemail, initialpassword, initialcpassword}=props
const [firstName,setFirstName]=useState(initialName)
const [lastName,setLastName]=useState(initialName2)   
const [email,setEmail]=useState(initialemail)
const [password,setPassword]=useState(initialpassword)
const [confirmPassword,setConfirmPassword]=useState(initialcpassword)

const handleSubmit = e => {
    e.preventDefault();
    props.onSubmitProps({firstName,lastName,email,password,confirmPassword});
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
            <h2>Reg Form</h2>

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
                <Button type="submit" variant="contained" color="primary" >
                    Login
                </Button>
                {props.errors.map((msg, index) => <p key={index}>{msg}</p>)}

            </form>
        </Paper>
    )
}

