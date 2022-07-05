import "./protocolsi.scss";
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

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

    const [steps, setSteps] = useState([{ step_number: 1, description: 'step1', components: [{ unit_id: 1, component_id: 1, component_information: "info", component_name: "name", component_value: "value" }] }]);

    const handleDataChange = (newValue, type) => {
        let newObj = { ...data };
        newObj[type] = newValue
        setData(newObj)
    }

    const handlePublish = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        const params = {
            user_id: user.id,
            workspaceId: user.workspaceId[0][0].workspaceId,
            ...data,
            steps: steps
        }

        const headers = {
            "x-access-token": user.accessToken
        }

        console.log(JSON.stringify(params));
        console.log(JSON.stringify(headers));

        try {
            const resp = await axios.post('http://localhost:8080/api/protocol/', {
                ...params
            }, {
                headers: {
                    "x-access-token": user.accessToken
                }
            });

            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div >
            Protocols
            <Outlet context={{ data, handleDataChange, steps, setSteps }} />
            <Button onClick={handlePublish}>Publish</Button>
        </div>
    );
}

export default Protocols;