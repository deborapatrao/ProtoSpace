import React, { useState, useEffect } from 'react';
import {
    TextareaAutosize,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SingleStep = ({ step, index, handleTextChange, steps, setActiveStep, activeStep }) => {
    const [expanded, setExpanded] = useState(false);


    const handleClick = (e, index) => {
        setActiveStep(index)
    }

    return (
        <section onClick={(e) => handleClick(e, index)}>
            <Accordion sx={{ border: activeStep === index ? 1 : 0, borderColor: activeStep === index ? 'red' : 'none' }} key={index} expanded={expanded} onChange={() => setExpanded(!expanded)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {`Step ${index + 1}`}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <h4>Description</h4>
                    <TextareaAutosize key={step.name} placeholder={`Step ${index + 1}`} style={{ width: '100%', height: 100 }} value={step.description} onChange={(e) => handleTextChange(e.target.value, index)} />
                    {/*<button value={data.image} onClick={(e) => handleTextChange(e.target.value, index)}> add photo</button>*/}
                    <h4>Photos</h4>
                    <button>Add photo</button>
                    <h4>Components</h4>
                    <ul>
                        {step.components ? step.components.map((item, index) => {
                            return (
                                <li key={index}>{item.component_name}</li>
                            )
                        }) : 'There are no components'}
                    </ul>
                    {/*<ul className={"addedComponentsList"}>*/}
                    {/*     */}
                    {/*    */}
                    {/*    */}
                    {/*</ul>*/}
                </AccordionDetails>
            </Accordion>
        </section>
    );
}

export default SingleStep;