import React, {useState} from 'react';
import SingleStep from "./SingleStep";
import Button from '@mui/material/Button';
import {Link, useOutletContext} from "react-router-dom";

const Steps = () => {
    const { steps, setSteps } = useOutletContext();

    const handleDataChange = () => {
        let newArr = [...steps, { id: steps.length + 1, name: `step${steps.length + 1}`, text: '' }];

        setSteps(newArr)

    }

    const handleTextChange = (txt, index) => {
        let newArr = [...steps];

        newArr[index].text = txt;

        setSteps(newArr)

        // console.log(newArr);
    }

    return (
        <section>
            {steps ? steps.map((item, index) => {
                return <SingleStep key={index} step={item} index={index} handleTextChange={handleTextChange} steps={steps} />
            }) : ''}

            <div>
                <h3>Components</h3>
                <ul className={"buttons"}>
                    <li><button>Volume</button></li>
                    <li><button>Mass</button></li>
                </ul>
            </div>
            <Button onClick={handleDataChange}>Add Step</Button>
            <div>
                <Link to={"/protocols/materials"}>Materials</Link>
            </div>

            <Link className={'previewBtn'} to={"/protocols/preview"}>Preview</Link>
        </section>
    );
}

export default Steps;