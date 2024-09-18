import React , {useState}from 'react';
import './Header.css';
import SideNav from './Sidenavpannel';
import Profile from '../Images/Profile.png'
import { FaBars, FaBell, FaComment ,FaChevronDown } from 'react-icons/fa';

const HrmHeader = () => {

  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };
  return (
    <div className="header">
      <div className="header-left">
        <FaBars className="header-icon header-icon-dis" onClick={toggleSidePanel} />       
      </div>
      
      <div className="header-right">
        <div className="header-icon notification">
          <FaBell />
          <span className="notification-badge"></span>          
        </div>
        <FaComment className="header-icon" />
        <div className="profile-section">
                <img src={Profile} alt="Your Logo" className="profile-image" />
          <FaChevronDown  className="dropdown-icon" />
        </div>
        {isSidePanelOpen && <div className="overlay" onClick={toggleSidePanel}> </div> }
      </div>
    </div>
  );
};

export default HrmHeader;
