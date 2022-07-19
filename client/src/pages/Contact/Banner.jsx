import React from "react";
import GroupImg from "./GroupDiscussion.png";


const Banner = () => {

    return (
        <section className={"banner-container"}>
            <div className={"banner-description"}>
                <h1>We’d love to hear from you</h1>
                <p>Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all of your questions.</p>
            </div>
            <div className={"banner-image"}>
                <img src={GroupImg} alt={"demo"} className={"main-feature-image"}/>
            </div>
        </section>
    );
}

export default Banner;
