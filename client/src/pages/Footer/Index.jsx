import React from 'react'
import List from "./List";
import SocialMedia from "./Social";
import CopyRight from "./Copyright";
import "./footer.scss";
import icon from "./icon.jpg";

const Footer = props => {
    return <>
        <div className='Footer'>
            <div className="links-footer">
                <img src={icon} alt="logo" className="logo"/>
                <CopyRight />
                <List />
            </div>
            <div className="request-demo">

            </div>
        </div>

    </>
}

export default Footer;