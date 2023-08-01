import React from 'react';
import UserDetails from './UserDetails'; // Kullanıcı yönetimi sayfası
import Users from '../pages/Users'; // Ürün yönetimi sayfası
import Reports from '../pages/Reports'; // Raporlar sayfası
import DailyNotifications from '../pages/DailyNotifications'; // Bildirimler sayfası

const Dashboard = () => {
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
    <div className="dashboard-content">
      <div className="dashboard-body">
        <div className="main-content">
          <Users />
          <UserDetails />
          <Reports reportData={fakeData} />
          <DailyNotifications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;