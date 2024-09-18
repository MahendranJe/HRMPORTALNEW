import React from 'react';
import '../Styles.css';
import userProfile from '../Images/userProfile.png'
function Birthdays() {
    return (
        <div className="birthdays">
            <h2>Birthday Calendar</h2>
            <div className='displayflex'>
                <div className="birthday1">
                    <img src={userProfile}></img>
                    <p>Robert Whistable</p>
                    <p className="role">Product Manager</p>
                    <p className="date">15 Feb 1998</p>
                </div>
                <div className="birthday1">
                    <img src={userProfile}></img>
                    <p>John Doe</p>
                    <p className="role">Software Engineer</p>
                    <p className="date">12 Mar 1992</p>
                </div>
            </div>
        </div>
    );
}

export default Birthdays;
