import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Protocols = () => {
    const [data, setData] = useState({
        name: '',
        abstract: '',
        author: '',
        disclaimer: '',
        guideline: '',
        before_start: '',
        safety_warning: '',
        materials: ''
    });

    const [steps, setSteps] = useState([{ id: 1, name: 'step1', text: '' }]);

    const handleDataChange = (newValue, type) => {
        let newObj = { ...data };
        newObj[type] = newValue
        setData(newObj)
    }

    return (
        <div >
            Protocols
            <Outlet context={{ data, handleDataChange, steps, setSteps }} />
        </div>
    );
}

export default Protocols;
