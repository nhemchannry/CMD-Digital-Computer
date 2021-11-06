
  import LaptopMacIcon from '@material-ui/icons/LaptopMac';
  import React from 'react';
  import Button from '@material-ui/core/Button';
  import Menu from '@material-ui/core/Menu';
  import MenuItem from '@material-ui/core/MenuItem';
  import Link from 'next/link';
  
  export default function Loptop() {
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
          Laptop
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        <Link href = "/Laptop/MSI">
        <MenuItem onClick={handleClose}><LaptopMacIcon style={{marginRight: 25}} />MSI</MenuItem>
        </Link>
        <Link href = "/Laptop/ASUS">
        <MenuItem onClick={handleClose}><LaptopMacIcon style={{marginRight: 25}} />ASUS</MenuItem>
        </Link>
        <Link href = "/Laptop/Dell">
        <MenuItem onClick={handleClose}><LaptopMacIcon style={{marginRight: 25}} />Dell</MenuItem>
        </Link>
        <Link href = "/Laptop/Lenovo">
        <MenuItem onClick={handleClose}><LaptopMacIcon style={{marginRight: 25}} />Lenovo</MenuItem>
        </Link>
        <Link href = "/Laptop/MacBook">
        <MenuItem onClick={handleClose}><LaptopMacIcon style={{marginRight: 25}} />Mac</MenuItem>
        </Link>
        </Menu>
      </div>
    );
  }
  