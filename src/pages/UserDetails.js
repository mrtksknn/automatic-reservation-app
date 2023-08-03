import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import '../styles/UserDetails.css';
import PeopleTable from '../components/PeopleTable';


const UserDetails = () => {
  const [users, setUsers] = useState([]);

  // Firestore'dan tüm kullanıcıları al
  useEffect(() => {
    const unsubscribe = firestore.collection('users').onSnapshot((snapshot) => {
      const userList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <h3>User List</h3>
      <PeopleTable data={users} />
    </>
  );
};

export default UserDetails;