import React from 'react'
import List from "./List";
import SocialMedia from "./Social";
import CopyRight from "./Copyright";
import "./footer.scss";
import icon from "./icon.jpg";

const Footer = props => {
    return <>
        <div className='Footer'>
            <img src={icon} alt="logo" className="logo"/>
            <div className="links-footer">
            <List />
            <SocialMedia />
            </div>

            <CopyRight />
        </div>

    </>
}

export default Footer;