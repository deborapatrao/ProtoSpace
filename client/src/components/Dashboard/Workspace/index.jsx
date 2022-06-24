import React from 'react';
import { Outlet, Link } from 'react-router-dom';


const Workspace = () => {
    return (
        <div className='workspace'>
            Workspace
            <Outlet />
            <Link to={"/protocols/description"}>Create protocol</Link>
        </div>
    );
}

export default Workspace;
