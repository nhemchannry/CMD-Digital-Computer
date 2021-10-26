import React from 'react';
import { makeStyles} from '@material-ui/core/styles'
import Link from 'next/link'
import Image from "next/image"
import Box from "@material-ui/core/Box"


const useStyles= makeStyles((theme)=>({
    header: {
        backgroundColor: '#fcfbd7',
        width:'100',
        height: '90vh',
        fontFamily:'Book Antiqua',
        fontSize:'18px',
        paddingLeft:'50px' ,
        paddingTop: '20px ' ,
        
    },
    h1:{
        color: '#33312c',
        fontSize: '60',
    
    },
    businesshours:{
        color:'#f20f25',
    },
    numemail:{
        color:'#0557a3',
    },
    alltext:{
        paddingTop:'8px',
    },
   
}))

const ContactPage=()=>{
    const classes= useStyles();

    return(
      
        <div  className={ classes.header}>
            <h1 className={classes.h1}> CONTACT US </h1>
            <div className={classes.alltext}> 
            <p className={ classes.cmd}> CMD-Digital-Computer( Phnom Penh)</p>
            <p>Address: No. 360-362Eo, Kampuchea Krom Blvd.,
             Sangkat Mittapheap,<br/> Khan 7 Makara, Phnom Penh, Cambodia</p>
            <div className={ classes.numemail} >
            <p>Sales: +855 99 555 729 | +855 15 503 999</p>
            <p>Services: +855 93 52 61 71</p>
            <p> 
            <Link href ="/email"> Email: Sales@cmd-digital-computer.com</Link></p>
            </div>
            
            <div className={classes.businesshours } >
            <p>Business Hours:</p>
            <p>Sales       : 8: 00AM - 6: 30PM ( Monday to Sunday )</p>
            <p>Services : 8: 00AM - 5: 30PM ( Monday to Sunday )</p>
            </div>
        
           
            </div>
            
        </div>
       
        
        

    )
}
export default ContactPage;