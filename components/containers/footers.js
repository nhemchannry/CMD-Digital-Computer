import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid } from '@material-ui/core'
import Link from 'next/link';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        '& *':{
            color : '#eee'
        }
      
       
    },
    header: {
        fontFamily:'Book Antiqua',
        fontSize:'18px',
        
    },
    alltext:{
        paddingTop:'8px',
    },
   
    
}));

export default function Footers() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid style={{paddingLeft: 50}} item xs={12} sm={3}>
                    <h1>DESKTOP</h1>
                    <p>MSI</p>
                    <p>DELL</p>
                    <p>ASUS</p>
                    <p>MAC</p>
                    <p>LENOVO</p>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <h1>LAPTOP</h1>
                    <p>MSI</p>
                    <p>DELL</p>
                    <p>ASUS</p>
                    <p>MAC</p>
                    <p>LENOVO</p>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <h1>ACCESSORY</h1>
                    <p>MOUSE</p>
                    <p>KEYBOARD</p>
                    <p>FLASH</p>
                    <p>BAG</p>
                    <p>HDD SSD</p>
                </Grid>
                <Grid item xs={12} sm={4}>
                                <div  className={ classes.header}>
                            <div className={classes.alltext}> 
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
                                </div>
                            </div>
                        </div>
                </Grid>

            </Grid>



        </div>
    );
}
