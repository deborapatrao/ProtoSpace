import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';

const Guidelines = () => {
    const { data, handleDataChange } = useOutletContext();
    
    return (
        <section>
            <div>
                <h2>Guidelines</h2>
                <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            </div>

            <div>
                <label>Guidelines<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.guideline}
                           onChange={(e) => handleDataChange(e.target.value, 'guideline')} placeholder={'Write here'}/>
            </div>

            <div>
                <label>Before start<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.before_start}
                           onChange={(e) => handleDataChange(e.target.value, 'before_start')}
                           placeholder={'Write here'}/>
            </div>

            <div>
                <label>Safety warnings<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.safety_warning}
                           onChange={(e) => handleDataChange(e.target.value, 'safety_warning')}
                           placeholder={'Write here'}/>
            </div>

            <label>
            <input type={"checkbox"}/> Sensitive content warning
            </label>

            <label>
                <input type={"checkbox"}/> Confidential
            </label>
            <div>
                <Link to={"/protocols/description"}>Description</Link>
                <Link to={"/protocols/materials"}>Materials</Link>
            </div>
        </section>
    );
}

export default Guidelines;