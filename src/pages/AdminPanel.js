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

  return (
    <div className="admin-panel">
      <Topbar userName={currentUser ? currentUser.name : 'Guest'} onLogout={handleLogout} />
      <div className="content">
        <Sidebar onMenuClick={handleMenuClick} />
        <div className="main">
          {currentPage === 'Dashboard' && <Dashboard />}
          {currentPage === 'Users' && <Users />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;