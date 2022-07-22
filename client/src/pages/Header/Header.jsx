import "./header.scss";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import PopUp from "../../components/PopUp/PopUp";
import LogoMobile from "./logo-mobile.png";
import LogoDesktop from "./logo-desktop.png";

import { AppBar, Toolbar, Container, Hidden } from "@mui/material";
import { Box } from "@mui/system";

const HeaderNav = () => {



    return (<>
        {/* // <section className={"header-container"}> */}
        
        {/* <div className="navigation-container"> */}
            {/* <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav> */}

            <AppBar position="sticky">
            <Container>
                <Toolbar>
                    <Box>
                    <div className="site-identity">
                    <img src={LogoMobile} alt="logo" className="logo-mobile"/>
                    <img src={LogoDesktop} alt="logo" className="logo-desktop"/>
                    </div>
                    </Box>

                    <Hidden xsDown>
                    <Box>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                    </Box>
                    </Hidden>

                    <Box>
                    <button className={"demo-header"}><Link to={"/demo"}>Book a Demo</Link></button>
                    </Box>

                    <Box>
                    <div className={"login"}>
                    <Avatar src="/broken-image.jpg" />
                    <PopUp />
                    </div>
                    </Box>

                </Toolbar>
                </Container>
            </AppBar>

        {/* </div> */}


        {/* // </section> */}

        </>
    );
}

export default HeaderNav;