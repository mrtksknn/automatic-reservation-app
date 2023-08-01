import React from 'react';
import DataTable from 'react-data-table-component';

const PeopleTable = ({ users }) => {
  const columns = [
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
    },
  ];

  const customStyles = {
    tableHeadRow: {
      style: {
        borderRadius: '6px'
      }
    },
    headCells: {
      style: {
        backgroundColor: 'red',
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
    <DataTable
      columns={columns}
      data={users}
      pagination
      responsive={true}
      customStyles={customStyles}
      paginationRowsPerPageOptions={paginationOptions}
      paginationComponentOptions={paginationComponentOptions}
    />
  )
};
  
export default PeopleTable;
