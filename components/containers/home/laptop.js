import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ImageLaptop from '../Imagelaptop/imagelaptop';
import ImageLaptop2 from '../Imagelaptop/imagelaptop2';
import ImageLaptop3 from '../Imagelaptop/imagelaptop3';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 65,
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

export default function Laptop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}><ImageLaptop/></Paper>
      <Paper><ImageLaptop2/></Paper>
      <Paper><ImageLaptop3/></Paper>

     
    </div>
  );
}