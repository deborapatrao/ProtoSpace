import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const ContactForm = () => {

    return (
        <section className={"contact-us-container"}>

            <div className={"main-feature-details contact-us-form"}>
               <div className={"contact-us-header"}>
                    <h2>Get in touch with us</h2>
                    <p>Please select a topic below related to your inquiry. If you don’t find what you need, fill out our contact form.</p>
                </div>
                <div className={"contact-us-form-input"}>
                    <div className={"contact-us buttons-container"}>
                        <button>
                            <Link to={'/demo'}>Book a demo</Link>
                            <span>Request a demo from one of our specialists.</span>
                            <ArrowForwardIosIcon />
                        </button>
                        <button>
                            <Link to='#'>Product and account support </Link>
                            <span>Let our customer support team give you a hand.</span>
                            <ArrowForwardIosIcon />
                        </button>
                        <button>
                            <Link to='#'>Get a quote </Link>
                            <span>We’ll help you find the right plans and pricing for you.</span>
                            <ArrowForwardIosIcon />
                        </button>
                        <button>
                            <Link to='#'>Partnership with us</Link>
                            <span>We’d love to talk about how we can work together.</span>
                            <ArrowForwardIosIcon />
                        </button>
                    </div>
                    <div className={"contact-us form-container"}>
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

                                    <input type={"tel"} name={"phone-number"} className={"phone-number-input"} placeholder={"123456789"}/>
                                </div>
                            </label>

                            <label>
                                Message
                            </label>
                                <textarea type={"text"} name={"message"} className={"message-input"}placeholder={"Write here"}/>

                           <input type="submit" value="Send" className={"submit-btn"}/>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;