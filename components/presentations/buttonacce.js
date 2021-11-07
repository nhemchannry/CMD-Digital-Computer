import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import MouseIcon from '@material-ui/icons/Mouse';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import UsbIcon from '@material-ui/icons/Usb';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import StorageIcon from '@material-ui/icons/Storage';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function ACCESERY() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
           Accessory
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <Link href = "/Accessory/Mouse">
                        <MenuItem onClick={handleClose}> <MouseIcon style={{marginRight: 25}}/> Mouse</MenuItem>
                        </Link>
                        <Link href = "/Accessory/Keyboard">
                        <MenuItem onClick={handleClose}>< KeyboardIcon style={{marginRight: 25}}/> Keyboard</MenuItem>
                        </Link>
                        <Link href = "/Accessory/Flash">
                        <MenuItem onClick={handleClose}> <UsbIcon style={{marginRight: 25}}/> Flash</MenuItem>
                        </Link>
                        <Link href = "/Accessory/Bag">
                        <MenuItem onClick={handleClose}> <LocalMallIcon style={{marginRight: 25}}/> Bag</MenuItem>
                        </Link>
                        <Link href = "/Accessory/HDD_SSD">
                        <MenuItem onClick={handleClose}> <StorageIcon style={{marginRight: 25}}/> HDD_SSD</MenuItem>
                        </Link>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}