import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HOST_URL } from '../../../data/data';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';



const SingleComponent = ({ component, activeStep, componentIndex, steps, setSteps }) => {
    const [units, setUnits] = useState([]);
    console.log(component);

    useEffect(() => {
        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                component_id: component.component_id
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/component/unit`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                // console.log(resp.data);
                // console.log(component);

                setUnits(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])


    const handleDataChange = (e) => {
        const stepNum = activeStep;

        let newSteps = [...steps];

        const currentComponent = newSteps[stepNum].components[componentIndex];

        if (e.target.name == 'component_information' || e.target.name == 'component_name') {
            currentComponent[e.target.name] = e.target.value;
        } else {
            currentComponent[e.target.name] = Number(e.target.value);
        }

        console.log(newSteps);

        setSteps(newSteps)
    }

    return (
        <div className='single-component__container'>
            <div className="single-component">
                <label htmlFor='value'>Name: </label>
                <TextField
                    id="value"
                    type="text"
                    variant="standard"
                    name='component_name'
                    value={component.component_name}
                    onChange={(e) => handleDataChange(e)}
                />
            </div>


            <div className="single-component__value">
                <div className='single-component'>
                    <label htmlFor='value'>Value: </label>
                    <TextField
                        id="value"
                        type="number"
                        variant="standard"
                        name='component_value'
                        value={component.component_value}
                        onChange={(e) => handleDataChange(e)}
                    />
                </div>
                <div className='single-component'>
                    <label htmlFor='unit'>Unit: </label>
                    <NativeSelect
                        defaultValue={component.unit_id != null ? component.unit_id : ''}
                        inputProps={{
                            name: 'unit_id',
                            id: 'unit',
                        }}
                        onChange={(e) => handleDataChange(e)}
                    >
                        <option value={''} disabled hidden></option>
                        {units && units.length > 0 ? units.map((item, index) => {
                            // console.log(item.id);
                            return <option key={index} value={item.id}>{item.name}</option>
                        }) : ''}
                    </NativeSelect>
                </div>
            </div>

            <div className='single-component'>
                <label htmlFor='info' className=''>Additional info: </label>
                <TextField
                    id="info"
                    variant="standard"
                    name='component_information'
                    value={component.component_information}
                    onChange={(e) => handleDataChange(e)}
                />

            </div>

            {/* <button onClick={handleDataChange}>check</button> */}
        </div>
    );
}

export default SingleComponent;
