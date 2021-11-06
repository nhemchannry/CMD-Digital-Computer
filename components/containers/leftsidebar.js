import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import LaptopIcon from '@material-ui/icons/Laptop';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'auto',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 65,
  },
  drawerContainer: {
    overflow: 'auto',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 700,
    padding: '1px',
  },
}));
export default function LeftSideBar(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerContainer}>
            <List>
              DESKTOP
              {['DEll', 'APPLE', 'ASUS', 'ACER'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon><DesktopWindowsIcon/></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              LAPTOP
              {['DEll', 'APPLE', 'ASUS', 'ACER'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon> <LaptopIcon/></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              ACCESERY
              {['BAG', 'KEYBOARD','MOUSE','CUP','RAM','HHD'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon><ShoppingBasketIcon/></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
        
    )
}