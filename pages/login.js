import Link from"next/link"
import style from"../styles/login.module.css"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Login(){
    return(
     <div>
         <form className={style.loginForm}>
                    <h1>LOGIN</h1>
                    <TextField
          className="emNpw"
          id="outlined-password-input"
          label="Email"
          type="email"
          autoComplete="current-password"
          variant="outlined"
        />
            <TextField
          className="emNpw"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
          <Button color="secondary" size="large">Login</Button>
         </form>
     </div>
    )
}