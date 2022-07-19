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
    const [images, setImages] = useState([
        {
            img: ''
        },
        {
            img: ''
        },
        {
            img: ''
        },
        {
            img: ''
        },
    ])


    const handleClick = (e, index) => {
        setActiveStep(index)
    }

    const handleImage = (event, index) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                let newArr = [...images]
                newArr[index].img = e.target.result
                setImages(newArr);
                console.log({ img: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        // console.log(event.target.files[0]);
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
                            {
                                images ? images.map((item, index) => {

                                    if (item.img == '') {
                                        return (
                                            <div key={index} className='photo-btn'>
                                                <label className={"label-photo"} htmlFor={"photo-image"}>
                                                    <span> <ImageIcon /> </span>
                                                    <span>Add Photo</span>
                                                </label>
                                                <input className={"input-image hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} onChange={(e) => handleImage(e, index)} />
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={index} className='photo-btn' style={{ overflow: 'hidden', backgroundSize: 'cover' }}>
                                                <img src={item.img} alt='image1' />
                                            </div>
                                        )
                                    }

                                    // <div key={index} className='photo-btn'>
                                    //     {item.pic == '' ?
                                    //         <label className={"label-photo"} htmlFor={"photo-image"}>
                                    //             <span> <ImageIcon /> </span>
                                    //             <span>Add Photo</span>
                                    //         </label>
                                    //         : <img src={item.pic} alt='image1' />}
                                    //     <input className={"input-image hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} onChange={(e) => handleImage(e)} />
                                    // </div>
                                })
                                    : ''
                            }
                            {/* <div className={"photo-btn"} >
                                <label className={"label-photo"} htmlFor={"photo-image"}>
                                    <span><ImageIcon /></span>
                                    <span>Add Photo</span>
                                </label>
                                <input className={"input-image hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} onChange={(e) => handleImage(e)} />
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
                            </div> */}
                        </div>
                    </div>

                    <h4>Components</h4>
                    <div>
                        {step.components && step.components.length > 0 ? step.components.map((item, index) => {
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