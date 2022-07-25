import React, { useEffect, useState, useRef } from 'react';
import { useParams, useOutletContext, Link } from 'react-router-dom';
import axios from 'axios';
import { HOST_URL } from '../../../data/data';
import './protocolsi.scss'
import SingleStep from './Run/SingleStepRun';
import { Button } from '@mui/material';
import ReactToPrint from "react-to-print";


const Summary = () => {
    const { protocolId } = useParams();
    const [protocolInfo, setProtocolInfo] = useState('');
    const [steps, setSteps] = useState([]);
    const componentRef = useRef();
    const [pdf, setPdf] = useState('');

    useEffect(() => {
        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                protocolId: Number(protocolId),
                workspace_id: user.workspaceId[0][0].workspaceId
            }
            console.log(params);

            try {
                const resp = await axios.post(`${HOST_URL}/api/protocol/find`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log('Gen Info: ', resp.data);
                setProtocolInfo(resp.data);

                const respSteps = await axios.post(`${HOST_URL}/api/step`, {
                    protocolId: protocolId,
                    workspace_id: user.workspaceId[0][0].workspaceId
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });
                console.log('Steps: ', respSteps.data);

                setSteps(respSteps.data)


            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])


    const generatePdf = async () => {

        const user = JSON.parse(localStorage.getItem('user'));

        const params = {
            protocol_id: protocolId,
            workspace_id: user.workspaceId[0][0].workspaceId
        }

        try {
            const resp = await axios.post(`${HOST_URL}/api/generates/pdf`, {
                ...params
            }, {
                headers: {
                    "x-access-token": user.accessToken,
                    // 'Content-Type': 'application/pdf',
                }
            });

            console.log(resp);
            console.log(resp.data);
            const url = window.URL.createObjectURL(new Blob([resp.data]));
            console.log(url);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${protocolInfo.name ? protocolInfo.name : 'YourProtocol'}.pdf`);
            document.body.appendChild(link);
            link.click();
            // setPdf(url);


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={"preview"} ref={componentRef}>
            <div style={{ marginBottom: 30, paddingTop: 30 }}>
                <div className={"description-title"}>
                    <h4 >Summary</h4>
                    {/* <a download={'test2.pdf'} href={pdf}>Download pdf</a> */}
                </div>
                <div>Date run: {new Date().toDateString()}</div>
                {/* <div>Time: </div> */}
                <div>Run by: {JSON.parse(localStorage.getItem('user')).name}</div>
                <div>Owner: {protocolInfo.author ? protocolInfo.author : ''}</div>
                <div>
                    {/* <ReactToPrint
                        trigger={() => <Button>Export submission</Button>}
                        content={() => componentRef.current}
                    /> */}
                    <Button onClick={generatePdf}>Export submission</Button>
                </div>
            </div>

            <div className={'sectionTitle'}>
                <h4>Description</h4>
            </div>
            <div className={'description'}>
                <h6>Protocol Name</h6>
                <p type={'text'}>{protocolInfo.name ? protocolInfo.name : ''}</p>
                <h6>Abstract</h6>
                <p type={'text'}>{protocolInfo.abstract ? protocolInfo.abstract : ''}</p>
                <h6>Author</h6>
                <p type={'text'}>{protocolInfo.author ? protocolInfo.author : ''}</p>
                <h6>Disclaimer</h6>
                <p type={'text'}>{protocolInfo.disclaimer ? protocolInfo.disclaimer : ''}</p>
            </div>

            <div className={'sectionTitle'}>
                <h4>Guidelines</h4>
            </div>
            <div className={'guidelines'}>
                <h6>Guidelines</h6>
                <p type={'text'}>{protocolInfo.guideline ? protocolInfo.guideline : ''}</p>
                <h6>Before start</h6>
                <p type={'text'}>{protocolInfo.before_start ? protocolInfo.before_start : ''}</p>
                <h6>Safety warnings</h6>
                <p type={'text'}>{protocolInfo.safety_warning ? protocolInfo.safety_warning : ''}</p>
                <h6>
                    Confidentially policy
                </h6>
                <div className={"confidentially-options"}>
                    <span>Sensitive content warning</span>
                    <span>Confidential</span>
                </div>
            </div>

            <div className={'sectionTitle'}>
                <h4>Material</h4>
            </div>
            <div className={'materials'}>
                <h6>List of materials</h6>
                <p type={'text'}>{protocolInfo.materials}</p>
            </div>
            {steps ? steps.map((item, index) => {
                return <SingleStep key={index} step={item} disabled={false} />
            }) : ''}
        </section>
    );
}

export default Summary;
