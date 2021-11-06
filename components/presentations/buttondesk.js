import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/link';

export default function Desktop() {
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
        Desktop
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href = "/Desktop/MSI_Desktop">
        <MenuItem onClick={handleClose}> <DesktopMacIcon style={{marginRight: 25}}  /> MSI</MenuItem>
        </Link>
        <Link href = "/Desktop/ASUS_Desktop">
        <MenuItem onClick={handleClose}> <DesktopMacIcon style={{marginRight: 25}}  /> ASUS</MenuItem>
        </Link>
        <Link href = "/Desktop/Dell_Desktop">
        <MenuItem onClick={handleClose}> <DesktopMacIcon style={{marginRight: 25}}  /> Dell</MenuItem>
        </Link>
        <Link href = "/Desktop/Lenovo_Desktop">
        <MenuItem onClick={handleClose}> <DesktopMacIcon style={{marginRight: 25}}  /> Lenovo</MenuItem>
        </Link>
        <Link href = "/Desktop/iMac">
        <MenuItem onClick={handleClose}> <DesktopMacIcon style={{marginRight: 25}}  /> Mac</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
