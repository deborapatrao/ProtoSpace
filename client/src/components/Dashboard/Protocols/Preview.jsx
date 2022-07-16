import React from 'react';

const Preview = ({ protocolInfo }) => {
    return (
        <>
            <div className={'sectionTitle'}>
                <h2>Description</h2>
            </div>
            <div className={'description'}>
                <label>Protocol Name</label>
                <p type={'text'}>{protocolInfo.name}</p>
                <label>Abstract</label>
                <p type={'text'}>{protocolInfo.abstract}</p>
                <label>Author</label>
                <p type={'text'}>{protocolInfo.author}</p>
                <label>Disclaimer</label>
                <p type={'text'}>{protocolInfo.disclaimer}</p>
            </div>

            <div className={'sectionTitle'}>
                <h2>Guidelines</h2>
            </div>
            <div className={'guidelines'}>
                <label>Guidelines</label>
                <p type={'text'}>{protocolInfo.guideline}</p>
                <label>Before start</label>
                <p type={'text'}>{protocolInfo.before_start}</p>
                <label>Safety warnings</label>
                <p type={'text'}>{protocolInfo.safety_warning}</p>
                <label>
                    Confidentially policy
                </label>
                <span>Sensitive content warning</span>
                <span>Confidential</span>
            </div>

            <div className={'sectionTitle'}>
                <h2>Material</h2>
            </div>
            <div className={'materials'}>
                <label>List of materials</label>
                <p type={'text'}>{protocolInfo.materials}</p>
            </div>
        </>
    );
}

export default Preview;
