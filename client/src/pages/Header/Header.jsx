import "./header.scss";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import PopUp from "../../components/PopUp/PopUp";
import icon from "./Logo.png";


const HeaderNav = () => {



    return (<>
        {/* // <section className={"header-container"}> */}
        <div className="site-identity">
            <img src={icon} alt="logo" className="logo"/>
            <h1 className="site-title">ProtoSpace</h1>
        </div>
        <nav>
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
                <li>
                    <button className={"demo-header"}><Link to={"/demo"}>Book a Demo</Link></button>
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