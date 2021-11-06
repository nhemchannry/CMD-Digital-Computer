import React from 'react';
import { TextField } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from 'next/link'

const useStyles= makeStyles((theme)=>({
    root:{
        backgroundColor: `#fff`,
        height: `100vh`
    },
    form:{
        width: 400,
        backgroundColor: 'white',
        margin: '0 auto',
        padding: 25,
        '& .input':{
            width: '100%',
            marginTop: 10
        }
    },
    btn:{
        marginTop: 15,
        width: '100%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }
}));
export default function Contact(){
    const classes = useStyles();

    function handleSendEmail(e){
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm("cmd-digital-server", "cmd-template", e.target, "user_lod2R8qXUXUch322dpXeT")
        .then((res)=>{
            console.log("Your message is sent successfully!");
        }).catch((err)=>{
            console.error(err)
        })
    }
    return(
        <div className={classes.root}>
           <form onSubmit={handleSendEmail} className={classes.form}>
           <TextField name="fullName" required className="input" id="outlined-basic" label="Name" type="text" variant="outlined" />
           <TextField name="email" required className="input" id="outlined-basic" label="Email" type="email" variant="outlined" />
           <TextField name="message" required className="input" id="outlined-basic" label="Message" type="text" variant="outlined" />
           <Button className={classes.btn} type="submit" variant="contained" color="primary ">Submit</Button>
           </form>
        </div>
    )
}