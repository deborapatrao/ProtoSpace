import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Materials = () => {
    const { data, handleDataChange } = useOutletContext();
    return (
        <section>
            <div className={"section-header"}>
                <div className={"materials-title"}>
                <h2>Material</h2>
                </div>
                <div className={"mandatory-desc"}><span className={"mandatory"}>*</span> This section need to be filled</div>
            </div>
            <div className={"materials-fields"}>
                <label>List of materials<span className={"mandatory"}>*</span></label>
                <TextField className={"materials-input"} type={'text'} value={data.materials} onChange={(e) => handleDataChange(e.target.value, 'materials')} placeholder={'Materials'}/>
            </div>

            <div className={"navigation-links"}>
                <div className={"link-guideline"}><ArrowBackIosNewIcon /><Link to={"/protocols/guidelines"}>Guidelines</Link></div>
                <div className={"link-step"}><Link to={"/protocols/steps"}>Steps</Link><ArrowForwardIosIcon /></div>
            </div>
        </section>
    );
}

export default Materials;