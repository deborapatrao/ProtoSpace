import React, { useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';

const Protocols = () => {
    const [data, setData] = useState({
        description: '',
        guidelines: '',
        materials: ''
    });

    return (
        <div >
            Protocols
            <Outlet />
        </div>
    );
}

export default Protocols;
