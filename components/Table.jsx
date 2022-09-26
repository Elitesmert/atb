import { Typography, Box } from '@mui/material'

import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const Table = () => {
    return (
        <Box
            sx={{
                height: 300,
                width: '100%',
            }}>
            <Typography
                variant='h4'
                component="h4"
                sx={{ textAlign: "center", mt: 3, mb: 3 }}>
                Users
            </Typography>
            <DataGrid
                rows={[
                    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
                    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
                    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
                    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
                    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
                    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
                    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
                    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
                    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
                ]}
                columns={[
                    { field: 'id', headerName: 'ID', width: 70 },
                    {
                        field: 'firstName',
                        headerName: 'First name',
                        width: 130,
                        editable: true,
                    },
                    {
                        field: 'lastName',
                        headerName: 'Last name',
                        width: 130,
                        editable: true,
                    },
                    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
                ]}
                pageSize={5}
                rowsPerPageOptions={[5]}

            />



        </Box>
    )
}

export default Table