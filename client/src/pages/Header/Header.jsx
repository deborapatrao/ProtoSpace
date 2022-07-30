import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PopUp from "../../components/PopUp/PopUp";
import LogoMobile from "./logo-mobile.png";
import LogoDesktop from "./logo-desktop.png";
import { ReactComponent as Avatar } from '../../assets/avatar-icon.svg';
import { ReactComponent as Menu } from '../../assets/menu-icon.svg';

import { AppBar, Toolbar, Container, IconButton, Drawer, List, ListItem, Box } from "@mui/material";
// import { Box } from "@mui/system";
import "./header.scss";

const HeaderNav = () => {
    const [open, setOpen] = useState(false)


    return (<>
        <AppBar position="sticky" className='mui-appbar'>
            <Container>
                <Toolbar className='mui-toolbar'>
                    <Link to={"/"}>
                        <div className="site-identity">
                            <img src={LogoMobile} alt="logo" className="logo-mobile" />
                            <img src={LogoDesktop} alt="logo" className="logo-desktop" />
                        </div>
                    </Link>

                    <div className="navigation-container">
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}
                            className="navigation-links">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/about"}>About</Link>
                            <Link to={"/contact"}>Contact</Link>
                        </Box>

                        <Box>
                            <button className={"demo-header"}><Link to={"/demo"}>Book a Demo</Link></button>
                        </Box>
                        <Box>
                            <div className={"login"}>
                                <Avatar />
                                <PopUp />
                            </div>
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton onClick={() => setOpen(true)}>
                                <Menu />
                            </IconButton>
                        </Box>
                    </div>

                </Toolbar>
            </Container>

        </AppBar>
        <Drawer anchor='right' open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            className="menu-drawer">
            <List>
                <ListItem><Link to={"/"}>Home</Link></ListItem>
                <ListItem><Link to={"/about"}>About</Link></ListItem>
                <ListItem><Link to={"/contact"}>Contact</Link></ListItem>
            </List>
        </Drawer>

        {/* </div> */}


        {/* // </section> */}

    </>
    );
}

export default HeaderNav;