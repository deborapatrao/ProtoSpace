import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";
import Preview from './Preview';

const PreviewCreate = () => {
    const { data } = useOutletContext();

    return (
        <section>



            <Preview protocolInfo={data} />
            <Link to={-1}>Back</Link>

        </section>
    );
}

export default PreviewCreate;