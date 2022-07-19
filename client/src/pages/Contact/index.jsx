import React from 'react';
import HeaderNav from "../Header/index";
import Footer from "../Footer/Index";
import ContactForm from "./ContactForm";
import Banner from "./Banner";
import OurOffice from "./OurOffice";

const Contact = () => {

    return ( <>
            <div className="contact-page">
                <HeaderNav />
                <section className={"body-container"}>
                    <Banner />
                    <ContactForm />
                    <OurOffice />
                </section>
                <section className={"footer-container"}>
                    <Footer />
                </section>
            </div>
        </>
    );
}

export default Contact;
