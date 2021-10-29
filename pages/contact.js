import React from 'react';
import { TextField } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles= makeStyles((theme)=>({
    root:{
        backgroundColor: `#fff`,
        height: `100vh`
    },
    form:{
        width: 400,
        backgroundColor: 'green',
        margin: '0 auto',
        padding: 40
    }
}))
export default function Contact(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
           <form className={classes.form}>
           <TextField id="outlined-basic" label="Outlined" variant="outlined" />
           <TextField id="outlined-basic" label="Outlined" variant="outlined" />
           <TextField id="outlined-basic" label="Outlined" variant="outlined" />
           </form>
        </div>
    )
}