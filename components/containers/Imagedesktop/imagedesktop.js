import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: 'DELL G3',
    imgPath:
      'https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/g-series/g3_15_3500_non-touch/dg3500nt_cnb_00055rf110_bk_50w.psd?fmt=pjpg&amp;pscan=auto&amp;scl=1&amp;hei=402&amp;wid=402&amp;qlt=100,0&amp;resMode=sharp2&amp;size=402,402',
  },
  {
    label: 'LENOVO THINKPAD',
    imgPath:
      'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzE4MTc2fGltYWdlL3BuZ3xoZWUvaDE3Lzk5MTg3NjE3MzAwNzgucG5nfDIzYTk5OGFmMzk3Mzg1YTk2ZDg3NDhmYjY1YzJhNjk1MDk2MDVjNjVjMTRhODdlYjZmOGNhYjE2NTU2NWY1MGU/lenovo-laptop-thinkpad-t590-hero.png',
  },
  {
    label: 'DELL SPIRON GAMING',
    imgPath:
      'https://i.dell.com/sites/imagecontent/products/PublishingImages/inspiron-15-7567-laptop/hero/notebook-inspiron-15-7567-non-touch-black-front-windows-hero-504x350-ng.png',
  },
  {
    label: 'MSI MEG TRIDENT X',
    imgPath:
      'https://i.ytimg.com/vi/NFrR_xZ3yPo/maxresdefault.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    '& button':{
      color : "black",
  }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function ImageDesktop() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
      variant="dots"
      steps={4}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
      />
    </div>
  );
}
