import React from "react";

const OurOffice = () => {

    return (
        <section className={"office-container"}>
            <div className={"office-location"}>
                <h2>Our office</h2>
                <h5>Langara College</h5>
                <ul>
                    <li>100 West 49th Avenue</li>
                    <li>Vancouver B.C.</li>
                    <li>Canada V5Y 2Z6</li>
                    <li>langaranerds@gmail.com</li>
                    <li>236.979.0143</li>
                </ul>
            </div>
            <div className={"office-location map"}>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.7235726688996!2d-123.11073828403612!3d49.22476927932516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486746f412563f7%3A0x36606d221509fdfe!2sLangara%20College!5e0!3m2!1sen!2sca!4v1658211360532!5m2!1sen!2sca"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={"ourOffice"}
                ></iframe>
            </div>
        </section>
    );
}

export default OurOffice;