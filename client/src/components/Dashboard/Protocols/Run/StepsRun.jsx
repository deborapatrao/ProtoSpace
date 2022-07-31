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
    const { protocolInfo, runStatus } = useOutletContext();
    const [modalSubmit, setModalSubmit] = useState(false)

    const { protocolId } = useParams();



    useEffect(() => {
        if (!runStatus) {
            if (location.pathname.includes('protocols/run/') && protocolInfo.start_run_status === 0) {
                navigate(`/protocols/run/${protocolId}`, { replace: true });
            }
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
                </div>
            </NewModal>
            <div ref={componentRef} id={'forPdf'} className="step-run">

                {steps ? steps.map((item, index) => {
                    return <SingleStepRun key={index} step={item} activeStep={acStep ? acStep.step_number : activeStep} setActiveStep={setActiveStep} />
                }) : ''}
            </div>
            <Button onClick={handleSubmit} variant={'contained'} disabled={acStep == undefined ? false : true}>Submit</Button>
        </section>
    );
}

export default StepsRun;
