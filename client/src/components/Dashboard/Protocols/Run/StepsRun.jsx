import React, { useEffect, useState, useRef } from 'react';
import { useParams, useOutletContext, useNavigate, useLocation } from 'react-router-dom';
import { HOST_URL } from '../../../../data/data';
import axios from 'axios';
import SingleStepRun from './SingleStepRun';
import { Button } from '@mui/material';
import Preview from '../Preview';
import '../protocolsi.scss';
import ReactToPrint from "react-to-print";
import NewModal from '../../Utils/Modal/NewModal';

const StepsRun = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const componentRef = useRef();
    const [steps, setSteps] = useState([]);
    const acStep = steps.find(item => item.end_step_status === 0);
    console.log(acStep);
    const [activeStep, setActiveStep] = useState(0);
    const [showSummary, setShowSummary] = useState(false)
    const { protocolInfo } = useOutletContext();
    const [modalSubmit, setModalSubmit] = useState(false)

    const { protocolId } = useParams();



    useEffect(() => {
        if (location.pathname.includes('protocols/run/') && protocolInfo.start_run_status === 0) {
            navigate(`/protocols/run/${protocolId}`, { replace: true });
        }
    }, [])

    useEffect(() => {
        // const protocolNew = protocols.find(item => item.protocol_id === Number(protocolId));
        // console.log('New: ', protocolNew);
        // setProtocolInfo(protocolNew);

        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                protocolId: Number(protocolId),
                workspace_id: user.workspaceId[0][0].workspaceId
            }
            console.log(params);

            try {
                const resp = await axios.post(`${HOST_URL}/api/step`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log('Steps: ', resp.data);
                // console.log(protocolInfo);

                setSteps(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, [activeStep]);

    const handleSubmit = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        const params = {
            workspace_id: user.workspaceId[0][0].workspaceId,
            protocol_id: Number(protocolId)
        }

        console.log(params);

        try {
            const resp = await axios.post(`${HOST_URL}/api/protocol/run`, {
                ...params
            }, {
                headers: {
                    "x-access-token": user.accessToken
                }
            });


            console.log(resp);
            setModalSubmit(true);


        } catch (error) {
            console.log(error);
        }
    }

    const closeSubmitModal = () => {
        setModalSubmit(false);
        navigate("/", { replace: true });
    };


    return (
        <section className='stepsRun'>
            {/* {showSummary ? <div style={{ marginBottom: 30, paddingLeft: 30, paddingTop: 30 }}>
                <div className={"description-title"}>
                    <h4 >Summary</h4>
                </div>
                <div>Date run: {new Date().toDateString()}</div>
                <div>Time: </div>
                <div>Run by: {JSON.parse(localStorage.getItem('user')).name}</div>
                <div>Owner: {protocolInfo.author}</div>
                <div>
                    <ReactToPrint
                        trigger={() => <Button>Export submission</Button>}
                        content={() => componentRef.current} 
                    />
                </div>
            </div> : ''} */}
            <div>

            </div>
            <NewModal open={modalSubmit}
                handleClose={closeSubmitModal}
                modalHeader={'Submit protocol'}>
                <div style={{ textAlign: 'center' }}>
                    Protocol has successfully been submitted.
                </div>

                <div className={"bottom-btn"}>
                    <Button variant={'clear'} className={'modal-btn'} onClick={closeSubmitModal}>Ok</Button>
                    {/* <button className={"close-btn"} onClick={closeSubmitModal}>Ok</button> */}
                </div>
            </NewModal>
            <div ref={componentRef} id={'forPdf'} className="step-run">
                {/* {showSummary ?
                    <>
                        <section className={"preview-section"}>

                            <Preview protocolInfo={protocolInfo} />
                        </section>
                        {steps ? steps.map((item, index) => {
                            return <SingleStepRun stepsQnt={steps.length} disabled={false} key={index} step={item} activeStep={activeStep} setActiveStep={setActiveStep} setShowSummary={setShowSummary} />
                        }) : ''}
                    </>

                    :
                } */}
                {steps ? steps.map((item, index) => {
                    return <SingleStepRun stepsQnt={steps.length} disabled={activeStep === index ? false : true} key={index} step={item} activeStep={acStep ? acStep.step_number : activeStep} setActiveStep={setActiveStep} setShowSummary={setShowSummary} />
                }) : ''}
            </div>
            <Button onClick={handleSubmit} variant={'contained'} disabled={acStep == undefined ? false : true}>Submit</Button>
        </section>
    );
}

export default StepsRun;
