import React from 'react';

const Preview = ({ protocolInfo }) => {
    return (
        <>
        <section className={"preview"}>
            <div className={'sectionTitle'}>
                <h4>Description</h4>
            </div>
            <div className={'description'}>
                <h6>Protocol Name</h6>
                <p type={'text'}>{protocolInfo.name}</p>
                <h6>Abstract</h6>
                <p type={'text'}>{protocolInfo.abstract}</p>
                <h6>Author</h6>
                <p type={'text'}>{protocolInfo.author}</p>
                <h6>Disclaimer</h6>
                <p type={'text'}>{protocolInfo.disclaimer}</p>
            </div>

            <div className={'sectionTitle'}>
                <h4>Guidelines</h4>
            </div>
            <div className={'guidelines'}>
                <h6>Guidelines</h6>
                <p type={'text'}>{protocolInfo.guideline}</p>
                <h6>Before start</h6>
                <p type={'text'}>{protocolInfo.before_start}</p>
                <h6>Safety warnings</h6>
                <p type={'text'}>{protocolInfo.safety_warning}</p>
                <h6>
                    Confidentially policy
                </h6>
                <div className={"confidentially-options"}>
                    <span>Sensitive content warning</span>
                    <span>Confidential</span>
                </div>
            </div>

            <div className={'sectionTitle'}>
                <h4>Material</h4>
            </div>
            <div className={'materials'}>
                <h6>List of materials</h6>
                <p type={'text'}>{protocolInfo.materials}</p>
            </div>
        </section>
        </>
    );
}

export default Preview;
