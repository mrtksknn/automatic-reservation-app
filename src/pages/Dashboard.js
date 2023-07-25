import React from 'react';
import Users from './Users';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Dummy veriler
  const data = [
    { id: 1, title: 'Widget 1', value: 100 },
    { id: 2, title: 'Widget 2', value: 75 },
    { id: 3, title: 'Widget 3', value: 50 },
    { id: 4, title: 'Widget 4', value: 25 },
  ];

  return (
    <div className="dashboard">
      <div className="widgets">
        {data.map((item) => (
          <div className="widget" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.value}%</p>
          </div>
        ))}
      </div>
      <div className='usersTable'>
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;