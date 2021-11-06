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
                    <p>Dell</p>
                    <p>Dell</p>
                    <p>Dell</p>
                    <p>Dell</p>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <h1>DESKTOP</h1>
                    <p>Dell</p>
                    <p>Dell</p>
                    <p>Dell</p>
                    <p>Dell</p>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <h1>DESKTOP</h1>
                    <p>Dell</p>
                    <p>Dell</p>
                    <p>Dell</p>
                    <p>Dell</p>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <h1>DESKTOP</h1>
                    <p>Dell</p>
                    <p>Dell</p>
                    <p>Dell</p>
                    <p>Dell</p>
                </Grid>

            </Grid>



        </div>
    );
}
