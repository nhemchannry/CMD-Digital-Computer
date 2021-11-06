

  import React from 'react';
  import Button from '@material-ui/core/Button';
  import Menu from '@material-ui/core/Menu';
  import MenuItem from '@material-ui/core/MenuItem';
  import link from 'next/link';
  
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
          <Link href = "./Accessory/Mouse.js">
          <MenuItem onClick={handleClose}>Mouse</MenuItem>
          </Link>
          <MenuItem onClick={handleClose}>Keyboard</MenuItem>
          <MenuItem onClick={handleClose}>Flash</MenuItem>
          <MenuItem onClick={handleClose}>Bag</MenuItem>
          <MenuItem onClick={handleClose}>HDD_SSD</MenuItem>
        </Menu>
      </div>
    );
  }
