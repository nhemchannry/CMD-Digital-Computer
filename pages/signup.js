import React from 'react';
import { TextField,Button,ButtonGroup } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {fireAuth} from './../services/firebase';
import {useRouter} from 'next/router'
import { fontFamily } from '@mui/system';
const useStyles= makeStyles((theme)=>({
  form:{
    width: 400,
    margin :'0 auto',
    backgroundColor:'rgb(250,251,255)',
    padding: 25,
    color: 'black',
    textAlign: 'center',
    marginTop: 50    
  },
  input:{
    width: '100%',
    marginTop: 25,
  },
  button:{
    marginTop: 25,
    width: 175
  }
}))
const Home = () => {
  const classes = useStyles();
  const router = useRouter()

  const handleUserRegister= (e)=>{
    e.preventDefault();
    const {fullName,email,password}= e.target.elements;
    console.log(fullName.value,email.value,password.value);
    fireAuth.createUserWithEmailAndPassword(email.value,password.value)
    .then((res)=>{
      console.log("User is Registered!");
      router.push('/home')
    }).catch((err)=>{
      console.error(err);
    })
  }
  return ( 
    <div>
      <form onSubmit={handleUserRegister} className={classes.form}>
        <p>Register form</p>
        <TextField className={classes.input} name="fullName"  label="Full Name" type="text" variant="filled" />
        <TextField className={classes.input} name="email" label="Email" type="email" variant="filled" />
        <TextField className={classes.input} name="password"  label="Password" type="password" variant="filled" />
        <ButtonGroup >
          <Button className={classes.button}  type="cancel" variant="outlined">Cancel</Button>
          <Button className={classes.button} type="submit" variant="contained">Submit</Button>
        </ButtonGroup>
      </form>
    
    </div>
   );
}
 
export default Home;