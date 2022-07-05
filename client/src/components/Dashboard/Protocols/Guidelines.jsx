import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Guidelines = () => {
    const { data, handleDataChange } = useOutletContext();
    
    return (
        <section >
            <div className={"section-header-guidelines"}>
                <div className={"guidelines-title"}>
                <h2>Guidelines</h2>
                </div>
                <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            </div>

            <div className={"guidelines-fields"}>
                <label>Guidelines<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.guideline}
                           onChange={(e) => handleDataChange(e.target.value, 'guideline')} placeholder={'Write here'}/>
            </div>

            <div className={"guidelines-fields"}>
                <label>Before start<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.before_start}
                           onChange={(e) => handleDataChange(e.target.value, 'before_start')}
                           placeholder={'Write here'}/>
            </div>

            <div className={"guidelines-fields"}>
                <label>Safety warnings<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.safety_warning}
                           onChange={(e) => handleDataChange(e.target.value, 'safety_warning')}
                           placeholder={'Write here'}/>
            </div>

            <div className={"guidelines-fields"}>
            <label>
            <input type={"checkbox"}/> Sensitive content warning
            </label>

            <label>
                <input type={"checkbox"}/> Confidential
            </label>
            </div>


            <div className={"navigation-links-guidelines"}>
                <div className={"link-description"}><ArrowBackIosNewIcon /><Link to={"/protocols/description"}>Description</Link></div>
                <div className={"link-materials"}><Link to={"/protocols/materials"}>Materials</Link><ArrowForwardIosIcon /></div>
            </div>

        </section>
    );
}

export default Guidelines;