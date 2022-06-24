import React from 'react';
import {
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';

const Guidelines = () => {
    const { data, handleDataChange } = useOutletContext();
    
    return (
        <div>
            <TextField type={'text'} value={data.guidelines} onChange={(e) => handleDataChange(e.target.value, 'guidelines')} placeholder={'Guidelines'}/>
        </div>
    );
}

export default Guidelines;