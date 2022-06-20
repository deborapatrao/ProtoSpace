import React from 'react';
import {
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';

const Description = () => {
    const { data, handleDataChange } = useOutletContext();
    
    return (
        <div>
            <TextField type={'text'} value={data.description} onChange={(e) => handleDataChange(e.target.value, 'description')} placeholder={'Description'}/>
        </div>
    );
}

export default Description;