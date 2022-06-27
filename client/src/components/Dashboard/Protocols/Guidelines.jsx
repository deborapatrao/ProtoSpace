import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';

const Guidelines = () => {
    const { data, handleDataChange } = useOutletContext();
    
    return (
        <div>
            <div>
                <h2>Guidelines</h2>
            </div>
            <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            <label>Guidelines<span className={"mandatory"}>*</span></label>
            <br/>
            <TextField type={'text'} value={data.guideline} onChange={(e) => handleDataChange(e.target.value, 'guideline')} placeholder={'Write here'}/>
            <br/>
            <label>Before start<span className={"mandatory"}>*</span></label>
            <br/>
            <TextField type={'text'} value={data.before_start} onChange={(e) => handleDataChange(e.target.value, 'before_start')} placeholder={'Write here'}/>
            <br/>
            <label>Safety warnings<span className={"mandatory"}>*</span></label>
            <br/>
            <TextField type={'text'} value={data.safety_warning} onChange={(e) => handleDataChange(e.target.value, 'safety_warning')} placeholder={'Write here'}/>
            <br/>
            <label>
            <input type={"checkbox"}/> Sensitive content warning
            </label>
            <br/>
            <label>
                <input type={"checkbox"}/> Confidential
            </label>
            <div>
                <Link to={"/protocols/description"}>Description</Link>
                <Link to={"/protocols/materials"}>Materials</Link>
            </div>
        </div>
    );
}

export default Guidelines;