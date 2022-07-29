import React from 'react'
import { useState } from 'react';
import Logo from './Logo.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from './menu.png';
import { Link } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Notification} from '../../../assets/notification-icon.svg';
import { ReactComponent as Avatar} from '../../../assets/avatar-icon.svg';
import { ReactComponent as Menu} from '../../../assets/menu-icon.svg';



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
        <Notification />
        <Link to={'/profile'} className={'profile-icon'}><Avatar /></Link>
        <Button startIcon={<Menu />} onClick={toggleDrawer('right', true)} />
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