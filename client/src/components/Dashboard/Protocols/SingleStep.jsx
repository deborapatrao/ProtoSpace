import React, { useState } from 'react';
import {
    TextareaAutosize,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SingleComponent from './SingleComponent';

const SingleStep = ({ step, index, handleTextChange, setActiveStep, activeStep, steps, setSteps }) => {
    const [expanded, setExpanded] = useState(false);


    const handleClick = (e, index) => {
        setActiveStep(index)
    }

    return (
        <section onClick={(e) => handleClick(e, index)} className={`single-step`}>
            <Accordion sx={{ border: activeStep === index ? 1 : 0, borderColor: activeStep === index ? '#063554' : 'none' }} key={index} expanded={expanded} onChange={() => setExpanded(!expanded)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {`Step ${index + 1}`}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className='single-step__body'>
                    <div className="single-step__inner-container">
                        <h4 className={'field-title'}>Description</h4>
                        <TextareaAutosize key={step.name} placeholder={`Write here`} style={{ width: '100%', height: 100 }} value={step.step_description} onChange={(e) => handleTextChange(e.target.value, index)} />
                        {/*<button value={data.image} onClick={(e) => handleTextChange(e.target.value, index)}> add photo</button>*/}
                    </div>
                    <div className="single-step__inner-container">
                        <h4>Photos</h4>
                        <div className={"photo-container"}>
                            <div className={"photo-btn"} >
                                <label className={"label-photo"} htmlFor={"photo-image"}>
                                    <span><ImageIcon /></span>
                                    <span>Add Photo</span>
                                    {/* <img src={`https://s3.amazonaws.com/protospace-app/${image1}`} alt='image1' /> */}
                                    {/* <img src={image1} alt='image1' /> */}
                                </label>
                                {/* <input className={"input-image hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} onChange={(e) => handleImage(e)} /> */}
                                <input className={"input-image hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                            </div>
                            <div className={"photo-btn"} >
                                <label className={"label-photo"} htmlFor={"photo-image2"}>
                                    <span><ImageIcon /></span>
                                    <span>Add Photo</span>
                                </label>
                                <input className={"input-image2 hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                            </div>
                            <div className={"photo-btn"} >
                                <label className={"label-photo"} htmlFor={"photo-image3"}>
                                    <span><ImageIcon /></span>
                                    <span>Add Photo</span>
                                </label>
                                <input className={"input-image3 hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                            </div>
                            <div className={"photo-btn"} >
                                <label className={"label-photo"} htmlFor={"photo-image4"}>
                                    <span><ImageIcon /></span>
                                    <span>Add Photo</span>
                                </label>
                                <input className={"input-image4 hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} />
                            </div>
                        </div>
                    </div>

                    <h4>Components</h4>
                    <div>
                        {step.components ? step.components.map((item, index) => {
                            return (
                                <SingleComponent key={index} componentIndex={index} component={item} activeStep={activeStep} steps={steps} setSteps={setSteps} />
                            )
                        }) : 'There are no components'}
                    </div>

                </AccordionDetails>
            </Accordion>
        </section>
    );
}

export default SingleStep;