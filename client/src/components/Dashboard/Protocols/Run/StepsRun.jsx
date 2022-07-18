import React, { useEffect, useState, useRef } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { HOST_URL } from '../../../../data/data';
import axios from 'axios';
import SingleStepRun from './SingleStepRun';
import { Button } from '@mui/material';
import Preview from '../Preview';
import '../protocolsi.scss';
import ReactToPrint from "react-to-print";

const StepsRun = () => {
    const componentRef = useRef();
    const [steps, setSteps] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const [showSummary, setShowSummary] = useState(false)
    const { protocolInfo } = useOutletContext();

    const { protocolId } = useParams();

    useEffect(() => {
        // const protocolNew = protocols.find(item => item.protocol_id === Number(protocolId));
        // console.log('New: ', protocolNew);
        // setProtocolInfo(protocolNew);

        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                protocolId: protocolId,
                workspace_id: user.workspaceId[0][0].workspaceId
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/step`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp.data);

                setSteps(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);



    return (
        <section className='steps'>
            {showSummary ? <div style={{ marginBottom: 30, paddingLeft: 30 }}>
                <div className={"description-title"}>
                    <h4 >Summary</h4>
                </div>
                <div>Date run: </div>
                <div>Time: </div>
                <div>Run by: </div>
                <div>Owner: </div>
                <div>
                    {/* <Button onClick={() => print('a', 'forPdf')}>Export submission</Button> */}
                    {/* <Button onClick={handleExport}>Export submission</Button> */}
                    <ReactToPrint
                        trigger={() => <Button>Export submission</Button>}
                        content={() => componentRef.current}
                    />
                </div>
            </div> : ''}
            <div>

            </div>
            <div ref={componentRef} id={'forPdf'} style={{ paddingLeft: 30 }}>
                {showSummary ?
                    <>
                        <section className={"preview-section"}>

                            <Preview protocolInfo={protocolInfo} />
                        </section>
                        {steps ? steps.map((item, index) => {
                            return <SingleStepRun stepsQnt={steps.length} disabled={false} key={index} step={item} activeStep={activeStep} setActiveStep={setActiveStep} setShowSummary={setShowSummary} />
                        }) : ''}
                    </>

                    :
                    steps ? steps.map((item, index) => {
                        return <SingleStepRun stepsQnt={steps.length} disabled={activeStep === index ? false : true} key={index} step={item} activeStep={activeStep} setActiveStep={setActiveStep} setShowSummary={setShowSummary} />
                    }) : ''
                }
            </div>
        </section>
    );
}

export default StepsRun;
