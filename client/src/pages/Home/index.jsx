import React from 'react';
import HeaderNav from "../Header/index";
import Demo from "./Demo";
import Footer from "../Footer/Index";
import SignUpBody from "./SignUp";
import Body from "./Body";

const Home = () => {

    return ( <>
        <div className="home">
            <div>
                <HeaderNav />
            </div>
            <section className={"body-container"}>
                <Demo />
                <Body />
                <SignUpBody />
            </section>
            <section className={"footer-container"}>
                <Footer />
            </section>
        </div>
        </>
    );
}

export default Home;
