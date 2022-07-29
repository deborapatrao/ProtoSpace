import React from "react";
import HeaderNav from "./Header";
import "./header.scss";



const Header = () => {
    return (
        <header className="static-header">
            <div className="header-container">
                <HeaderNav />
            </div>
        </header>
    );

}

export default Header