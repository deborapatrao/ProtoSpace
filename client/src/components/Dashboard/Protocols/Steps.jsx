import React, { useState, useEffect } from 'react';
import SingleStep from "./SingleStep";
import Button from '@mui/material/Button';
import { Link, useOutletContext } from "react-router-dom";
import axios from 'axios';

const Steps = () => {
    const { steps, setSteps } = useOutletContext();
    const [components, setComponents] = useState([]);

    const [activeStep, setActiveStep] = useState(0);
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
                const resp = await axios.post('http://localhost:8080/api/component', {
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

    return (
        <section className='section-steps'>
            <div>
                {steps ? steps.map((item, index) => {
                    // console.log(index);
                    return <SingleStep activeStep={activeStep} setActiveStep={setActiveStep} key={index} step={item} index={index} handleTextChange={handleTextChange} steps={steps} />
                }) : ''}

                <Button onClick={handleDataChange}>Add Step</Button>

                <div>
                    <Link to={"/protocols/materials"}>Materials</Link>
                </div>

                <Link className={'previewBtn'} to={"/protocols/preview"}>Preview</Link>
            </div>


            <div>
                <h3>Components</h3>
                <ul className={"buttons"}>
                    {components ? components.map((item, index) => {
                        return (
                            <li key={index}>
                                <button onClick={() => handleAddComponent(item, activeStep)}>{item.name}</button>
                            </li>
                        )
                    }) : ''}
                </ul>
            </div>

        </section>
    );
}

export default Steps;