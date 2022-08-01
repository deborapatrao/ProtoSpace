import React, { useState, useEffect } from 'react';
import {
    TextareaAutosize,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { HOST_URL } from '../../../data/data';
import Check from "../../../assets/check.png";
import SingleComponentRun from "./Run/SingleComponentRun";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const StepSummary =  ({ step, activeStep, setActiveStep }) => {
    const [note, setNote] = useState(step.step_note || '')

    const handleFinish = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        const params = {
            step_user_id: step.step_user_id,
            note: note
        }
        try {
            const resp = await axios.post(`${HOST_URL}/api/step/end`, {
                ...params
            }, {
                headers: {
                    "x-access-token": user.accessToken
                }
            });
            setActiveStep(activeStep + 1)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className={`single-step`}>
            <Accordion className={'step-box'}  expanded={true}>
                <AccordionSummary className={'single-step-header'}>
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <span className={'step'}>{`Step ${step.step_number}`}</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={'accordion-details'}>
                    <div className="single-step__inner-container">
                        <h4 className={'field-title'}>Description</h4>
                        <p>{step.step_description}</p>
                    </div>
                    <div className="single-step__inner-container">
                        <h4>Photos</h4>
                        <div className={"photo-container"}>
                                <img className={'photo'} src={step.step_image} alt='image1' />
                        </div>
                    </div>

                    <h4>Components</h4>
                    <SingleComponentRun stepId={step.step_id} />
                    <div >
                        <h4>Notes</h4>
                        <p className={'student-notes'} placeholder={`Note`} style={{ width: '100%', height: 100, padding: 10 }}>{step.step_note}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    </div>
                </AccordionDetails>
            </Accordion>
        </section>
    );
}

export default StepSummary;