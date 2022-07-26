import React, { useState, useEffect } from 'react';
import SingleStep from "./SingleStep";
import Button from '@mui/material/Button';
import { Link, useOutletContext } from "react-router-dom";
import axios from 'axios';

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { HOST_URL } from '../../../data/data';
import NewModal from "../Utils/Modal/NewModal";
import Components from "./Components";

const Steps = () => {
    const { steps, setSteps, handlePublish, conditionState, publishedProtocol, width, openModal, setOpenModal } = useOutletContext();
    const [components, setComponents] = useState([]);
    const [activeStep, setActiveStep] = useState(null);
    const [componentModal, setComponentModal] = useState(false);

    const toggleComponentModal = () => {
        setComponentModal(!componentModal);
    }

    useEffect(() => {
        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                workspaceId: user.workspaceId[0][0].workspaceId
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/component`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp.data);

                setComponents(resp.data)

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    const handleDataChange = () => {
        let newArr = [...steps, {
            step_number: steps.length + 1, step_description: '', components: []
        }];

        setSteps(newArr)

    }

    const handleTextChange = (txt, index) => {
        let newArr = [...steps];

        newArr[index].step_description = txt;

        setSteps(newArr)

    }

    // Adding new components
    const handleAddComponent = async (item, activeStep) => {
        // console.log(index);
        if (activeStep != null) {

            const stepNum = activeStep;

            let newArr = [...steps];

            let newArrComponents = [...newArr[stepNum].components, {
                unit_id: null,
                component_id: item.id,
                component_information: '',
                component_name: item.name,
                component_value: '',
            }];


            newArr[stepNum].components = newArrComponents;

            console.log(steps);
            setSteps(newArr)

        }
    }

    return (
        <section className='steps'>
            <div className='section-body'>
                {steps ? steps.map((item, index) => {
                    // console.log(index);
                    return <SingleStep openModal={openModal} setOpenModal={setOpenModal} activeStep={activeStep} setActiveStep={setActiveStep} key={index} step={item} index={index} handleTextChange={handleTextChange} steps={steps} setSteps={setSteps} publishedProtocol={publishedProtocol} />
                }) : ''}

                <Button onClick={handleDataChange} className={"add-step-btn"}>+ New Step</Button>
            </div>

            <div className="navigation-links">
                <div className='link-previous'>
                    <Link to={"/protocols/materials"}><ArrowBackIosNewIcon />Materials</Link>
                </div>
                <div className='link-next'>
                    <Link className={'previewBtn'} to={"/protocols/preview"}>Preview<ArrowForwardIosIcon /></Link>
                </div>
            </div>


            {width > 1000 ? <Components
                component={components}
                handleAddComponents={handleAddComponent}
                activeSteps={activeStep}
                title={'Components'}>
            </Components> :

                <Button variant="contained" onClick={toggleComponentModal}>Components</Button>
            }
            <NewModal
                open={componentModal}
                handleClose={toggleComponentModal}
                modalHeader={'Components'}>
                <Components
                    component={components}
                    handleAddComponents={handleAddComponent}
                    activeSteps={activeStep}
                    closeModal={toggleComponentModal}>
                </Components>
            </NewModal>

            <div className='btns'>
                <Button className='btn_left' variant='outlined'>Preview</Button>
                <Button className='btn_right' variant='contained' onClick={handlePublish} disabled={conditionState ? false : true}>Publish</Button>
            </div>

        </section>
    );
}

export default Steps;