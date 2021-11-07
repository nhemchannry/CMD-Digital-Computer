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
    label: 'BAG',
    imgPath:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FMSI-Urban-Raider-Backpack-Lightweight%2Fdp%2FB07JGHZHZS&psig=AOvVaw1ztUoEz8W2OOHXf4keL90A&ust=1636308826348000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOjIrsqrhPQCFQAAAAAdAAAAABAD',
  },
  {
    label: 'HDD',
    imgPath:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblocksandfiles.com%2F2021%2F02%2F18%2Ftoshiba-18tb-mg09-hdd%2F&psig=AOvVaw2egaD_iYciusxhYtc51Oz8&ust=1636308856533000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIirwtirhPQCFQAAAAAdAAAAABAk',
  },
  {
    label: 'SSD',
    imgPath:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.westerndigital.com%2Fen-ap%2Fproducts%2Finternal-drives%2Fwd-blue-sata-m-2-ssd&psig=AOvVaw2lie1RCexznVTT3E9KhHn5&ust=1636308909383000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKCilfWrhPQCFQAAAAAdAAAAABAD',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    '& button':{
      color : "black",
      backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function ImageAccesery() {
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
      steps={3}
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
