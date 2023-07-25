import React from 'react'

const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => onMenuClick('Dashboard')}>Dashboard</li>
        <li onClick={() => onMenuClick('Users')}>Users</li>
        {/* Diğer sayfa linklerini burada ekleyebilirsiniz */}
      </ul>
    </div>
  );
};

export default Sidebar