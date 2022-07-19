import React from 'react';
import { Link } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const ContactForm = () => {

    return (
        <section className={"main-feature-container"}>

            <div className={"main-feature-details"}>
               <div>
                    <h2>Get in touch with us</h2>
                    <p>Please select a topic below related to your inquiry. If you don’t find what you need, fill out our contact form.</p>
                </div>
                <div>
                    <div className={"contact-us buttons-container"}>
                        <button>
                            <Link to={'/demo'}>Book a demo</Link>
                            Request a demo from one of our specialists.
                            <ArrowForwardIosIcon />
                        </button>
                        <button>
                            <Link to='#'>Product and account support </Link>
                            Let our customer support team give you a hand.
                            <ArrowForwardIosIcon />
                        </button>
                        <button>
                            <Link to='#'>Get a quote </Link>
                            We’ll help you find the right plans and pricing for you.
                            <ArrowForwardIosIcon />
                        </button>
                        <button>
                            <Link to='#'>Partnership with us</Link>
                            We’d love to talk about how we can work together.
                            <ArrowForwardIosIcon />
                        </button>
                    </div>
                    <div>
                        <form>
                        <label>
                            Name<span className={"mandatory"}>*</span>
                            <input type={"text"} name={"first-name"} />
                        </label>
                        <label>
                            Email<span className={"mandatory"}>*</span>
                            <input type={"email"} name={"email"} />
                        </label>
                        <label>
                                Type of Inquiry<span className={"mandatory"}>*</span>
                                <input type={"text"} name={"type-inquiry"} />
                        </label>
                        <label>
                            Phone number<span className={"mandatory"}>*</span>
                            <div className={"phone-number-inputs"}>
                                <select>
                                    <option value={"Canada"}>Canada</option>
                                    <option value={"Philippines"}>Philippines</option>
                                    <option value={"Brazil"}>Brazil</option>
                                    <option value={"Russia"}>Russia</option>
                                    <option value={"Mexico"}>Mexico</option>
                                </select>
                                <input type={"number"} name={"phone-number"} />
                            </div>
                        </label>
                        <label>
                            Message
                            <input type={"text"} name={"message"} />
                        </label>
                       <input type="submit" value="Send" />
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;