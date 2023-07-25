import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import PeopleTable from '../components/PeopleTable';


const Users = () => {
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
    <PeopleTable users={users} />
  );
};

export default Users;