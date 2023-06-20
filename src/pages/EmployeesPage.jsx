import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '№', width: 70 },
  { field: 'first_name', headerName: 'Имя', width: 130 },
  { field: 'last_name', headerName: 'Фамилия', width: 130 },
  { field: 'email', headerName: 'Почта', sortable: false, type: 'number', width: 90 },
  { field: 'phone', headerName: 'Телефон', sortable: false, type: 'number', width: 90 },
  { field: 'account', headerName: 'Аккаунт', sortable: false, width: 160 },
  { field: 'group', headerName: 'Отдел', sortable: false, width: 90 }
];

async function getData() {
  const request = await fetch(`http://localhost:3001/data`);
  const response = await request.json();
  return response.data;
}

export default function EmployeesPage() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRows() {
      try {
        const data = await getData();
        const formattedRows = data.map(el => ({
          id: el.id,
          first_name: el.first_name,
          last_name: el.last_name,
          email: el.email,
          phone: el.phone,
          account: el.account,
          group: el.group
        }));

        setRows(formattedRows);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRows();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 50 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
