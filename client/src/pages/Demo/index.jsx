import React from 'react';
import HeaderNav from "../Header/index";
import Footer from "../Footer/Index";
import BodyDemo from "../Demo/Body";

const Demo = () => {

    return ( <>
            <div className="demo">
                <header>
                    <HeaderNav />
                </header>
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
