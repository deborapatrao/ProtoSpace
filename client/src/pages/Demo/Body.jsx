import React from 'react';
import demoImg from './DemoImg.png'


const BodyDemo = () => {

    return (
        <section className={"main-feature-container"}>
            <div className={"main-feature-details"}>
                <div className={"image-container"}>
                    <img src={demoImg} alt={"demo"} className={"main-feature-image"}/>
                </div>
                <div className='form-container'>
                    <h2>Tell us your story</h2>
                    <p>Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all of your questions.</p>
                    <form>
                        <label>
                            Your business email <span className={"mandatory"}>*</span>
                            <input type={"email"} name={"business-email"} placeholder="Please provide your business email" />
                        </label>
                        <div className="name-inputs">
                            <label>
                                First name<span className={"mandatory"}>*</span>
                                <input type={"text"} name={"first-name"} placeholder="First name"/>
                            </label>
                            <label>
                                Last name<span className={"mandatory"}>*</span>
                                <input type={"text"} name={"first-name"} placeholder="Last name"/>
                            </label>
                        </div>
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
                            <input type={"tel"} name={"first-name"} placeholder="123456789"/>
                            </div>
                        </label>
                        <label>
                            Organization
                            <input type={"text"} name={"organization-name"} placeholder="Business name"/>
                        </label>
                        <label>
                           Job title
                            <input type={"text"} name={"job-title"} placeholder="Your job title"/>
                        </label>
                        <div className={"company-info"}>
                            <label>
                                Company size
                                <input type={"text"} name={"company-size"} />
                            </label>
                            <label>
                                Industry<span className={"mandatory"}>*</span>
                                <input type={"text"} name={"job-title"} />
                            </label>
                        </div> 

                        <input type="submit" value="Ask for a demo"  className='submit-btn'/>
                    </form>
                </div> 
            </div>
        </section>
    );
}

export default BodyDemo;