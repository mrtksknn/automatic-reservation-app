import React from 'react';
import UserDetails from './UserDetails'; // Kullanıcı yönetimi sayfası
import Users from '../pages/Users'; // Ürün yönetimi sayfası
import Reports from '../pages/Reports'; // Raporlar sayfası
import Settings from '../pages/Settings'; // Ayarlar sayfası
import DailyNotifications from '../pages/DailyNotifications'; // Bildirimler sayfası

const Dashboard = () => {
  // Sadece örnek veri, gerçek verilerle değiştirilmelidir
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'user' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
    // ... Diğer kullanıcılar ...
  ];

  return (
    <div className="dashboard-content">
      <div className="dashboard-body">
        <div className="main-content">
          <Users />
          <UserDetails users={users} />
          <Reports />
          <Settings />
          <DailyNotifications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;