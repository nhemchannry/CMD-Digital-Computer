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
    label: 'MOUSE',
    imgPath:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fnz%2Fnewsroom%2F2020%2F03%2Fnew-macbook-air-has-more-to-love-and-is-now-just-999%2F&psig=AOvVaw2xVigugPC4XT909LzVtcBY&ust=1636308543209000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCNju3r6qhPQCFQAAAAAdAAAAABAD',
  },
  {
    label: 'KEYBOARD',
    imgPath:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.notebookcheck.net%2FLenovo-ThinkPad-L13-Yoga-Gen2-20VK000VGE.562743.0.html&psig=AOvVaw1F9p8TSQ0A0lr9LO5GrHbp&ust=1636308580454000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOj6ptiqhPQCFQAAAAAdAAAAABAD',
  },
  {
    label: 'FLASH',
    imgPath:
      'https://hothardware.com/ContentImages/Article/2738/content/small_dell_inspiron_5680_stock.jpg',
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

export default function ImageAccesery2() {
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
      steps={6}
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
