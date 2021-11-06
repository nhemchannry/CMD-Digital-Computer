import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ImageAccesery from '../Imageaccesery/imageaccesery';
import ImageAccesery2 from '../Imageaccesery/imageaccesery2';
import ImageAccesery3 from '../Imageaccesery/imageaccesery3';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 200,
    display: 'flex',
    border: 2,
    boxShadow:1,
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
  },
}));

export default function Accesery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}><ImageAccesery/></Paper>
      <Paper><ImageAccesery2/></Paper>
      <Paper><ImageAccesery3/></Paper>

     
    </div>
  );
}
