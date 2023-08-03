import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toast stil dosyasını içe aktarıyoruz
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <Router>
      <ToastContainer theme="colored" />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
