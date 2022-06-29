import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import {Link, useOutletContext} from "react-router-dom";

const Preview = () => {
    const { data, handleDataChange } = useOutletContext();

    return (
        <section>
                
            <div className={'sectionTitle'}>
                <h2>Description</h2>
            </div>
            <div className={'description'}>
                        <label>Protocol Name</label>
                        <p type={'text'}>{data.protocol}</p>
                        <label>Abstract</label>
                        <p type={'text'}>{data.abstract}</p>
                        <label>Author</label>
                        <p type={'text'}>{data.author}</p>
                        <label>Disclaimer</label>
                        <p type={'text'}>{data.disclaimer}</p>
            </div>
          
            <div className={'sectionTitle'}>
                <h2>Guidelines</h2>
            </div>
            <div className={'guidelines'}>
                        <label>Guidelines</label>
                        <p type={'text'}>{data.guideline}</p>
                        <label>Before start</label>
                        <p type={'text'}>{data.before_start}</p>
                        <label>Safety warnings</label>
                        <p type={'text'}>{data.safety_warning}</p>
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
                        <p type={'text'}>{data.materials}</p>
            </div>


            <Link to={-1}>Back</Link>

        </section>
    );
}

export default Preview;