import React, { useState, useEffect } from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link, useLocation, useParams } from 'react-router-dom';

const FolderBreadcrumbs = () => {
    const { protocolId } = useParams();
    let location = useLocation();
    let locationArr = location.pathname.substring(1).split('/');






    return (
        <Breadcrumbs>

            <Link className='link-unactive'
                to="/"
            >
                Dashboard
            </Link>

            <Link className='link-unactive'
                to="/"
            >
                My workspace
            </Link>
            {/* {location.pathname.includes('protocols/') ? < Link className='link-unactive'
                to="/protocols"
            >
                Protocols
            </Link> : ''}
            {location.pathname.includes('protocols/run/') ? < Link className='link-unactive'
                to="/protocols"
            >
                Run
            </Link> : ''}
            {location.pathname.includes('protocols/run/') ? < Link className='link-unactive'
                to="/protocols"
            >
                Protocol {protocolId}
            </Link> : ''} */}
            {location.pathname !== '/' ?
                locationArr.map((item, index) => {
                    if (index < locationArr.length - 1) {
                        return <Link key={index} className='link-unactive' to={`/${item}`}>{item[0].toUpperCase() + item.substring(1)}</Link>
                    } else {
                        return <div key={index} className='link-active'>{item}</div>
                    }
                })
                : ''}

            {/* {folders ? folders.map((item, i) => {
                return <Link key={i} underline="hover"
                    color="inherit" to={`/${item}`}>{item}</Link>
            }) : ''} */}
            {/* <Link
                underline="hover"
                color="inherit"
                href="/folders"
            >
                My dashboard
            </Link> */}
            {/* <Typography color="text.primary">{folderId}</Typography> */}
            {/* <div>{folderId}</div> */}
        </Breadcrumbs >
    );
}

export default FolderBreadcrumbs;
