import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core";
import styles from "../styles/about.module.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginTop: "6%",
  },
  media: {
    height: 200,
    backgroundColor: "#040828",
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <h1>ABOUT US</h1>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/aboutImage1.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={styles.heading}>
                  Brand Authenticity
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  We provide the product and being shipped from the original brand with fully qualification.
                  <br/><br/>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
     

     
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://cdn1.iconfinder.com/data/icons/business-and-finance-233/32/Busness_finance-13-512.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={styles.heading}>
                  What are we?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  We enable business transformation and enrichment of lives by delivering sustainable world class technology products, solutions and services in our chosen markets thereby creating superior shareholder value.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
     

     
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://th.bing.com/th/id/R.af70c9389e77dd8c7e4ef8d8f7f41fef?rik=XIAQPAzCdF26DA&pid=ImgRaw&r=0"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={styles.heading}>
                  Our People
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  We enable business transformation and enrichment of lives by delivering sustainable world class technology products, solutions and services in our chosen markets thereby creating superior shareholder value.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </div>
  );
}
