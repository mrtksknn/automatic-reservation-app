import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import '../styles/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [roleCounts, setRoleCounts] = useState({});

  useEffect(() => {
    // Firestore'dan tüm kullanıcıları al
    const unsubscribe = firestore.collection('users').onSnapshot((snapshot) => {
      const userList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Rollerin sayısını hesaplamak için yardımcı fonksiyon
    const calculateRoleCounts = () => {
      const counts = users.reduce((counts, user) => {
        counts[user.role] = (counts[user.role] || 0) + 1;
        return counts;
      }, {});

      return counts;
    };

    setRoleCounts(calculateRoleCounts());
  }, [users]);

  return (
    <div className="Users">
      <div className="widgets">
        {Object.keys(roleCounts).map((role) => (
          <div className="widget" key={role}>
            <h3>{role} ({roleCounts[role]})</h3>
            <p>
              {((roleCounts[role] / users.length) * 100).toFixed(0)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;