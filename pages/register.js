import Link from"next/link"
import style from"../styles/login.module.css"
import Input from "../components/presentations/input.js"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FireExtinguisher, Router } from "@mui/icons-material";
import { route } from "next/dist/server/router";
import { useRouter } from "next/dist/client/router";

export default function Register(){
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
    }
    return(
        <div>
         <form onSubmit={handleUserRegister} className={style.loginForm}>
            <h1>REGISTER</h1>
         <Input label="Username" type="text"/>
         <Input label="Password" type="Password"/>
         <Input label="Repeat Password" type="Password"/>
         <Button color="secondary" size="large">Sign Up</Button>
         </form>
     </div>
    )
}