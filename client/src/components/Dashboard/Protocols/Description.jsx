import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';

const Description = () => {
    const { data, handleDataChange } = useOutletContext();
    
    return (
        <div>
            <div>
                <h2>Description</h2>
            </div>
            <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            <label>Protocol Name<span className={"mandatory"}>*</span></label>
            <br/>
            <TextField type={'text'} value={data.protocol} onChange={(e) => handleDataChange(e.target.value, 'protocol')} placeholder={'Enter protocol name'}/>
            <br/>
            <label>Abstract<span className={"mandatory"}>*</span></label>
            <br/>
            <TextField type={'text'} value={data.abstract} onChange={(e) => handleDataChange(e.target.value, 'abstract')} placeholder={'Write here'}/>
            <br/>
            <label>Author<span className={"mandatory"}>*</span></label>
            <br/>
            <TextField type={'text'} value={data.author} onChange={(e) => handleDataChange(e.target.value, 'author')} placeholder={'Enter names separated by commas'}/>
            <br/>
            <label>Disclaimer</label>
            <br/>
            <TextField type={'text'} value={data.disclaimer} onChange={(e) => handleDataChange(e.target.value, 'disclaimer')} placeholder={'Write here'}/>
            <br/>
            <Link to={"/protocols/guidelines"}>Guidelines</Link>

        </div>
    );
}

export default Description;