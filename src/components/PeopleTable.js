import React from 'react';
import DataTable from 'react-data-table-component';
import '../styles/PeopleTable.css';

const PeopleTable = ({ data, activity }) => {
  const users = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Role',
      selector: 'role',
      sortable: true,
    }
  ];

  const reports = [
    {
      name: 'User',
      selector: 'user',
      sortable: true,
    },
    {
      name: 'Activity',
      selector: 'activity',
      sortable: true,
    },
    {
      name: 'Date',
      selector: 'date',
      sortable: true,
    },
    {
      name: 'Duration (min)',
      selector: 'duration',
      sortable: true,
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
        color: '#fff',
        backgroundColor: '#3498db',
      },
    },
    cells: {
      style: {
        fontSize: '16px',
      },
    },
    pagination: {
      style: {
        borderRadius: '0 0 6px 6px',
        backgroundColor: '#fff', // Sayfalama düğmelerinin arka plan rengi
      },
    },
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'Items per page',
    rowsPerPage: 5,
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All'
};
  
  const  paginationOptions = [5, 10, 20];

  return (
    <div className='peopleTable'>
      <DataTable
        columns={activity ? reports : users}
        data={data}
        pagination
        responsive={true}
        customStyles={customStyles}
        paginationRowsPerPageOptions={paginationOptions}
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  )
};
  
export default PeopleTable;
