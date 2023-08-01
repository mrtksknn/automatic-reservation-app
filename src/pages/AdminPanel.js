import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { setUser } from '../actions/userActions';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Users from '../pages/Users';
import Dashboard from '../pages/Dashboard';
import '../styles/AdminPanel.css';
import UserDetails from './UserDetails';
import Reports from './Reports';
import DailyNotifications from './DailyNotifications';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const currentUser = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  // Çıkış yap butonuna tıklandığında
  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(setUser(null));
      history('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const today = new Date();
  const users = [
    'Michael Johnson',
    'Emily Wilson',
    'Jane Smith',
    'William Jones',
    'Mert Keskin',
    'Olivia Brown',
    'John Doe',
  ];

  const fakeData = [];
  for (let i = 10; i >= 1; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const randomUserIndex = Math.floor(Math.random() * users.length);
    const randomActivity = Math.random() < 0.5 ? 'Login' : 'Logout';
    fakeData.push({
      user: users[randomUserIndex],
      activity: randomActivity,
      date: formatDate(date),
      duration: Math.floor(Math.random() * 60) + 30, // 30 ile 90 dakika arasında rastgele süre
      login: Math.floor(Math.random() * 50) + 50,
      logout: Math.floor(Math.random() * 50) + 50,
    });
  }

  // Tarihi "yyyy-MM-dd" formatına dönüştüren yardımcı bir fonksiyon
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="admin-panel">
      <Topbar userName={currentUser ? currentUser.name : 'Guest'} onLogout={handleLogout} />
      <div className="content">
        <Sidebar onMenuClick={handleMenuClick} />
        <div className="main">
          {currentPage === 'Dashboard' && <Dashboard />}
          {currentPage === 'Users' && <Users />}
          {currentPage === 'UserDetails' && <UserDetails />}
          {currentPage === 'Reports' && <Reports reportData={fakeData} />}
          {currentPage === 'DailyNotifications' && <DailyNotifications />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;