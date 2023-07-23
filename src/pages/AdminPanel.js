import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Dashboard from './Dashboard';
import Users from './Users';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <Routes>
          <Route exact path="/admin" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;