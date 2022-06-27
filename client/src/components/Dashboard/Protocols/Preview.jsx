import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import {Link, useOutletContext} from "react-router-dom";

const Preview = () => {
    const { data, handleDataChange } = useOutletContext();

    return (
        <div>
            <div className={'sectionTitle'}>
                <h2>Description</h2>
            </div>
            <label>Protocol Name</label>
            <br/>
            <p type={'text'}>{data.protocol}</p>
            <br/>
            <label>Abstract</label>
            <br/>
            <p type={'text'}>{data.abstract}</p>
            <br/>
            <label>Author</label>
            <br/>
            <p type={'text'}>{data.author}</p>
            <br/>
            <label>Disclaimer</label>
            <br/>
            <p type={'text'}>{data.disclaimer}</p>
            <br/>
            <div className={'sectionTitle'}>
                <h2>Guidelines</h2>
            </div>
            <label>Guidelines</label>
            <br/>
            <p type={'text'} >{data.guideline}</p>
            <br/>
            <label>Before start</label>
            <br/>
            <p type={'text'} >{data.before_start}</p>
            <br/>
            <label>Safety warnings</label>
            <br/>
            <p type={'text'} >{data.safety_warning}</p>
            <br/>
            <label>
                Confidentially policy
            </label>
            <br/>
            <span>Sensitive content warning</span>
            <br/>
            <span>Confidential</span>
            <br/>
            <div>
                <h2>Material</h2>
            </div>
            <label>List of materials</label>
            <br/>
            <p type={'text'}>{data.materials}</p>
            <br/>

            <Link to={-1}>Back</Link>

        </div>
    );
}

export default Preview;