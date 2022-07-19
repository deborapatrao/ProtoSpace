import React from 'react';
import demoImg from './DemoImg.png'


const BodyDemo = () => {

    return (
        <section className={"main-feature-container"}>
            <div className={"main-feature-details"}>
                <div className={"image-container"}>
                    <img src={demoImg} alt={"demo"} className={"main-feature-image"}/>
                </div>
                <div>
                    <form>
                        <h1>Tell us your story</h1>
                        <p>Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all of your questions.</p>
                        <label>
                            Your business email <span className={"mandatory"}>*</span>
                            <input type={"email"} name={"business-email"} />
                        </label>
                        <label>
                            First name<span className={"mandatory"}>*</span>
                            <input type={"text"} name={"first-name"} />
                        </label>
                        <label>
                            Last name<span className={"mandatory"}>*</span>
                            <input type={"text"} name={"first-name"} />
                        </label>
                        <label>
                            Phone number<span className={"mandatory"}>*</span>
                            <div className={"phone-number-inputs"}>
                            <select>
                                <option value={"Canada"}>Canada</option>
                                <option value={"Philippines"}>philippines</option>
                                <option value={"Brazil"}>Brazil</option>
                                <option value={"Russia"}>Russia</option>
                                <option value={"Mexico"}>Mexico</option>
                            </select>
                            <input type={"number"} name={"first-name"} />
                            </div>
                        </label>
                        <label>
                            Organization
                            <input type={"text"} name={"organization-name"} />
                        </label>
                        <label>
                           Job title
                            <input type={"text"} name={"job-title"} />
                        </label>
                        <div className={"company-info"}>
                            <label>
                                Company site
                                <input type={"text"} name={"company-site"} />
                            </label>
                            <label>
                                Industry<span className={"mandatory"}>*</span>
                                <input type={"text"} name={"job-title"} />
                            </label>
                        </div>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BodyDemo;