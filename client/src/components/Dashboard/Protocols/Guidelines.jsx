import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField, TextareaAutosize } from '@mui/material';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Guidelines = () => {
    const { data, handleDataChange } = useOutletContext();
    
    return (
        <section >
            <div className={"section-header"}>
                <div className={"section-title"}>
                <h2>Guidelines</h2>
                </div>
                <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            </div>

            <div className="section-body">
                <div className={"section-field"}>
                    <label>Guidelines<span className={"mandatory"}>*</span></label>
                    <TextareaAutosize minRows={10} aria-label="guidelines" value={data.guideline}
                               onChange={(e) => handleDataChange(e.target.value, 'guideline')} placeholder={'Write here'}/>
                </div>
                <div className={"section-field"}>
                    <label>Before start<span className={"mandatory"}>*</span></label>
                    <TextareaAutosize minRows={10} aria-label="before start" value={data.before_start}
                               onChange={(e) => handleDataChange(e.target.value, 'before_start')}
                               placeholder={'Write here'}/>
                </div>
                <div className={"section-field"}>
                    <label>Safety warnings<span className={"mandatory"}>*</span></label>
                    <TextareaAutosize minRows={10} aria-label="safety warning" value={data.safety_warning}
                               onChange={(e) => handleDataChange(e.target.value, 'safety_warning')}
                               placeholder={'Write here'}/>
                </div>
                <div className={"section-field"}>
                <label>
                <input type={"checkbox"}/> Sensitive content warning
                </label>
                <label>
                    <input type={"checkbox"}/> Confidential
                </label>
                </div>
            </div>


            <div className={"navigation-links"}>
                <div className={"link-previous"}><ArrowBackIosNewIcon /><Link to={"/protocols/description"}>Description</Link></div>
                <div className={"link-next"}><Link to={"/protocols/materials"}>Materials</Link><ArrowForwardIosIcon /></div>
            </div>

        </section>
    );
}

export default Guidelines;