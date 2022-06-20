import React, {useState} from 'react';
import SingleStep from "./SingleStep";
import Button from '@mui/material/Button';

const Steps = () => {
    const [steps, setSteps] = useState([{ id: 1, name: 'step1', text: '' }]);

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
        <div>
            {steps ? steps.map((item, index) => {
                return <SingleStep key={index} step={item} index={index} handleTextChange={handleTextChange} />
            }) : ''}
            <Button onClick={handleDataChange}>Add Step</Button>
        </div>
    );
}

export default Steps;