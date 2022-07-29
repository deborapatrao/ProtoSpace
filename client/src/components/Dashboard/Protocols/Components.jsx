import React from 'react';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';
// import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
// import ScaleIcon from '@mui/icons-material/Scale';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
// import HubIcon from '@mui/icons-material/Hub';
// import SpeedIcon from '@mui/icons-material/Speed';
// import AddIcon from '@mui/icons-material/Add';

import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Volume} from '../../../assets/volume-icon.svg';
import { ReactComponent as Mass} from '../../../assets/mass-icon.svg';
import { ReactComponent as Length} from '../../../assets/length-icon.svg';
import { ReactComponent as Time} from '../../../assets/time-icon.svg';
import { ReactComponent as Temperature} from '../../../assets/temperature-icon.svg';
import { ReactComponent as Concentration} from '../../../assets/concentration-icon.svg';
import { ReactComponent as Pressure} from '../../../assets/pressure-icon.svg';
import { ReactComponent as Others} from '../../../assets/others-icon.svg';



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
                                                <Length />
                                            )
                                        } else if (item.name == "volume") {
                                            return (
                                                <Volume />
                                            )
                                        } else if (item.name == "Mass") {
                                            return (
                                                <Mass />
                                            )
                                        } else if (item.name == "Temperature") {
                                            return (
                                                <Temperature/>
                                            )
                                        } else if (item.name == "Concentration") {
                                            return (
                                                <Concentration />
                                            )
                                        } else if (item.name == "Pressure") {
                                            return (
                                                <Pressure />
                                            )
                                        } else if (item.name == "Time") {
                                            return (
                                                <Time />
                                            )
                                        } else if (item.name == "Others") {
                                            return (
                                                <Others />
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
