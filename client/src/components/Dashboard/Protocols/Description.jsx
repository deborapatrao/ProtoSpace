import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField, TextareaAutosize } from '@mui/material';
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
            <div className={"section-header"}>
                <div className={"section-title"}>
                    <h2>Description</h2>
                </div>
                <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            </div>

            <div className="section-body">
                <div className='section-field'>
                    <label>Protocol Name<span className={"mandatory"}>*</span></label>
                    <TextField type={'text'} value={data.protocol}
                        onChange={(e) => handleDataChange(e.target.value, 'name')}
                        placeholder={'Enter protocol name'} aria-label="protocol name" sx={{ borderColor: "#9db9ca" }} />
                </div>
                <div className='section-field'>
                    <label>Abstract<span className={"mandatory"}>*</span></label>
                    <TextareaAutosize value={data.abstract}
                        onChange={(e) => handleDataChange(e.target.value, 'abstract')}
                        placeholder={'Write here'} minRows={10} aria-label="abstract" />
                </div>
                <div className='section-field'>
                    <label>Author<span className={"mandatory"}>*</span></label>
                    <TextField type={'text'} value={data.author}
                        onChange={(e) => handleDataChange(e.target.value, 'author')}
                        placeholder={'Enter names separated by commas'} aria-label="author" />
                </div>
                <div className='section-field'>
                    <label>Disclaimer</label>
                    <TextareaAutosize value={data.disclaimer}
                        onChange={(e) => handleDataChange(e.target.value, 'disclaimer')} placeholder={'Write here'} minRows={10} aria-label="disclaimer" />
                </div>
            </div>

            <div className="navigation-links">
                <div className={"link-next"}><Link to={"/protocols/guidelines"}>Guidelines</Link><ArrowForwardIosIcon /></div>
            </div>

        </section>
    );
}

export default Description;