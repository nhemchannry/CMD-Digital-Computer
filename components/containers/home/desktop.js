import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ImageDesktop from '../Imagedesktop/imagedesktop';
import ImageDesktop2 from '../Imagedesktop/imagedesktop2';
import ImageDesktop3 from '../Imagedesktop/imagedesktop3';

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

export default function Desktop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <ImageDesktop/></Paper>
      <Paper><ImageDesktop2/></Paper>
      <Paper><ImageDesktop3/></Paper>

     
    </div>
  );
}
