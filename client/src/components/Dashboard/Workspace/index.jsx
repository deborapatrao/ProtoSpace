import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './workspace.scss'


const Workspace = () => {
    return (
        <div className='workspace'>
            <h1>My Workspace</h1>
            <Outlet />
            <div className="workspace__body">
                <Button variant="outlined">
                    <Link to={"/protocols/description"}>+ Create protocol</Link>
                </Button>
            </div>
        </div>
    );
}

export default Workspace;
