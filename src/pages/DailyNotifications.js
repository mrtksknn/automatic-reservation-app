import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { firestore } from '../firebase';

const DailyNotifications = () => {
  const [notificationData, setNotificationData] = useState([]);

  useEffect(() => {
    // Firestore'dan verileri al
    const unsubscribe = firestore.collection('events').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setNotificationData(data);
    });

    return () => unsubscribe();
  }, []);

  const columns = [
    {
      name: 'User',
      selector: 'userName', // Değişiklik: Kullanıcının adını burada göstereceğiz
      sortable: true,
    },
    {
      name: 'Action',
      selector: 'eventType', // Değişiklik: Yapılan işlemi burada göstereceğiz
      sortable: true,
    },
    {
      name: 'Date',
      selector: 'timestamp',
      format: (row) => {
        const date = new Date(row.timestamp);
        return `${date.toLocaleDateString()}`;
      }, // Değişiklik: Tarih ve saati burada göstereceğiz
      sortable: true,
    },
    {
      name: 'Hour',
      selector: 'hour',
      format: (row) => {
        const date = new Date(row.timestamp);
        return `${date.toLocaleTimeString()}`;
      }
    }
  ];

  const customStyles = {
    tableHeadRow: {
      style: {
        borderRadius: '6px'
      }
    },
    headCells: {
      style: {
        backgroundColor: '#007bff',
        color: '#fff',
      },
    },
    cells: {
      style: {
        fontSize: '14px',
      },
    },
    pagination: {
      style: {
        borderRadius: '0 0 6px 6px',
        backgroundColor: '#fff',
      },
    },
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'Items per page',
    rowsPerPage: 5,
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
  };

  return (
    <div>
      <h2>Daily Notifications</h2>
      <DataTable
        columns={columns}
        data={notificationData}
        pagination
        responsive={true}
        customStyles={customStyles}
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
};

export default DailyNotifications;
