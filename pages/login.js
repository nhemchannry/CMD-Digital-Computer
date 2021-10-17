import Link from"next/link"
import style from"../styles/login.module.css"
import InputLogin from "../components/presentations/inputlogin"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Login(){
    return(
     <div>
         <form className={style.loginForm}>
            <h1>LOGIN</h1>
         <InputLogin label="Username" type="text"/>
         <InputLogin label="Password" type="Password"/>
         <Button color="secondary" size="large">Login</Button>
         </form>
     </div>
    )
}