import { useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomDataGrid } from '../../shared-ui-components/CustomDataGrid';

const columns = [
    { field: 'id', headerName: 'ID', minWidth: 150, pinnable: true },
    { field: 'icon', headerName: 'Icon', minWidth: 150 },
    { field: 'serviceName', headerName: 'Service Name', minWidth: 150 },
    { field: 'category', headerName: 'Category', minWidth: 150 },
    { field: 'subCategory', headerName: 'Sub Category', minWidth: 150 },
    { field: 'serviceTime', headerName: 'Service Time', minWidth: 150 },
    { field: 'createdAt', headerName: 'Created At', minWidth: 150 },
    { field: 'price', headerName: 'Price', minWidth: 150 },
    { field: 'status', headerName: 'Status', minWidth: 150 }
];

const rows = [
    {
        id: 1,
        icon: 'icon', // Replace with your actual icon component
        serviceName: 'Service 1',
        category: 'Category 1',
        subCategory: 'Sub Category 1',
        serviceTime: 'Time 1',
        createdAt: '2022-01-01',
        price: '$100',
        status: 'Pending'
    },
    {
        id: 2,
        icon: 'icon', // Replace with your actual icon component
        serviceName: 'Service 2',
        category: 'Category 2',
        subCategory: 'Sub Category 2',
        serviceTime: 'Time 2',
        createdAt: '2022-01-02',
        price: '$150',
        status: 'Complete'
    },
    {
        id: 3,
        icon: 'icon', // Replace with your actual icon component
        serviceName: 'Service 3',
        category: 'Category 3',
        subCategory: 'Sub Category 3',
        serviceTime: 'Time 3',
        createdAt: '2022-01-03',
        price: '$200',
        status: 'Accept'
    },
    {
        id: 4,
        icon: 'icon', // Replace with your actual icon component
        serviceName: 'Service 4',
        category: 'Category 4',
        subCategory: 'Sub Category 4',
        serviceTime: 'Time 4',
        createdAt: '2022-01-04',
        price: '$250',
        status: 'Canceled'
    },
    {
        id: 5,
        icon: 'icon', // Replace with your actual icon component
        serviceName: 'Service 5',
        category: 'Category 5',
        subCategory: 'Sub Category 5',
        serviceTime: 'Time 5',
        createdAt: '2022-01-05',
        price: '$300',
        status: 'Complete'
    }
];


export default function Service() {
    const [page, setPage] = useState(1);
    console.log("🚀 ~ Appointment ~ page:", page)
    const [rowsPerPage, setRowsPerPage] = useState(10);
    console.log("🚀 ~ Appointment ~ rowsPerPage:", rowsPerPage)
    // ===============================|| USE THEME  ||========================================== //
    const theme = useTheme();
    // ===============================|| MEDIA QUERY  ||========================================== //
    const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
    // ===============================|| hook form   ||========================================== //
    const { handleSubmit, reset, control } = useForm();
    const handleRowClick = (params) => { };
    const handleCellClick = (param, event) => { };
    return (
        <>
            <CustomDataGrid
                columns={columns}
                rows={rows}
                count={rows.length}
                page={page - 1}
                // loading={isLoading}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                handleRowClick={handleRowClick}
                handleCellClick={handleCellClick}
                setPage={setPage}
                rightPinning={!matchDownMd ? ["action"] : []}
                sx={{ height: 400, width: '80%' }}
            />
        </>
    );
}