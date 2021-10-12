import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 200,
  bgcolor: 'background.paper',
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="DEll" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="APP" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="MOUSE" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="POWER SUPPLY" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="CPU" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="RAM" />
      </ListItem>
    </List>
  );
}