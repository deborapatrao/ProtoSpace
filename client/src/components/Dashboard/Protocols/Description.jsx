import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';

const Description = () => {
    const { data, handleDataChange } = useOutletContext();
    
    return (
        <section>
            {/*
            changes:
            main div to section
            remove br
            */}
            <div>
                <h2>Description</h2>
                <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            </div>

            <div>
                <label>Protocol Name<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.protocol}
                           onChange={(e) => handleDataChange(e.target.value, 'protocol')}
                           placeholder={'Enter protocol name'}/>
            </div>

            <div>
                <label>Abstract<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.abstract}
                           onChange={(e) => handleDataChange(e.target.value, 'abstract')}
                           placeholder={'Write here'}/>
            </div>

            <div>
                <label>Author<span className={"mandatory"}>*</span></label>
                <TextField type={'text'} value={data.author}
                           onChange={(e) => handleDataChange(e.target.value, 'author')}
                           placeholder={'Enter names separated by commas'}/>
            </div>

            <div>
                <label>Disclaimer</label>
                <TextField type={'text'} value={data.disclaimer}
                           onChange={(e) => handleDataChange(e.target.value, 'disclaimer')} placeholder={'Write here'}/>
            </div>

            <Link to={"/protocols/guidelines"}>Guidelines</Link>

        </section>
    );
}

export default Description;