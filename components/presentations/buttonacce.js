

  import React from 'react';
  import Button from '@material-ui/core/Button';
  import Menu from '@material-ui/core/Menu';
  import MenuItem from '@material-ui/core/MenuItem';
  import Link from 'next/link';
  import MouseIcon from '@material-ui/icons/Mouse';
  import KeyboardIcon from '@material-ui/icons/Keyboard';
  import UsbIcon from '@material-ui/icons/Usb';
  import LocalMallIcon from '@material-ui/icons/LocalMall';
  import StorageIcon from '@material-ui/icons/Storage';
  
  export default function ACCESERY() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Accessory
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
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

        </Menu>
      </div>
    );
  }
