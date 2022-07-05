import "./header.scss";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import {Link} from "@mui/material";
import PopUp from "../../components/PopUp/PopUp";
import icon from "./Logo.png";


const HeaderNav = () => {



    return (<>
        {/* // <section className={"header-container"}> */}
        <div>
            <img src={icon} alt="logo" className="logo"/>
        </div>
        <nav>
            <ul>
                <li>
                    Home
                </li>
                <li>
                     About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    <button className={"demo-header"}>Book a Demo</button>
                </li>
                <li className={"login"}>
                    <Avatar src="/broken-image.jpg" />
                    <PopUp />
                </li>
            </ul>
        </nav>

        {/* // </section> */}

        </>
    );
}

export default HeaderNav;