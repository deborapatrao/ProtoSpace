import React from 'react'
import List from "./List";
import SocialMedia from "./Social";
import CopyRight from "./Copyright";
import "./footer.scss";
import logo from "./logo.png";

const Footer = props => {
    return <>
        <footer>
            <div className="footer__main">
                <img src={logo} alt="logo" className="logo"/>
                <List />
            </div>
                <CopyRight />   
        </footer>

    </>
}

export default Footer;