import { useMediaQuery, useTheme } from '@mui/material';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomActions from '../../components/CustomActions';
import DateRangePicker from '../../components/antd/dateRangePicker';
import CustomSelect from '../../components/antd/select';
import { CustomDataGrid } from '../../shared-ui-components/CustomDataGrid';
const Appointment = () => {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    // ===============================|| USE THEME  ||========================================== //
    const theme = useTheme();
    // ===============================|| MEDIA QUERY  ||========================================== //
    const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
    // ===============================|| hook form   ||========================================== //
    const { handleSubmit, reset, control } = useForm();
    const onSubmit = (e) => { }
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
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 150,
            type: 'actions',
            getActions: ({ row }) => (
                [<CustomActions row={row} />]
            )
        },
        { field: 'createdAt', headerName: 'Created At', minWidth: 200 },
        { field: 'appointmentDate', headerName: 'Appointment Date', minWidth: 200 },
        { field: 'totalAmount', headerName: 'Total Amount', minWidth: 150 },
        { field: 'paymentMethod', headerName: 'Payment Method', minWidth: 200 },
        {
            field: 'action', headerName: 'Actions', minWidth: 150, type: 'actions', getActions: ({ row }) =>
                [
                    // <IconButton onClick={() => handleEdit(row.id)}>Edit</IconButton>,
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12C5 12 7.545 7 12 7C16.454 7 19 12 19 12C19 12 16.454 17 12 17C7.545 17 5 12 5 12Z" stroke="#121120" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17M21 7V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V7M12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13Z" stroke="#121120" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                ]
        }
    ];
    const rows = [
        {
            id: 1,
            customerInfo: "Customer 1",
            totalAppointment: 3,
            homeService: "Yes",
            status: "Pending",
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
            status: "Complete",
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
            status: "Accept",
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
            status: "Canceled",
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
            status: "Complete",
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
            status: "Canceled",
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
            status: "Canceled",
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
            status: "Complete",
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
            status: "Complete",
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
            status: "Pending",
            createdAt: "2022-01-10",
            appointmentDate: "2022-01-14",
            totalAmount: "$550",
            paymentMethod: "Cash"
        },
        {
            id: 101,
            customerInfo: "Customer 10",
            totalAppointment: 4,
            homeService: "No",
            status: "Pending",
            createdAt: "2022-01-10",
            appointmentDate: "2022-01-14",
            totalAmount: "$550",
            paymentMethod: "Cash"
        },
        {
            id: 102,
            customerInfo: "Customer 10",
            totalAppointment: 4,
            homeService: "No",
            status: "Pending",
            createdAt: "2022-01-10",
            appointmentDate: "2022-01-14",
            totalAmount: "$550",
            paymentMethod: "Cash"
        },
        {
            id: 104,
            customerInfo: "Customer 10",
            totalAppointment: 4,
            homeService: "No",
            status: "Pending",
            createdAt: "2022-01-10",
            appointmentDate: "2022-01-14",
            totalAmount: "$550",
            paymentMethod: "Cash"
        }
    ];



    return (
        <>
            <div className="p-4 border-[1px] rounded-md mb-4">
                {/* <Form onFinish={handleSubmit(onSubmit)}> */}
                <Row gutter={[16, 16]}>
                    <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                        <DateRangePicker />
                    </Col>
                    <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                        <CustomSelect placeholder='Select Option' data={selectedData} />
                    </Col>

                </Row>
                {/* </Form> */}
            </div>

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
        </>
    );
};

export default Appointment;


const selectedData = [
    { id: 1, name: "Customer 1" },
    { id: 2, name: "Customer 2" },
    { id: 3, name: "Customer 3" },
    { id: 4, name: "Customer 4" },
    { id: 5, name: "Customer 5" },
    { id: 6, name: "Customer 6" },
    { id: 7, name: "Customer 7" },
    { id: 8, name: "Customer 8" },
    { id: 9, name: "Customer 9" },
    { id: 10, name: "Customer 10" },
    { id: 11, name: "Customer 11" },
    { id: 12, name: "Customer 12" },
    { id: 13, name: "Customer 13" },
    { id: 14, name: "Customer 14" },
    { id: 15, name: "Customer 15" }
];
