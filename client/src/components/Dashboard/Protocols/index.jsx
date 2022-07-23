import "./protocolsi.scss";
import React, { useState } from 'react';
import { Outlet, useOutletContext, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HOST_URL } from '../../../data/data';
import Sidebar from "../Sidebar";
import Drawer from '@mui/material/Drawer';


const Protocols = () => {
    let location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false)
    console.log(location.pathname.includes('/summary'));
    const [publishedProtocol, setPublishedProtocol] = useState('')
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

    const { width } = useOutletContext();

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
                steps: steps,
                published: "Y"
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
                setPublishedProtocol(resp.data);

            } catch (error) {
                console.log('EEERRR: ', error);
            }
        } else {
            publishWarning();
        }
    }

    return (
        <div className="section__protocols">
            {!location.pathname.includes('protocols/run/') ?
                width > 1000 ?
                    <div className="btns__container" style={{ display: 'flex', gap: 10, alignSelf: 'flex-end', marginBottom: 30 }}>
                        <Button variant="text" sx={{ color: 'red' }}>Delete</Button>
                        <Button variant="outlined">Export</Button>
                        <Button variant="outlined">Preview</Button>
                        <Button variant="outlined">Save Draft</Button>
                        <Button variant="contained" disabled={conditionState ? false : true} onClick={handlePublish}>Publish</Button>
                    </div>
                    : <Button sx={{ alignSelf: 'flex-end', marginRight: 2 }} variant="outlined" onClick={() => setDrawerOpen(!drawerOpen)}>...</Button>
                : ''}
            <div>
                {width < 1000 && !location.pathname.includes('/summary') ? <Sidebar width={width} /> : ''}
            </div>
            <div>
                <Outlet context={{ data, handleDataChange, steps, setSteps, handlePublish, conditionState, publishedProtocol }} />
                {/* <Button onClick={handlePublish}>Publish</Button> */}
            </div>
            <ToastContainer />
            {width < 1000 ?
                <Drawer
                    anchor='bottom'
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(!drawerOpen)}
                >
                    <div className="btns__container-mobile" style={{ display: 'flex', flexDirection: 'column', gap: 10, alignSelf: 'flex-end', marginBottom: 30 }}>
                        <Button variant="text" sx={{ color: 'red' }}>Delete</Button>
                        <Button variant="outlined">Export</Button>
                        <Button variant="outlined">Preview</Button>
                        <Button variant="outlined">Save Draft</Button>
                        <Button variant="contained" disabled={conditionState ? false : true} onClick={handlePublish}>Publish</Button>
                    </div>

                </Drawer>
                : ''}
        </div>
    );
}

export default Protocols;