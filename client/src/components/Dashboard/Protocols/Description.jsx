import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Description = () => {
    const { data, handleDataChange } = useOutletContext();



    return (
        <section>
            {/*
            changes:
            main div to section
            remove br
            */}
            <div className={"section-header-desc"}>
                <div className={"description-title"}>
                    <h2>Description</h2>
                </div>
                <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            </div>

            <div className={"description-fields"}>
                <label>Protocol Name<span className={"mandatory-desc"}>*</span></label>
                <TextField type={'text'} value={data.protocol}
                    onChange={(e) => handleDataChange(e.target.value, 'name')}
                    placeholder={'Enter protocol name'} />
            </div>

            <div className={"description-fields"}>
                <label>Abstract<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.abstract}
                    onChange={(e) => handleDataChange(e.target.value, 'abstract')}
                    placeholder={'Write here'} />
            </div>

            <div className={"description-fields"}>
                <label>Author<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.author}
                    onChange={(e) => handleDataChange(e.target.value, 'author')}
                    placeholder={'Enter names separated by commas'} />
            </div>

            <div className={"description-fields"}>
                <label>Disclaimer</label>
                <TextField type={'text'} value={data.disclaimer}
                    onChange={(e) => handleDataChange(e.target.value, 'disclaimer')} placeholder={'Write here'} />
            </div>

            <div style={{ float: 'right' }} className={"link-guideline"}><Link to={"/protocols/guidelines"}>Guidelines</Link><ArrowForwardIosIcon /></div>

        </section>
    );
}

export default Description;