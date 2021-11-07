import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft: 10,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const itemData = [
       {
         img: "./Pic.Home/Rog.jpg",
         title: 'ROG',
         author: 'ROG',
       },
       {
        img: "./Pic.Home/Aorus.jpg",
        title: 'AORUS',
        author: 'AORUS',
      },
      {
        img: "./Pic.Home/DEROATOR.jpg",
        title: 'DEROATOR',
        author: 'DEROATOR',
      }, {
        img: "./Pic.Home/HP Pavilion 690.jpg",
        title: 'PAVILION 690',
        author: 'HP',
      },
      {
        img: "./Pic.Home/MSI MEG Aegis Ti5.jpg",
        title: 'MEG AEGIS TI5',
        author: 'MSI',
      },
      {
        img: "./Pic.Home/Mouse.jpg",
        title: 'Moune and keyboard',
        author: 'Mouse',
      },
      {
        img: "./Pic.Home/powersupply.jpg",
        title: 'POWER SUPPLY',
        author: 'power supply',
      },
      {
        img: "./Pic.Home/RAM.jpg",
        title: 'RAM',
        author: 'RAM',
      },
      {
        img: "./Pic.Home/Xiaomi-Mi-Surface-Monitor.jpg",
        title: 'MONITOR',
        author: 'Monitor',
      }, 
     
     ];
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={6}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
