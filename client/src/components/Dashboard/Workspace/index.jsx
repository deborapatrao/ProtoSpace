import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './workspace.scss'
import Sidebar from '../Sidebar';
import Breadcrumbs from '../../Breadcrumbs';


const Workspace = ({ width }) => {
    const location = useLocation();

    return (
        <div className='workspace'>
            <Breadcrumbs />
            {location.pathname === '/' ? <h1>My Workspace</h1> : ''}
            <Outlet context={{ width }} />
        </div>
    );
}

export default Workspace;
