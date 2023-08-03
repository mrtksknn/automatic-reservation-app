import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUsers,
  faChartBar,
  faFileAlt,
  faCog,
  faExclamationCircle,
  faListAlt
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => onMenuClick('Dashboard')}>
          <FontAwesomeIcon icon={faHome} className="icon" />
          Dashboard
        </li>
        <li onClick={() => onMenuClick('Users')}>
          <FontAwesomeIcon icon={faUsers} className="icon" />
          User Management
        </li>
        <li onClick={() => onMenuClick('UserDetails')}>
          <FontAwesomeIcon icon={faListAlt} className="icon" />
          User Details
        </li>
        <li onClick={() => onMenuClick('Statistics')}>
          <FontAwesomeIcon icon={faChartBar} className="icon" />
          Statistics
        </li>
        <li onClick={() => onMenuClick('Reports')}>
          <FontAwesomeIcon icon={faFileAlt} className="icon" />
          Reports
        </li>
        <li onClick={() => onMenuClick('Settings')}>
          <FontAwesomeIcon icon={faCog} className="icon" />
          Settings
        </li>
        <li onClick={() => onMenuClick('DailyNotifications')}>
          <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
          Daily Notifications
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;