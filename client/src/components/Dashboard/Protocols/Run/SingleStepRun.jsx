import React, { useState } from 'react';
import {
    TextareaAutosize,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Button,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SingleComponentRun from './SingleComponentRun';
import axios from 'axios';
import { HOST_URL } from '../../../../data/data';
import '../protocolsi.scss';
// import { useParams, useNavigate } from 'react-router-dom';
import Check from '../../../../assets/check.png';

const SingleStep = ({ step, activeStep, setActiveStep }) => {
    // const [loading, setLoading] = useState(false)
    // const { protocolId } = useParams();
    // let navigate = useNavigate();
    const [note, setNote] = useState(step.step_note || '')

    const handleFinish = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        const params = {
            step_user_id: step.step_user_id,
            note: note
        }

        console.log(params);

        try {
            const resp = await axios.post(`${HOST_URL}/api/step/end`, {
                ...params
            }, {
                headers: {
                    "x-access-token": user.accessToken
                }
            });

            console.log(resp);

            setActiveStep(activeStep + 1)

        } catch (error) {
            console.log(error);
        }
    }


    const stepExpanded = () => {
        if (step.end_step_status === 1) {
            return false;
        } else {
            if (activeStep === step.step_number) {
                return true;
            } else {
                return false;
            }
        }
    }

    const stepDisabled = () => {
        if (step.end_step_status === 1) {
            return true;
        } else {
            if (activeStep === step.step_number) {
                return false;
            } else {
                return true;
            }
        }
    }


    return (
        <section className={`single-step`}>
            <Accordion className={'step-box'}  disabled={stepDisabled()} expanded={stepExpanded()}>
                <AccordionSummary className={'single-step-header'}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {step.end_step_status === 1 ? <img src={Check} alt={'step-completed'} className={'step-completed'} /> : ``}  <span className={'step'}>{`Step ${step.step_number}`}</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="single-step__inner-container">
                        <h4 className={'field-title'}>Description</h4>
                        {/* <TextareaAutosize key={step.name} placeholder={`Step number`} style={{ width: '100%', height: 100 }} value={step.step_description} /> */}
                        <p>{step.step_description}</p>
                    </div>
                    {/*<button value={data.image} onClick={(e) => handleTextChange(e.target.value, index)}> add photo</button>*/}
                    <div className="single-step__inner-container">
                        <h4>Photos</h4>
                        <div className={"photo-container"}>
                            {step.step_image === '' ? <div className='photo-btn'>
                                <label className={"label-photo"} htmlFor={"photo-image"}>
                                    <span> <ImageIcon /> </span>
                                    <span>Add Photo</span>
                                </label>
                                <input className={"input-image hidden"} type={"file"} name={"photo-image"} id={"photo-image"} />
                            </div> : <div className='photo-btn' style={{ overflow: 'hidden', backgroundSize: 'cover' }}>
                                <img src={step.step_image} alt='image1' />
                            </div>}

                            <div className={"photo-btn"} >
                                <label className={"label-photo"} htmlFor={"photo-image2"}>
                                    <span><ImageIcon /></span>
                                    <span>Add photo</span>
                                </label>
                                <input className={"input-image2 hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                            </div>
                            <div className={"photo-btn"} >
                                <label className={"label-photo"} htmlFor={"photo-image3"}>
                                    <span><ImageIcon /></span>
                                    <span>Add photo</span>
                                </label>
                                <input className={"input-image3 hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                            </div>
                            <div className={"photo-btn"} >
                                <label className={"label-photo"} htmlFor={"photo-image4"}>
                                    <span><ImageIcon /></span>
                                    <span>Add photo</span>
                                </label>
                                <input className={"input-image4 hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                            </div>
                        </div>
                    </div>

                    <h4>Components</h4>
                    <SingleComponentRun stepId={step.step_id} />
                    <TextareaAutosize placeholder={`Note`} style={{ width: '100%', height: 100, padding: 10 }} name={step.step_id} value={note} onChange={(e) => setNote(e.target.value)} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* {activeStep > 0 ? <Button onClick={handleGoBack}>Go back</Button> : <div></div>} */}
                        <div></div>
                        <Button onClick={handleFinish}>Finish step</Button>
                    </div>
                </AccordionDetails>
            </Accordion>
            {/* <Button onClick={handleSubmit} variant={'contained'}>Submit</Button> */}
        </section>
    );
}

export default SingleStep;