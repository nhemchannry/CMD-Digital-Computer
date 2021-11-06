import React, {useEffect, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Grid, ButtonBase } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useRouter} from "next/router";
import Image from "next/image";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiAlert from "@material-ui/lab/Alert";
import {fireAuth} from "../services/firebase";
import Typography from "@material-ui/core/Typography";
import { CheckBox,SendOutlined } from "@material-ui/icons";
import styles from "../styles/index.module.css";


function Alert(props){
  return <MuiAlert elevation ={6} variant="filled" {...props}/>;
}

function Copyright(){
  return(
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright"}
      <Link color="inherit" href="https://v4.mui.com/">
        CMD Digital Computer
      </Link>{""}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme)=>({
  root:{
    height:"100vh",
  },
  wrapper:{
    margin: theme.spacing(1),
    position: "relative",
  },
  image:{
    backgroundImage: "./bg.jpg",
    backgroundRepeat: "no-repeat",
    backgroundColor:"#040828",
      backgroundSize: "cover",
      backgroundPosition: "center",
  },
  paper:{
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
  },
  avatar:{
    margin: theme.spacing(1),
    border:50,
  },
  form:{
    width:"100%",
    marginTop: theme.spacing(1),
  },
  submit:{
    margin: theme.spacing(3,0,3),
  },
  buttonProgress:{
    color: "#55000",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },

}))


export default function LoginForm(){
  const classes = useStyles();
  const router =useRouter()
  const [error, setError]=React.useState("")
  const [isForgotPassword, setIsForgotPassword]=React.useState(false)
  const handleUserLogin= (e)=>{
    e.preventDefault()
    const {email, password}= e.target.elements;
    fireAuth.signInWithEmailAndPassword(email.value, password.value)
    .then((res)=>{
      console.log("Login Succesfully!")
      router.push('/home')
    }).catch((err)=>{
      console.error(err)
      setError(err.message)
    })
  }
  const handleForgotPassword = (e)=>{
    setError("")
    e.preventDefault()
    const {email}= e.target.elements;
    fireAuth.sendPasswordResetEmail(email.value)
    .then((res)=>{
      console.log("Please check your email!")    
      setIsForgotPassword(false)  ;
    }).catch((err)=>{
      console.error(err)
      setError(err.message)
    })
  }
    return(
      <Grid container component="main" className={classes.root}> 
        <CssBaseline/>
        <Grid item xs={false} sm={4} md={7} className={classes.image}/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Image 
          className={classes.avatar}
          src="/CMD Digital Computer.png"
          alt="cmd logo"
          width={50}
          height={50} />
          <Typography componet="h1" variant="h5">
          Login to your account
          </Typography>
          { !isForgotPassword? 
            <form onSubmit={handleUserLogin} className={classes.form} noValidate> 
            <TextField 
            variant="outlined" 
            margin="normal"
            required
            fullWidth 
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus />
            <TextField 
            variant="outlined" 
            margin="normal"
            required
            fullWidth 
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus />
            <formControlLabel
              control={<CheckBox value="remember" color="primary"/>}
              label="Remember Me"
            />
            <Typography color="secondary">{error}</Typography>
            <div className={classes.wrapper}>
              <Button
              type="submit"
              fullWidth
              endIcon={<SendOutlined/>}
              variant="contained"
              color="primary">
                Sign In
              </Button>
            </div>
            <Grid container>
              <Grid item xs>
                <ButtonBase>
                  <Link onClick={()=>{
                    setIsForgotPassword(true)
                    setError("")
                    }} variant="body2">
                  Forgot Password
                  </Link>
                </ButtonBase>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright/>
            </Box>
            </form>:
                        <form onSubmit={handleForgotPassword} className={classes.form} noValidate> 
                        <TextField 
                        variant="outlined" 
                        margin="normal"
                        required
                        fullWidth 
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus />
                        <Typography color="secondary">{error}</Typography>
                        <div className={classes.wrapper}>
                          <Button
                          type="submit"
                          fullWidth
                          endIcon={<SendOutlined/>}
                          variant="contained"
                          color="primary">
                            Send
                          </Button>
                        </div>
                        <Grid container>
                        <Link onClick={()=>{
                    setIsForgotPassword(false)
                    setError("")
                    }} variant="body2">
                  Login
                  </Link>
                        </Grid>
                        <Box mt={5}>
                          <Copyright/>
                        </Box>
                        </form>
}
            </div>
        </Grid>
        </Grid>
    );
} 	      
