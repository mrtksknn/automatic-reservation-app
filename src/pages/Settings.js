import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings = () => {
  const [notification, setNotification] = useState(true);
  const [theme, setTheme] = useState('light');

  const handleNotificationChange = (e) => {
    setNotification(e.target.checked);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <h3>Settings</h3>
      <div className="settings-container">
      <div className="setting-item">
        <label htmlFor="notification">Enable Notifications:</label>
        <input
          type="checkbox"
          id="notification"
          checked={notification}
          onChange={handleNotificationChange}
        />
      </div>
      <div className="setting-item">
        <label htmlFor="theme">Select Theme:</label>
        <select id="theme" value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
    </div>
    </>
  );
};

export default Settings;