import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SingleLineImageList from '../components/containers/home/ImageSlider';
import NameCompany from './../components/containers/home/namecompany';
import Desktop from '../components/containers/home/desktop';
import Laptop from '../components/containers/home/laptop';
import Accesery from '../components/containers/home/accesery';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
    'linear-gradient( 136deg, #bcaaa4 0%, #efdcd5 50%, #8c7b75 100%)',
  boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  marginTop: 65,
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <SingleLineImageList/>
    <NameCompany/>
    <Desktop/>
    <Laptop/>
    <Accesery/>
    </div>
  );
}
