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
    const { steps, setSteps } = useOutletContext();
    const [components, setComponents] = useState([]);

    const [activeStep, setActiveStep] = useState(null);
    // const [activeState, setActiveState] = useState('black');

    // useEffect(() => {
    //     setActiveState('red')
    // }, [activeStep])

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

                // console.log(resp);

                setComponents(resp.data)

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    const handleDataChange = () => {
        let newArr = [...steps, { step_number: steps.length + 1, description: '', components: [] }];

        setSteps(newArr)

    }

    const handleTextChange = (txt, index) => {
        let newArr = [...steps];

        newArr[index].description = txt;

        setSteps(newArr)

        // console.log(newArr);
    }

    // Adding new components
    const handleAddComponent = (item, activeStep) => {
        // console.log(index);
        if (activeStep != null) {

            const stepNum = activeStep;
            let newArr = [...steps];
            let newArrComponents = [...newArr[stepNum].components, {
                unit_id: newArr[stepNum].components.length + 1,
                component_id: newArr[stepNum].components.length + 1,
                component_information: '',
                component_name: item.name,
                component_value: '',
            }];
            // newArrComponents.unit_id = newArrComponents.length;
            // newArrComponents.component_id = newArrComponents.length;
            // newArrComponents.component_information = '';
            // newArrComponents.component_name = item.name;
            // newArrComponents.component_value = '';

            newArr[stepNum].components = newArrComponents;
            // console.log(newArr[stepNum].components);
            // console.log(newArr[stepNum]);
            console.log(steps);
            setSteps(newArr)
        }
    }

    return (
        <section className='section-steps'>
            <div>
                {steps ? steps.map((item, index) => {
                    // console.log(index);
                    return <SingleStep activeStep={activeStep} setActiveStep={setActiveStep} key={index} step={item} index={index} handleTextChange={handleTextChange} steps={steps} />
                }) : ''}

                <Button onClick={handleDataChange} className={"add-step-btn"}>+ New Step</Button>


                <div>
                    <Link to={"/protocols/materials"}><ArrowBackIosNewIcon />Materials</Link>
                </div>

                <Link className={'previewBtn'} to={"/protocols/preview"}>Preview<ArrowForwardIosIcon /></Link>
            </div>


            <div className={"components-container"}>
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

        </section>
    );
}

export default Steps;