import React from 'react';
import Popup from 'reactjs-popup';
import "./popUp.scss"
import { Outlet } from 'react-router-dom';

const PopUp = () => {



    return (
        <Popup trigger={<button className={"login-btn"}>Login</button>} position="right center">
            <div className={"pop-up-container"} >
                <div className={"image-container"}></div>
                <div className={"info-Container"}>
                   <Outlet />
                </div>
            </div>
        </Popup>
    );
}

export default PopUp;