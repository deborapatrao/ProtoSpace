import React from 'react'

const List = props => {
    return <>
    <div className="list-container">
        <div className='left-list'>
            <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Get a demo</a></li>
            </ul>
        </div>
        <div className='right-list'>
            <ul>
            <li><a href="">Security</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">FAQ</a></li>
            </ul>
        </div>
    </div>
    </>
}

export default List;