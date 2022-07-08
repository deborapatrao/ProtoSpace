import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './workspace.scss'


const Workspace = () => {
    return (
        <div className='workspace'>
            <Outlet />
        </div>
    );
}

export default Workspace;
