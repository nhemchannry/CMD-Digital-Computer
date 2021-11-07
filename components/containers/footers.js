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
                    <h1>LAPTOP</h1>
                          <Link href = "/Laptop/MSI">
                          <p>MSI</p>
                          </Link>
                          <Link href = "/Laptop/ASUS">
                          <p>ASUS</p>
                          </Link>
                          <Link href = "/Laptop/Dell">
                          <p>Dell</p>
                          </Link>
                          <Link href = "/Laptop/Lenovo">
                          <p>Lenovo</p>
                          </Link>
                          <Link href = "/Laptop/MacBook">
                          <p>Mac</p>
                          </Link>
                    
                </Grid>
                <Grid item xs={12} sm={2}>
                <h1>DESKTOP</h1>
                          <Link href = "/Desktop/MSI_Desktop">
                          <p>MSI</p>
                          </Link>
                          <Link href = "/Desktop/ASUS_Desktop">
                          <p>ASUS</p>
                          </Link>
                          <Link href = "/Desktop/Dell_Desktop">
                          <p>DELL</p>
                          </Link>
                          <Link href = "/Desktop/Lenovo_Desktop">
                          <p>LENOVO</p>
                          </Link>
                          <Link href = "/Desktop/iMac">
                          <p>iMAC</p>
                          </Link>



                </Grid>
                <Grid item xs={12} sm={3}>
                    <h1>ACCESSORY</h1>

                        <Link href = "/Accessory/Mouse">
                        <p>MOUSE</p>
                        </Link>
                        <Link href = "/Accessory/Keyboard">
                        <p>KEYBOARD</p>
                        </Link>
                        <Link href = "/Accessory/Flash">
                        <p>FLASH</p>
                        </Link>
                        <Link href = "/Accessory/Bag">
                        <p>BAG</p>
                        </Link>
                        <Link href = "/Accessory/HDD_SSD">
                        <p>HDD SSD</p>
                        </Link>
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
