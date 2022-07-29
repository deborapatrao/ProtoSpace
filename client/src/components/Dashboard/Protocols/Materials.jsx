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
                <div className={"section-title"}>
                    <h2>Materials</h2>
                </div>
                <div className={"mandatory-desc"}><span className={"mandatory"}>*</span> This section need to be filled</div>
            </div>

            <div className="section-body">
                <div className={"section-field"}>
                    <label>List of materials<span className={"mandatory"}>*</span></label>
                    <TextField multiline minRows={10} aria-label="list of materials" type={'text'} value={data.materials} onChange={(e) => handleDataChange(e.target.value, 'materials')} placeholder={'Materials'} />
                </div>
            </div>

            <div className={"navigation-links"}>
                <div className={"link-previous"}><ArrowBackIosNewIcon /><Link to={"/protocols/guidelines"}>Guidelines</Link></div>
                <div className={"link-next"}><Link to={"/protocols/steps"}>Steps</Link><ArrowForwardIosIcon /></div>
            </div>
        </section>
    );
}

export default Materials;