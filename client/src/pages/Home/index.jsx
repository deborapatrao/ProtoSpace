import React from 'react';
import HeaderNav from "../Header/Header";
import Demo from "./Demo";
import Footer from "../Footer/Index";
import SignUpBody from "./SignUp";
import Body from "./Body";

const Home = () => {

    return ( <>
        <section className={"header-container"}>
            <HeaderNav />
        </section>
        <section className={"body-container"}>
            <Demo />
            <Body />
            <SignUpBody />
        </section>
        <section className={"footer-container"}>
            <Footer />
        </section>
        </>
    );
}

export default Home;
