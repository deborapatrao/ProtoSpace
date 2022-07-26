import React from 'react'
import { useState } from 'react';
import Logo from './Logo.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from './menu.png';
import Menu from './Menu';
import { Link } from 'react-router-dom';

import './header.scss'

const Header = props => {

  const [state, setState] = useState(
    { right: false }
  )

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  return <>

    <header className='workspace-header'>
      <div className='site-identity'>
        <Link to={'/'}><img src={Logo} alt='logo' /></Link>
      </div>

      <div className='header-search'>

      </div>

      <div className='header-navigation'>
        <NotificationsIcon />
        <Link to={'/profile'}><Avatar /></Link>
        <Button startIcon={<img src={MenuIcon} />} onClick={toggleDrawer('right', true)} />
        <Drawer
          anchor='right'
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          <Menu toggleDrawer={toggleDrawer} />

        </Drawer>
      </div>
    </header>

  </>
}

export default Header;