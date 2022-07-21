import React from 'react';
import Popup from 'reactjs-popup';
import Login from './logins.png';
import "./popUp.scss"
import { Outlet } from 'react-router-dom';

const PopUp = () => {


    return (
        <Popup trigger={<button className={"login-btn"}>Login</button>} position="right center">
            <div className={"pop-up-container"} >
                <div className={"image-container"}>
                    <img src={Login} alt={"Login-image"}/>
                </div>
                <div className={"info-container"}>
                    <span className={"close-icon"}>X</span>
                    <Outlet />
                </div>
            </div>
        </Popup>
    );
}

export default PopUp;