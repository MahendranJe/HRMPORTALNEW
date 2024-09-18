import React, { useState } from 'react';
import {FaEllipsisH } from 'react-icons/fa';
import '../Styles.css';
function Announcements() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="announcements">
      <h2>Announcement</h2>
      <div>
      <ul className={showMore ? 'expanded' : ''}>
        <li>Outing schedule for every department <FaEllipsisH className='margin-left'/></li> 
        <li>Outing schedule for every department <FaEllipsisH className='margin-left'/> </li>
        <li>Outing schedule for every department <FaEllipsisH className='margin-left'/></li>
      </ul>
      
      </div>
      <a href="#!" onClick={toggleShowMore} >
        {showMore ? 'Show Less' : 'See All Announcement'}
      </a>
    </div>
  );
}

export default Announcements;
