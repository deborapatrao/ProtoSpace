import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

const Menu = props => {
    return <>
    <div className="list-container">
    <Box
      sx={{ width: 250}}
      role="presentation"
      onClick={props.toggleDrawer('right', false)}
      onKeyDown={props.toggleDrawer('right', false)}
    >
      <List>
        <ListItem>
            <ListItemButton>
                <ListItemText primary='HOME'/>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText primary='ABOUT'/>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText primary='CONTACT'/>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText primary='SECURITY'/>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText primary='HELP'/>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText primary='FAQ'/>
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </div>
    </>
}

export default Menu;