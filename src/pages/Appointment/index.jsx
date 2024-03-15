import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { CustomDataGrid } from '../../shared-ui-components/CustomDataGrid';
const Appointment = () => {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    // ===============================|| USE THEME  ||========================================== //
    const theme = useTheme();
    // ===============================|| MEDIA QUERY  ||========================================== //
    const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

    // =================================|| MUI DATA GRID COLUMNS ||=============================== //
    // const columns = [
    //     {
    //         field: "Username",
    //         minWidth: 150,
    //         description: "user name",
    //         renderHeader: () => <strong>Username</strong>,
    //         flex: 1,
    //         // valueGetter: ({ row }: { row: IRowProps }) => row?.username,
    //     },
    //     {
    //         field: "email",
    //         renderHeader: () => <strong>Email</strong>,
    //         minWidth: 150,
    //         flex: 1,
    //         // valueGetter: ({ row }: { row: IRowProps }) => row?.email,
    //     },

    //     {
    //         field: "contact",
    //         renderHeader: () => <strong>Contact</strong>,
    //         minWidth: 150,
    //         flex: 1,
    //         // valueGetter: ({ row }: { row: IRowProps }) => row?.contact_number,
    //     },
    //     {
    //         field: "role",
    //         renderHeader: () => <strong>Role</strong>,
    //         minWidth: 150,
    //         flex: 1,
    //         // valueGetter: ({ row }: { row: IRowProps }) => {
    //         //     if (row?.role) {
    //         //         return row.role.name;
    //         //     }
    //         //     return "";
    //         // },
    //     },
    //     {
    //         field: "action",
    //         type: "actions",
    //         headerName: "Action",
    //         renderHeader: () => <strong>Actions</strong>,
    //         minWidth: 130,
    //         getActions: ({ row }) => {
    //             return [
    //                 <Tooltip title="Edit" placement="top">
    //                     <IconButton
    //                         sx={{
    //                             marginRight: "10px",
    //                             background: "#1E88E5",
    //                             color: "#F4F5FA",
    //                             "&:hover": {
    //                                 transition: "background .5s, color .5s",
    //                                 background: theme.palette.secondary.light,
    //                                 color: "#1E88E5",
    //                             },
    //                         }}
    //                         onClick={() => handleEditModal(row?.id)}
    //                     >
    //                         {/* <EditIcon /> */}
    //                     </IconButton>
    //                 </Tooltip>,

    //                 <Tooltip title="Delete" placement="top">
    //                     <IconButton
    //                         sx={{
    //                             background: "#e53935",
    //                             color: "#F4F5FA",
    //                             "&:hover": {
    //                                 transition: "background .5s, color .5s",
    //                                 background: theme.palette.secondary.light,
    //                                 color: "#F44336",
    //                             },
    //                         }}
    //                         onClick={() => {
    //                             // setDeleteId(row?.id);
    //                             openDeleteModal();
    //                         }}
    //                     >
    //                         {/* <DeleteIcon /> */}
    //                     </IconButton>
    //                 </Tooltip>,
    //             ];
    //         },
    //     },
    // ];
    // const rows = [
    //     { id: 1, Username: "user1", email: "user1@example.com", contact: "1234567890", role: "Admin" },
    //     { id: 2, Username: "user2", email: "user2@example.com", contact: "9876543210", role: "User" },
    //     { id: 3, Username: "user3", email: "user3@example.com", contact: "5555555555", role: "Admin" },
    //     { id: 4, Username: "user4", email: "user4@example.com", contact: "1111111111", role: "User" },
    //     { id: 5, Username: "user5", email: "user5@example.com", contact: "2222222222", role: "Admin" },
    //     { id: 6, Username: "user6", email: "user6@example.com", contact: "3333333333", role: "User" },
    //     { id: 7, Username: "user7", email: "user7@example.com", contact: "4444444444", role: "Admin" },
    //     { id: 8, Username: "user8", email: "user8@example.com", contact: "5555555555", role: "User" },
    //     { id: 9, Username: "user9", email: "user9@example.com", contact: "6666666666", role: "Admin" },
    //     { id: 10, Username: "user10", email: "user10@example.com", contact: "7777777777", role: "User" },
    //     // { id: 11, Username: "user11", email: "user11@example.com", contact: "8888888888", role: "Admin" },
    //     // { id: 12, Username: "user12", email: "user12@example.com", contact: "9999999999", role: "User" },
    //     // { id: 13, Username: "user13", email: "user13@example.com", contact: "0000000000", role: "Admin" },
    //     // { id: 14, Username: "user14", email: "user14@example.com", contact: "1111111111", role: "User" },
    //     // { id: 15, Username: "user15", email: "user15@example.com", contact: "2222222222", role: "Admin" },
    //     // { id: 16, Username: "user16", email: "user16@example.com", contact: "3333333333", role: "User" },
    //     // { id: 17, Username: "user17", email: "user17@example.com", contact: "4444444444", role: "Admin" },
    //     // { id: 18, Username: "user18", email: "user18@example.com", contact: "5555555555", role: "User" },
    //     // { id: 19, Username: "user19", email: "user19@example.com", contact: "6666666666", role: "Admin" },
    //     // { id: 20, Username: "user20", email: "user20@example.com", contact: "7777777777", role: "User" },
    //     // // Add more rows as needed
    // ];


    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 100 },
        { field: 'customerInfo', headerName: 'Customer Information', minWidth: 200 },
        { field: 'totalAppointment', headerName: 'Total Appointment', minWidth: 150 },
        { field: 'homeService', headerName: 'Home Service', minWidth: 150 },
        { field: 'status', headerName: 'Status', minWidth: 150 },
        { field: 'createdAt', headerName: 'Created At', minWidth: 200 },
        { field: 'appointmentDate', headerName: 'Appointment Date', minWidth: 200 },
        { field: 'totalAmount', headerName: 'Total Amount', minWidth: 150 },
        { field: 'paymentMethod', headerName: 'Payment Method', minWidth: 200 },
        {
            field: 'action', headerName: 'Actions', minWidth: 150, type: 'actions', getActions: ({ row }) => [
                <IconButton onClick={() => handleEdit(row.id)}>Edit</IconButton>,
                <IconButton onClick={() => handleDelete(row.id)}>Delete</IconButton>
            ]
        }
    ];
    const rows = [
        {
            id: 1,
            customerInfo: "Customer 1",
            totalAppointment: 3,
            homeService: "Yes",
            status: "Active",
            createdAt: "2022-01-01",
            appointmentDate: "2022-01-05",
            totalAmount: "$100",
            paymentMethod: "Card"
        },
        {
            id: 2,
            customerInfo: "Customer 2",
            totalAppointment: 2,
            homeService: "No",
            status: "Inactive",
            createdAt: "2022-01-02",
            appointmentDate: "2022-01-06",
            totalAmount: "$150",
            paymentMethod: "Cash"
        },
        {
            id: 3,
            customerInfo: "Customer 3",
            totalAppointment: 1,
            homeService: "Yes",
            status: "Active",
            createdAt: "2022-01-03",
            appointmentDate: "2022-01-07",
            totalAmount: "$200",
            paymentMethod: "Card"
        },
        {
            id: 4,
            customerInfo: "Customer 4",
            totalAppointment: 4,
            homeService: "No",
            status: "Inactive",
            createdAt: "2022-01-04",
            appointmentDate: "2022-01-08",
            totalAmount: "$250",
            paymentMethod: "Cash"
        },
        {
            id: 5,
            customerInfo: "Customer 5",
            totalAppointment: 2,
            homeService: "Yes",
            status: "Active",
            createdAt: "2022-01-05",
            appointmentDate: "2022-01-09",
            totalAmount: "$300",
            paymentMethod: "Card"
        },
        {
            id: 6,
            customerInfo: "Customer 6",
            totalAppointment: 3,
            homeService: "No",
            status: "Inactive",
            createdAt: "2022-01-06",
            appointmentDate: "2022-01-10",
            totalAmount: "$350",
            paymentMethod: "Cash"
        },
        {
            id: 7,
            customerInfo: "Customer 7",
            totalAppointment: 1,
            homeService: "Yes",
            status: "Active",
            createdAt: "2022-01-07",
            appointmentDate: "2022-01-11",
            totalAmount: "$400",
            paymentMethod: "Card"
        },
        {
            id: 8,
            customerInfo: "Customer 8",
            totalAppointment: 2,
            homeService: "No",
            status: "Inactive",
            createdAt: "2022-01-08",
            appointmentDate: "2022-01-12",
            totalAmount: "$450",
            paymentMethod: "Cash"
        },
        {
            id: 9,
            customerInfo: "Customer 9",
            totalAppointment: 3,
            homeService: "Yes",
            status: "Active",
            createdAt: "2022-01-09",
            appointmentDate: "2022-01-13",
            totalAmount: "$500",
            paymentMethod: "Card"
        },
        {
            id: 10,
            customerInfo: "Customer 10",
            totalAppointment: 4,
            homeService: "No",
            status: "Inactive",
            createdAt: "2022-01-10",
            appointmentDate: "2022-01-14",
            totalAmount: "$550",
            paymentMethod: "Cash"
        }
    ];



    return (
        // <Box sx={{ height: 400, width: '80%' }}>
        <CustomDataGrid
            columns={columns}
            rows={rows}
            count={10}
            page={page - 1}
            // loading={isLoading}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            setPage={setPage}
            rightPinning={!matchDownMd ? ["action"] : []}
            sx={{ height: 400, width: '80%' }}
        />
        // </Box>
    );
};

export default Appointment;


