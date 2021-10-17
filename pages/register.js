import Link from"next/link"
import style from"../styles/login.module.css"
import InputLogin from "../components/presentations/inputlogin"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Register(){
    return(
        <div>
         <form className={style.loginForm}>
            <h1>REGISTER</h1>
         <InputLogin label="Username" type="text"/>
         <InputLogin label="Password" type="Password"/>
         <InputLogin label="Repeat Password" type="Password"/>
         <Button color="secondary" size="large">Sign Up</Button>
         </form>
     </div>
    )

}