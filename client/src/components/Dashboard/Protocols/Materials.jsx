import React from 'react';
import {
    Link,
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';

const Materials = () => {
    const { data, handleDataChange } = useOutletContext();
    return (
        <div>
            <div>
                <h2>Material</h2>
            </div>
            <div><span className={"mandatory"}>*</span> This section need to be filled</div>
            <label>List of materials<span className={"mandatory"}>*</span></label>
            <br/>
            <TextField type={'text'} value={data.materials} onChange={(e) => handleDataChange(e.target.value, 'materials')} placeholder={'Materials'}/>
            <br/>
            <div>
                <Link to={"/protocols/guidelines"}>Guidelines</Link>
                <Link to={"/protocols/steps"}>Steps</Link>
            </div>
        </div>
    );
}

export default Materials;