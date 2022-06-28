import React, {useState} from 'react';
import {
    TextareaAutosize,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SingleStep = ({ step, index, handleTextChange, steps }) => {
    const  [ expanded, setExpanded] = useState(false);

    return (
        <section>
            <Accordion key={index} expanded={expanded} onChange={() => setExpanded(!expanded)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {step.name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <h4>Description</h4>
                    <TextareaAutosize key={step.name} placeholder={step.name} style={{ width: '100%', height: 100 }} value={step.text} onChange={(e) => handleTextChange(e.target.value, index)} />
                    {/*<button value={data.image} onClick={(e) => handleTextChange(e.target.value, index)}> add photo</button>*/}
                    <h4>Photos</h4>
                    <button>Add photo</button>
                    <h4>Components</h4>
                    <div>There's no components to show</div>
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