import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { HOST_URL } from '../../../data/data';
import './protocolsi.scss'
import { Button } from '@mui/material';
import StepSummary from "./StepSummary";
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Export} from '../../../assets/export-icon.svg';


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
        <section className={"summary"} ref={componentRef}>
            <h2>{protocolInfo.name}</h2>
            <div style={{ marginBottom: 30, paddingTop: 30 }}>
                <div className={"section-header"}>
                    <h4 className={'section-title'}>Summary</h4>
                </div>
                <div className={'section-body'}>
                    <div>Date run: {new Date().toDateString()}</div>
                    <div>Run by: {JSON.parse(localStorage.getItem('user')).name}</div>
                    <div>Owner: {protocolInfo.author ? protocolInfo.author : ''}</div>
                    <div>
                    {/* <ReactToPrint
                        trigger={() => <Button>Export submission</Button>}
                        content={() => componentRef.current}
                    /> */}
                        <Button className={'export-btn'} onClick={generatePdf}><Export />Export submission</Button>
                    </div>
                </div>
            </div>
            <div className={'section-header'}>
                <h4 className={'section-title'}>Description</h4>
            </div>
            <div className={'section-body'}>
                <h6>Protocol Name</h6>
                <p type={'text'}>{protocolInfo.name ? protocolInfo.name : ''}</p>
                <h6>Abstract</h6>
                <p type={'text'}>{protocolInfo.abstract ? protocolInfo.abstract : ''}</p>
                <h6>Author</h6>
                <p type={'text'}>{protocolInfo.author ? protocolInfo.author : ''}</p>
                <h6>Disclaimer</h6>
                <p type={'text'}>{protocolInfo.disclaimer ? protocolInfo.disclaimer : ''}</p>
            </div>

            <div className={'section-header'}>
                <h4 className={'section-title'}>Guidelines</h4>
            </div>
            <div className={'section-body'}>
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

            <div className={'section-header'}>
                <h4 className={'section-title'} >Material</h4>
            </div>
            <div className={'section-body'}>
                <h6>List of materials</h6>
                <p type={'text'}>{protocolInfo.materials}</p>
            </div>
            <div className={'summary steps-container'}>
                <div className={'section-header'}>
                    <h4 className={'section-title'}>Steps</h4>
                </div>
                <div className={'section-body'}>
                {steps ? steps.map((item, index) => {
                return <StepSummary key={index} step={item} />
                }) : ''}
                </div>
            </div>
        </section>
    );
}

export default Summary;
