import React from 'react';
import {
    useOutletContext
} from "react-router-dom";
import { TextField } from '@mui/material';

const Materials = () => {
    const { data, handleDataChange } = useOutletContext();
    return (
        <div>
            <TextField type={'text'} value={data.materials} onChange={(e) => handleDataChange(e.target.value, 'materials')} placeholder={'Materials'}/>
        </div>
    );
}

export default Materials;