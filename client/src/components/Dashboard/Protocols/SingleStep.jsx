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
import SingleComponent from './SingleComponent';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import { HOST_URL } from '../../../data/data';

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

const SingleStep = ({ step, index, handleTextChange, setActiveStep, activeStep, steps, setSteps, publishedProtocol }) => {
    const [expanded, setExpanded] = useState(false);
    const [openModal, setOpenModal] = useState(true);
    const [chosenUsers, setChosenUsers] = useState([]);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {}

            try {
                const resp = await axios.post(`${HOST_URL}/api/share/users`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp);

                setUsers(resp.data);

            } catch (error) {
                console.log(error);
                // good practice???

            }
        }

        fetchData();
    }, [])

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

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setChosenUsers(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        console.log(chosenUsers);
    };

    const handleShare = async () => {
        const chosenWorkspaces = chosenUsers.map((item) => {
            const newObj = {
                workspace_id: item.workspace_id
            }
            return newObj
        });
        const stepsForPublish = publishedProtocol[1];
        console.log(chosenWorkspaces);
        const user = JSON.parse(localStorage.getItem('user'));

        const params = {
            protocol_id: publishedProtocol[0].protocol_id,
            workspaces: chosenWorkspaces,
            steps: stepsForPublish
        }

        try {
            const resp = await axios.post(`${HOST_URL}/api/share/`, {
                ...params
            }, {
                headers: {
                    "x-access-token": user.accessToken
                }
            });

            console.log(resp);

        } catch (error) {
            console.log(error);

        }
        console.log(publishedProtocol);
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

                    <div className="single-step__inner-container">
                        <h4>Components</h4>
                        <div className='single-component__wrapper'>
                            {step.components && step.components.length > 0 ? step.components.map((item, index) => {
                                return (
                                    <SingleComponent key={index} componentIndex={index} component={item} activeStep={activeStep} steps={steps} setSteps={setSteps} />
                                )
                            }) : 'There are no components'}
                        </div>

                    </div>
                </AccordionDetails>
            </Accordion>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(!openModal)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h4>so many things</h4>
                        <div></div>
                        <label htmlFor="demo-simple-select"></label>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={chosenUsers}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => {
                                    console.log(selected);
                                    const newArr = selected.map(item => item.user_name)
                                    return newArr.join(', ')

                                }}
                            >
                                {users ? users.map((item, index) => (
                                    <MenuItem key={index} value={item}>
                                        <Checkbox checked={chosenUsers.indexOf(item) > -1} />
                                        <ListItemText primary={item.user_name} />
                                    </MenuItem>
                                )) : ''}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        {chosenUsers ? chosenUsers.map((item, index) => {
                            return <div key={index}>{item.user_name} and {item.workspace_id}</div>
                        }) : ''}
                    </div>
                    <div>
                        <Button onClick={handleShare}>Share</Button>
                    </div>
                </Box>
            </Modal>
        </section>
    );
}

export default SingleStep;