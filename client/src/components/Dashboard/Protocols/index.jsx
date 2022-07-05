import "./protocolsi.scss";
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const publishWarning = () => toast.error("Fill all required fields!");
    const publishSuccess = () => toast.success("Protocol published!");


    const handleDataChange = (newValue, type) => {
        let newObj = { ...data };
        newObj[type] = newValue
        setData(newObj)
    }

    const handlePublish = async () => {
        const condition = data.name && data.abstract && data.author && data.guideline && data.before_start && data.safety_warning && data.materials ? true : false;
        console.log(condition);

        if (condition) {

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

                publishSuccess();

                console.log(resp);
            } catch (error) {
                console.log(error);
            }
        } else {
            publishWarning();
        }
    }

    return (
        <div >
            Protocols
            <Outlet context={{ data, handleDataChange, steps, setSteps }} />
            <Button onClick={handlePublish}>Publish</Button>
            <ToastContainer />
        </div>
    );
}

export default Protocols;