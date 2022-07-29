import React from 'react';
import { Link, useOutletContext } from "react-router-dom";
import Preview from '../Preview';
import Button from "@mui/material/Button";
import axios from 'axios';
import { HOST_URL } from '../../../../data/data';
import { useParams, useNavigate } from 'react-router-dom';

const PreviewRun = () => {
    const { protocolInfo } = useOutletContext();
    // console.log('Info: ', protocolInfo);
    const { protocolId } = useParams();
    let navigate = useNavigate();

    const handleSubmit = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        const params = {
            workspace_id: user.workspaceId[0][0].workspaceId,
            protocol_id: Number(protocolId)
        }

        // console.log(params);

        try {
            const resp = await axios.post(`${HOST_URL}/api/protocol/run`, {
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



    return (<>
        <div className={"header-preview"}>
            <h2 className={"protocol-title"}>{protocolInfo.name}<span> (Preview)</span></h2>
            <Link to={"description"}><Button variant="contained" onClick={handleSubmit}>Run Protocol</Button></Link>
        </div>
        <section className={"preview-section"}>
            <Preview protocolInfo={protocolInfo} />
            <div className={"navigation-links-preview"}>
                <Link to={-1}>Back</Link>
                <Link to={"description"}><Button variant="contained">Run Protocol</Button></Link>
            </div>
        </section>
    </>

    );
}

export default PreviewRun;
