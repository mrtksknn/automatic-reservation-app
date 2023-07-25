import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { setUser } from '../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Topbar = ({ userName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dropdown menüyü açmak veya kapatmak için bir fonksiyon oluşturun
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Çıkış yap butonuna tıklandığında
  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(setUser(null));
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="topbar">
      <p>Welcome, {userName}</p>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={handleDropdownToggle}>
          <FontAwesomeIcon icon={isDropdownOpen ? faCaretUp : faCaretDown} />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;