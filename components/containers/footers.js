import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        '& *':{
            color : '#eee'
        }
      
       
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
                <Grid item xs={12} sm={3}>
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

            </Grid>



        </div>
    );
}
