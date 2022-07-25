import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './workspace.scss'
import Sidebar from '../Sidebar';
import FolderBreadcrumbs from '../../FolderBreadcrumbs';


const Workspace = ({ width }) => {
    const location = useLocation();

    return (
        <div className='workspace'>

            {location.pathname === '/' || location.pathname === '/shared' ? '' : <FolderBreadcrumbs />}
            {location.pathname === '/' ? <h1>My Workspace</h1> : ''}
            {location.pathname === '/shared' ? <h1>Shared Protocols</h1> : ''}
            <Outlet context={{ width }} />
            {/* <img src='https://protospace-app.s3.amazonaws.com/profile.jpg' alt='ss' /> */}
        </div>
    );
}

export default Workspace;
