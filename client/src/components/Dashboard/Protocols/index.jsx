import React, { useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';

const Protocols = () => {
    const [data, setData] = useState({
        description: '',
        guidelines: '',
        materials: ''
    });

    const handleDataChange = (newValue, type) => {
        let newObj = { ...data };
        newObj[type] = newValue
        setData(newObj)
    }

    return (
        <div >
            Protocols
            <Outlet context={{data, handleDataChange}}/>
        </div>
    );
}

export default Protocols;
