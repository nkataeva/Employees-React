import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: '№', width: 70 },
    { field: 'first_name', headerName: 'Имя', width: 130 },
    { field: 'last_name', headerName: 'Фамилия', width: 130 },
    { field: 'email', headerName: 'Почта', sortable: false, type: 'number', width: 220 },
    { field: 'phone', headerName: 'Телефон', sortable: false, type: 'number', width: 140 },
    { field: 'account', headerName: 'Аккаунт', sortable: false, width: 270 },
    { field: 'group', headerName: 'Отдел', sortable: false, width: 140 }
];

const formattedData = (data) => {
    return (
        data.map(el => ({
            id: el.id,
            first_name: el.first_name,
            last_name: el.last_name,
            email: el.email,
            phone: el.phone,
            account: el.account,
            group: el.group
        }))
    )
}

const Table = (props) => {
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={formattedData(props.data)}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 50 },
                    },
                }}
                pageSizeOptions={[50, 100]}
                checkboxSelection
            />
        </div>
    )
}

export default Table;