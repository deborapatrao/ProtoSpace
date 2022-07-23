import React from 'react';
import HeaderNav from "../Header/index";
import Footer from "../Footer/Index";
import BodyDemo from "../Demo/Body";
import './demo.scss'

const Demo = () => {

    return ( <>
            <div className="demo">
                    <HeaderNav />
                    <section className={"body-container"}>
                    <BodyDemo />
                </section>
                <section className={"footer-container"}>
                    <Footer />
                </section>
            </div>
        </>
    );
}

export default Demo;
