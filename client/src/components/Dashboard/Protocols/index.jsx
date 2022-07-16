import "./protocolsi.scss";
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HOST_URL } from '../../../data/data';


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

    const [steps, setSteps] = useState([{ step_number: 1, step_description: '', components: [] }]);

    const publishWarning = () => toast.error("Fill all required fields!");
    const publishSuccess = () => toast.success("Protocol published!");

    const conditionState = data.name && data.abstract && data.author && data.guideline && data.before_start && data.safety_warning && data.materials ? true : false;


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
                const resp = await axios.post(`${HOST_URL}/api/protocol/`, {
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
        <div className="section__protocols">
            <div className="btns__container" style={{ display: 'flex', gap: 10, alignSelf: 'flex-end', marginBottom: 30 }}>
                <Button variant="text" sx={{ color: 'red' }}>Delete</Button>
                <Button variant="outlined">Export</Button>
                <Button variant="outlined">Preview</Button>
                <Button variant="outlined">Save Draft</Button>
                <Button variant="contained" disabled={conditionState ? false : true}>Publish</Button>
            </div>
            <div>
                <Outlet context={{ data, handleDataChange, steps, setSteps }} />
                <Button onClick={handlePublish}>Publish</Button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Protocols;