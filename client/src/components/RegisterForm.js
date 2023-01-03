import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useLogin from '../hooks/useLogin';
import { Link, Router } from '@reach/router';
import useReg from '../hooks/useReg';
import { navigate } from '@reach/router';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
        {'LazyGram '}
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  TextField: {
    backgroundColor:theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
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
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Typography component="h1" variant="h5">
          Welcome to LazyGram
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            onChange={(e)=> setFirstName(e.target.value)} type="text" value={firstName}
          />

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            autoFocus
            onChange={(e)=> setLastName(e.target.value)} type="text" value={lastName}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=> setEmail(e.target.value)} 
            type="email" 
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="confirmPassword"
            onChange={(e)=> setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <FormControlLabel
            control={<Checkbox value="lsRememberMe" color="primary" id='rememberMe' />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={isLoading}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link to="/login" >
                {"Already have an account? Sign In!"}
              </Link>
            </Grid>
          </Grid>
          {error && <p>{error}</p>}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}




// import React, { useState } from 'react';
// import {
//     Paper,
//     FormControl,
//     InputLabel,
//     OutlinedInput,
//     Button
// } from '@material-ui/core';






// export default function RegisterForm() {
    
//     const [firstName,setFirstName]=useState("")
//     const [lastName,setLastName]=useState("")   
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [confirmPassword,setConfirmPassword]=useState('')
// const {reg,isLoading,error}=useReg()
// const handleSubmit = async (e) =>{
//     e.preventDefault()
//     console.log(email,password)
//     await reg(firstName,lastName,email,password,confirmPassword)
    
// }
// const styles = {
//     paper: {
//         width: "20rem", padding: "1rem"
//     },
//     input: {
//         marginBottom: "1rem"
//     },
//     button: {
//         width: "100%"
//     }
// }
//     return (
//         <Paper elevation={3} style={styles.paper}>
//             <h2>Login Form</h2>

//             <form onSubmit={handleSubmit}>
//             <FormControl variant="outlined" style={styles.input}>
//                     <InputLabel >first name</InputLabel>
//                     <OutlinedInput onChange={(e)=> setFirstName(e.target.value)} type="text" value={firstName}/>
//             </FormControl>
//             <FormControl variant="outlined" style={styles.input}>
//                     <InputLabel >last name</InputLabel>
//                     <OutlinedInput onChange={(e)=> setLastName(e.target.value)} type="text" value={lastName}/>
//             </FormControl>
//                 <FormControl variant="outlined" style={styles.input}>
//                     <InputLabel >E-mail</InputLabel>
//                     <OutlinedInput onChange={(e)=> setEmail(e.target.value)} type="email" value={email}/>
//                 </FormControl>
//                 <FormControl variant="outlined" style={styles.input}>
//                     <InputLabel >Password</InputLabel>
//                     <OutlinedInput onChange={(e)=> setPassword(e.target.value)} type="password" value={password}/>
//                 </FormControl>
//                 <FormControl variant="outlined" style={styles.input}>
//                     <InputLabel >CPassword</InputLabel>
//                     <OutlinedInput onChange={(e)=> setConfirmPassword(e.target.value)} type="password" value={confirmPassword}/>
//                 </FormControl>
//                 <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
//                     Login
//                 </Button>
//                 {error && <p>{error}</p>}

//             </form>
//         </Paper>
//     )
// }

