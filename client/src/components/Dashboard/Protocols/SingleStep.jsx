import React, {useState} from 'react';
import {
    TextareaAutosize,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SingleStep = ({ step, index, handleTextChange }) => {
    const  [ expanded, setExpanded] = useState(false);

    return (
        <div>
            <Accordion key={index} expanded={expanded} onChange={() => setExpanded(!expanded)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {step.name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextareaAutosize key={step.name} placeholder={step.name} style={{ width: '100%', height: 100 }} value={step.text} onChange={(e) => handleTextChange(e.target.value, index)} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default SingleStep;