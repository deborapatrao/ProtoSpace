import "./home.scss";
import React from 'react';
import hero from './hero-image.png'
import Button from '@mui/material/Button';


const Demo = () => {

    return (
        <section className={"demo-container"}>

            <div className={"demo-description"}>
                <h2>Accelerate laboratory learning platform in one place</h2>
                <p>Our protocol-sharing platform helps institutions accelerate laboratory work with method development for all research disciplines, documented step-by-step experiments, and progress tools – all in one place.</p>
                <Button variant='contained' className="demo-btn-body">Book a Demo</Button>
            </div>
            <div className={"demo-hero"}>
                <img src={hero} alt='Protospace dashboard' />
            </div>
        </section>
    );
}

export default Demo;