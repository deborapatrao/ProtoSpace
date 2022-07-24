import React, { useState, useEffect } from 'react';
import SingleStep from "./SingleStep";
import Button from '@mui/material/Button';
import { Link, useOutletContext } from "react-router-dom";
import axios from 'axios';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import ScaleIcon from '@mui/icons-material/Scale';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import HubIcon from '@mui/icons-material/Hub';
import SpeedIcon from '@mui/icons-material/Speed';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { HOST_URL } from '../../../data/data';

const Steps = () => {
    const { steps, setSteps, handlePublish, conditionState, publishedProtocol } = useOutletContext();
    const [components, setComponents] = useState([]);

    const [activeStep, setActiveStep] = useState(null);


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
                    return <SingleStep activeStep={activeStep} setActiveStep={setActiveStep} key={index} step={item} index={index} handleTextChange={handleTextChange} steps={steps} setSteps={setSteps} publishedProtocol={publishedProtocol} />
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





            <div className={"components-container"}>
                <div className="components">
                    <h3>Components</h3>
                    <ul className={"buttons"}>
                        {components ? components.map((item, index) => {
                            return <li key={index}>
                                <div onClick={() => handleAddComponent(item, activeStep)} className={`components-btn`}>
                                    {(() => {
                                        if (item.name == "Length") {
                                            return (
                                                <SquareFootIcon />
                                            )
                                        } else if (item.name == "volume") {
                                            return (
                                                <LocalDrinkIcon />
                                            )
                                        } else if (item.name == "Mass") {
                                            return (
                                                <ScaleIcon />
                                            )
                                        } else if (item.name == "Temperature") {
                                            return (
                                                <DeviceThermostatIcon />
                                            )
                                        } else if (item.name == "Concentration") {
                                            return (
                                                <HubIcon />
                                            )
                                        } else if (item.name == "Pressure") {
                                            return (
                                                <SpeedIcon />
                                            )
                                        } else if (item.name == "Time") {
                                            return (
                                                <SquareFootIcon />
                                            )
                                        } else if (item.name == "Others") {
                                            return (
                                                <AddIcon />
                                            )
                                        }
                                    }
                                    )()}
                                    <button>{item.name}</button>
                                </div>
                            </li>
                        }) : ''}
                    </ul>
                </div>

            </div>
            <div className='btns'>
                <Button className='btn_left' variant='outlined'>Preview</Button>
                <Button className='btn_right' variant='contained' onClick={handlePublish} disabled={conditionState ? false : true}>Publish</Button>
            </div>

        </section>
    );
}

export default Steps;