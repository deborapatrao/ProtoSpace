import React from 'react'
import {Link} from "react-router-dom";

const List = props => {
    return <>
    <div className="list-container">
        <div className='left-list'>
            <ul>
                <li><Link to={"/about-us"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/security"}>Security</Link></li>
                <li><Link to={"/help"}>Help</Link></li>
                <li><Link to={"/faq"}>FAQ</Link></li>
                <li><Link to={"/demo"}>Book a Demo</Link></li>
            </ul>
        </div>
    </div>
    </>
}

export default List;