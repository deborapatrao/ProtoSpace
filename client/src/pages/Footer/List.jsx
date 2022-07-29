import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const List = props => {

    let navigate = useNavigate();

    return <>
        <div className="footer__container">
            <div className="list-container">
                <div className='left-list'>
                    <ul>
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/about-us"}>About Us</Link></li>
                        <li><Link to={"/contact"}>Contact Us</Link></li>
                        <li><Link to={"/demo"}>Get a Demo</Link></li>
                    </ul>
                </div>
                <div className='right-list'>
                    <ul>
                        <li><Link to={"/"}>Security</Link></li>
                        <li><Link to={"/"}>Privacy Policy</Link></li>
                        <li><Link to={"/"}>Help</Link></li>
                        <li><Link to={"/"}>FAQ</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer__demo">
                <p>Let's make your protocol management more effective than ever!</p>
                <Button variant='contained' sx={{
                    backgroundColor: '#065187',
                    marginTop: '1rem'
                }} onClick={() => navigate("/demo", { replace: true })}>Book a Demo</Button>
            </div>
        </div>
    </>
}

export default List;