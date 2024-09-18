import React from 'react';
import { FaSearch, FaBell, FaCommentAlt, FaCaretDown } from 'react-icons/fa'; // Importing required icons
import '../Styles.css';

const Header = () => {
    return (
        <header className="header ">

            <div className="search-container ">
                <input type="text" placeholder="Search Employee" />
            </div>
            <div className='header-user-profile'>
            <FaBell />
            <FaCommentAlt />
            <span>Mahendran</span>
            <FaCaretDown className="caret-icon" />
            </div>
        </header>
    );
};

export default Header;
