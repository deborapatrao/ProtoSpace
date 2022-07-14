import "./home.scss";
import React from 'react';
import {Outlet} from "react-router-dom";
import Popup from "reactjs-popup";
import signUpImg from "./signup.png"


const SignUpBody = () => {

    return (
        <section className={"sign-up-container"}>

                <div className="main-feature-details sign-up">
                    <div className="container">
                        <img src={signUpImg} alt="sign up illustration" className="main-feature-image"/>
                        <div className="main-feature-content">
                            <h2>Accelerate laboratory classes today!</h2>
                            <p>Create runnable protocols on web and mobile devices. Sign up for our trial version and create up to two protocols.</p>
                            <Popup trigger={<button className={"sign-un-btn"}>Sign Up now!</button>} position="right center">
                                <div className={"pop-up-container"} >
                                    <div className={"image-container"}></div>
                                    <div className={"info-Container"}>
                                        <Outlet />
                                    </div>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
                
        </section>
    );
}

export default SignUpBody;