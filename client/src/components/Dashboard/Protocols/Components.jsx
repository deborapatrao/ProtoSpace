import React from 'react';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import ScaleIcon from '@mui/icons-material/Scale';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import HubIcon from '@mui/icons-material/Hub';
import SpeedIcon from '@mui/icons-material/Speed';
import AddIcon from '@mui/icons-material/Add';

const Components = (props)=> {


    return <>
        <div className={"components-container"}>
            <div className="components">
                <h3>{props.title}</h3>
                <ul className={"buttons"}>
                    {props.component ? props.component.map((item, index) => {
                        return <li key={index}>
                            <div onClick={() => props.handleAddComponents(item, props.activeSteps)} className={`components-btn`}>
                                {(() => {
                                        if (item.name == "Length") {
                                            return (
                                                <SquareFootIcon/>
                                            )
                                        } else if (item.name == "volume") {
                                            return (
                                                <LocalDrinkIcon/>
                                            )
                                        } else if (item.name == "Mass") {
                                            return (
                                                <ScaleIcon/>
                                            )
                                        } else if (item.name == "Temperature") {
                                            return (
                                                <DeviceThermostatIcon/>
                                            )
                                        } else if (item.name == "Concentration") {
                                            return (
                                                <HubIcon/>
                                            )
                                        } else if (item.name == "Pressure") {
                                            return (
                                                <SpeedIcon/>
                                            )
                                        } else if (item.name == "Time") {
                                            return (
                                                <SquareFootIcon/>
                                            )
                                        } else if (item.name == "Others") {
                                            return (
                                                <AddIcon/>
                                            )
                                        }
                                    }
                                )()}
                                <button onClick={props.closeModal}>{item.name}</button>
                            </div>
                        </li>
                    }) : ''}
                </ul>
            </div>
        </div>
    </>
}

export default Components;
