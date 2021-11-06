

  import React from 'react';
  import Button from '@material-ui/core/Button';
  import Menu from '@material-ui/core/Menu';
  import MenuItem from '@material-ui/core/MenuItem';
  
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
          <MenuItem onClick={handleClose}>MSI</MenuItem>
          <MenuItem onClick={handleClose}>ASUS</MenuItem>
          <MenuItem onClick={handleClose}>Dell</MenuItem>
          <MenuItem onClick={handleClose}>Lenovo</MenuItem>
          <MenuItem onClick={handleClose}>iMac</MenuItem>
        </Menu>
      </div>
    );
  }
  