import { useMediaQuery, useTheme } from '@mui/material';
import { Col, Modal, Row, Select } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomActions from '../../components/CustomActions';
import DateRangePicker from '../../components/antd/dateRangePicker';
import CustomSelect from '../../components/antd/select';
import useModal from '../../hooks/useModal';
import { CustomDataGrid } from '../../shared-ui-components/CustomDataGrid';
const Appointment = () => {
    const { handleCancel, handleOk, isModalOpen, showModal } = useModal();
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

    const [rowData, setRowData] = useState('')
    console.log("🚀 ~ Appointment ~ rowData:", rowData)
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
                [
                    <div className='cursor-pointer'
                        onClick={() => {
                            showModal()
                            setRowData(row)
                        }}>
                        <CustomActions row={row} />
                    </div>
                ]
            )
        },
        { field: 'createdAt', headerName: 'Created At', minWidth: 200 },
        { field: 'appointmentDate', headerName: 'Appointment Date', minWidth: 200 },
        { field: 'totalAmount', headerName: 'Total Amount', minWidth: 150 },
        { field: 'paymentMethod', headerName: 'Payment Method', minWidth: 200 },
        {
            field: 'actions', headerName: 'Actions', minWidth: 150, type: 'actions', getActions: ({ row }) =>
                [
                    <div className='cursor-pointer'
                        onClick={() => {
                            showModal()
                            setRowData(row)
                        }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12C5 12 7.545 7 12 7C16.454 7 19 12 19 12C19 12 16.454 17 12 17C7.545 17 5 12 5 12Z" stroke="#121120" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17M21 7V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V7M12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13Z" stroke="#121120" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
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

    const [status, setStatus] = useState('Pending')
    const onChange = (value) => {
        console.log(`selected ${value}`);
        setStatus(value)
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    const handleRowClick = (params) => {
        // console.log(`Movie clicked`, params.row);
        // setRowData(params.row)
    };
    const handleCellClick = (param, event) => {
        // console.log("🚀 ~ handleCellClick ~ param, event:", param.field, event)

    };
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
            </div>

            {
                isModalOpen && rowData && <Modal
                    title={<div className='flex items-center'>
                        <CustomActions row={{
                            status: rowData.status
                        }} />
                        <p className='ml-2 text-[#4B5563] text-sm'>Feb 19, 2024, 4:11 PM</p>
                    </div>}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                >

                    <div className='space-y-4'>

                        <div className="flex justify-between rounded bg-gray-100 p-4">
                            <div className='space-y-2'>
                                <div>
                                    <p className='text-[#778484]'>Customer ID</p>
                                    <p className='font-semibold'>C-1564846</p>
                                </div>
                                <div>
                                    <p className='text-[#778484]'>Customer Name</p>
                                    <p className='font-semibold'>{rowData.customerInfo}</p>
                                </div>
                                <div>
                                    <p className='text-[#778484]'>Mobile Number</p>
                                    <p className='font-semibold'>+8801796983339</p>
                                </div>
                                <div>
                                    <p className='text-[#778484]'>Customer Address</p>
                                    <p className='font-semibold'>Marung baraz, deginala, kagrachari</p>
                                </div>

                            </div>
                            <div>
                                <Select
                                    showSearch
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
                                    value={rowData.status}
                                    listItemHeight={10}
                                    listHeight={250}
                                    // dropdownStyle={{ backgroundColor: 'green' }}
                                    options={[
                                        {
                                            value: 'Pending',
                                            label: 'Pending',
                                        },
                                        {
                                            value: 'Complete',
                                            label: 'Complete',
                                        },
                                        {
                                            value: 'Canceled',
                                            label: 'Canceled',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between rounded ">
                            <p className='font-bold text-base'>Home service</p>
                            <p className='rounded-xl border py-1 px-2 font-bold'>YES</p>
                        </div>

                        <div className='space-y-2'>
                            <p className='font-bold text-base'>Service </p>
                            <div className="rounded bg-gray-100 p-4 space-y-2">
                                <p className='font-semibold'>Arlene McCoy </p>
                                <p className='text-[#778484] text-xs'>Sat, Sep 09 2024, 8:00 pm</p>
                                <div className='flex justify-between'>
                                    <div className='flex justify-between bg-[#FFFFFF] py-1 px-2 rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clip-path="url(#clip0_106_6753)">
                                                <path d="M17.5452 2.55263C17.4938 2.53126 17.4372 2.52565 17.3827 2.53652C17.3281 2.54739 17.2779 2.57424 17.2387 2.61366C16.9978 2.85581 16.7113 3.04779 16.3958 3.17847C16.0803 3.30916 15.7419 3.37596 15.4004 3.375C15.0879 3.375 14.7732 3.34884 14.465 3.29766C13.7581 3.18104 13.0438 3.11516 12.3275 3.1005C12.3567 3.00909 12.375 2.91319 12.375 2.8125C12.375 2.74001 12.347 2.67031 12.2968 2.61796C12.2467 2.56561 12.1783 2.53465 12.1058 2.53153L9.99281 2.43956L12.1868 1.67175C12.2993 1.63209 12.375 1.52578 12.375 1.40625C12.375 0.941063 11.9964 0.5625 11.5312 0.5625C11.3243 0.5625 11.1167 0.585281 10.9145 0.630281C9.39851 0.967485 7.90962 1.41656 6.46003 1.97381L5.78953 2.23172L5.59519 1.84303C5.57799 1.80873 5.55398 1.7783 5.52463 1.75359C5.49528 1.72888 5.4612 1.71041 5.42447 1.69931L3.54206 1.13456C3.43372 0.881578 3.25358 0.665911 3.02393 0.514246C2.79428 0.362581 2.52521 0.281575 2.25 0.28125C1.70634 0.28125 1.23919 0.594844 1.00519 1.04737C0.902177 0.906515 0.845736 0.736996 0.84375 0.5625C0.84375 0.487908 0.814118 0.416371 0.761374 0.363626C0.708629 0.310882 0.637092 0.28125 0.5625 0.28125C0.487908 0.28125 0.416371 0.310882 0.363626 0.363626C0.310882 0.416371 0.28125 0.487908 0.28125 0.5625C0.28125 1.00716 0.493312 1.42341 0.84375 1.68694V1.6875C0.84375 2.46291 1.47459 3.09375 2.25 3.09375C2.61939 3.09376 2.97382 2.94778 3.23606 2.68762L4.32759 3.05156L4.3695 3.10753L3.7935 3.68353L2.754 3.94341C2.54062 3.95212 2.33205 4.00945 2.1442 4.11103C1.95635 4.21261 1.79418 4.35575 1.67006 4.52953C1.58716 4.45476 1.52085 4.36345 1.47541 4.26148C1.42997 4.1595 1.40641 4.04914 1.40625 3.9375H0.84375C0.84375 4.39116 1.071 4.80684 1.43578 5.05772C1.39361 5.26224 1.39746 5.47359 1.44705 5.67645C1.49665 5.8793 1.59075 6.06858 1.72254 6.23058C1.85432 6.39257 2.0205 6.52322 2.20901 6.61306C2.39753 6.7029 2.60367 6.74967 2.8125 6.75C3.54347 6.75 4.13916 6.18722 4.20553 5.47341L4.68225 4.99669L5.77153 4.21875H5.85984C6.03956 4.21875 6.22013 4.21031 6.40013 4.2075C5.56059 4.98881 5.0625 6.09891 5.0625 7.26497C5.06125 8.81859 5.35769 10.3581 5.93578 11.8001L6.73819 13.8057L5.91244 17.6597L6.46256 17.7775L7.28241 13.9517L7.45144 13.8389C7.93213 13.5173 8.34206 13.1009 8.65608 12.6153C8.9701 12.1296 9.1816 11.5849 9.27759 11.0146C9.28429 10.9743 9.28216 10.933 9.27133 10.8936C9.2605 10.8543 9.24123 10.8177 9.21488 10.7865C9.18833 10.7555 9.15537 10.7306 9.11828 10.7135C9.08119 10.6964 9.04084 10.6875 9 10.6875C8.53481 10.6875 8.15625 10.3089 8.15625 9.84375V8.65969C8.15647 8.45164 8.23922 8.25219 8.38633 8.10508C8.53343 7.95797 8.73289 7.87522 8.94094 7.875C9.32597 7.875 9.65166 8.15062 9.71494 8.53059L9.84769 9.32738C9.85568 9.37545 9.87602 9.42063 9.90673 9.45848C9.93744 9.49633 9.97746 9.52555 10.0229 9.54327C10.0683 9.561 10.1175 9.56662 10.1657 9.55958C10.2139 9.55255 10.2595 9.53311 10.298 9.50316L12.5376 7.76138C12.6625 7.66471 12.7635 7.54064 12.8328 7.39873C12.9022 7.25683 12.938 7.10088 12.9375 6.94294C12.9375 6.68138 13.1501 6.46875 13.4117 6.46875H15.5762L16.2692 7.85475L15.7972 8.56266C15.7656 8.61016 15.7492 8.66617 15.7501 8.72324C15.7511 8.78031 15.7694 8.83573 15.8026 8.88216L17.0578 10.6397C17.106 10.7071 17.1377 10.7848 17.1503 10.8667C17.1629 10.9485 17.1562 11.0322 17.1305 11.111C17.1049 11.1897 17.0611 11.2614 17.0027 11.3201C16.9443 11.3788 16.8729 11.423 16.7943 11.4491L16.5046 11.5456C16.409 11.5777 16.3375 11.6584 16.3178 11.7571L16.202 12.3362C16.1438 12.6278 16.1005 12.9222 16.0723 13.2182H14.9062V13.7807H16.0383C16.0352 13.8746 16.0312 13.9686 16.0312 14.0625C16.0312 14.8379 15.4004 15.4688 14.625 15.4688H12.5255L12.0465 14.7502L11.5785 15.0621L12.069 15.7975L11.5422 17.6411L12.0831 17.7958L12.5871 16.0312H14.625C15.7106 16.0312 16.5938 15.1481 16.5938 14.0625C16.5938 13.5214 16.6475 12.9777 16.7538 12.4464L16.8376 12.0277L16.9723 11.9827C17.1898 11.9105 17.3791 11.7716 17.5131 11.5856C17.6471 11.3997 17.7191 11.1763 17.7188 10.9471C17.7188 10.7182 17.6484 10.4988 17.5154 10.3126L16.373 8.71313L16.8278 8.03081C16.8553 7.98956 16.8714 7.94175 16.8744 7.89226C16.8775 7.84276 16.8674 7.79333 16.8452 7.749L16.1806 6.41953C17.0595 6.22266 17.7188 5.43741 17.7188 4.5V2.8125C17.7188 2.69887 17.6501 2.59622 17.5452 2.55263ZM11.0365 1.17928C11.199 1.14326 11.3649 1.12506 11.5312 1.125C11.619 1.125 11.6978 1.1655 11.7492 1.22878L8.47828 2.37375L7.16288 2.31666C8.4279 1.85343 9.72188 1.47349 11.0365 1.17928ZM2.25 2.53125C1.78481 2.53125 1.40625 2.15269 1.40625 1.6875C1.40625 1.22231 1.78481 0.84375 2.25 0.84375C2.71519 0.84375 3.09375 1.22231 3.09375 1.6875C3.09375 2.15269 2.71519 2.53125 2.25 2.53125ZM2.8125 6.1875C2.34731 6.1875 1.96875 5.80894 1.96875 5.34375C1.96875 4.87856 2.34731 4.5 2.8125 4.5C3.27769 4.5 3.65625 4.87856 3.65625 5.34375C3.65625 5.80894 3.27769 6.1875 2.8125 6.1875ZM4.33659 4.55231C4.32396 4.56134 4.31211 4.5714 4.30116 4.58241L4.10063 4.78294C4.0142 4.58932 3.88518 4.41771 3.72319 4.28091L4.00584 4.21031C4.05525 4.19795 4.10036 4.17238 4.13634 4.13634L4.71066 3.56203L5.06391 4.03284L4.33659 4.55231ZM5.48438 3.65625L4.725 2.64375C4.69068 2.59805 4.64332 2.56383 4.58916 2.54559L3.55612 2.20134C3.61168 2.05843 3.64332 1.90735 3.64978 1.75416L5.14687 2.20331L5.37384 2.65725C5.39627 2.70212 5.43029 2.74018 5.47237 2.76747C5.51445 2.79477 5.56307 2.81032 5.61319 2.8125L11.707 3.07744C11.6516 3.13566 11.5777 3.17616 11.493 3.19022C9.63115 3.49984 7.74698 3.65571 5.85956 3.65625H5.48438ZM17.1562 4.5C17.1562 5.27541 16.5254 5.90625 15.75 5.90625H13.4117C13.1368 5.90655 12.8733 6.01587 12.679 6.21022C12.4846 6.40457 12.3753 6.66808 12.375 6.94294C12.375 7.09031 12.3083 7.22672 12.1919 7.31728L10.3247 8.76966L10.2696 8.43806C10.218 8.12318 10.0559 7.83696 9.81245 7.6307C9.56898 7.42445 9.26002 7.31164 8.94094 7.3125C8.58373 7.3128 8.24124 7.45483 7.98866 7.70741C7.73608 7.95999 7.59405 8.30248 7.59375 8.65969V9.84375C7.5941 10.158 7.69952 10.463 7.89323 10.7104C8.08695 10.9578 8.35783 11.1333 8.66278 11.2089C8.44231 12.0833 7.9086 12.8464 7.16288 13.3535L6.45806 11.5912C5.90658 10.2155 5.62379 8.74701 5.625 7.26497C5.625 6.02044 6.28144 4.85072 7.35919 4.185C8.7755 4.12413 10.1868 3.97714 11.5853 3.74484C11.68 3.72909 11.7675 3.69703 11.8496 3.65625H12.0023C12.7941 3.65625 13.5917 3.72234 14.3727 3.85228C14.7113 3.90881 15.0573 3.9375 15.4004 3.9375C16.0349 3.9375 16.6407 3.75188 17.1562 3.4065V4.5Z" fill="#121120" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_106_6753">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className='ml-2'>Trend Haircut</p>
                                    </div>
                                    <div>
                                        <p className='font-bold'> $ 36 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded bg-gray-100 p-4 space-y-2">
                                <p className='font-semibold'>Arlene McCoy </p>
                                <p className='text-[#778484] text-xs'>Mon, June 12 2024, 10:00 pm</p>
                                <div className='flex justify-between'>
                                    <div className='flex justify-between bg-[#FFFFFF] py-1 px-2 rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clip-path="url(#clip0_106_6753)">
                                                <path d="M17.5452 2.55263C17.4938 2.53126 17.4372 2.52565 17.3827 2.53652C17.3281 2.54739 17.2779 2.57424 17.2387 2.61366C16.9978 2.85581 16.7113 3.04779 16.3958 3.17847C16.0803 3.30916 15.7419 3.37596 15.4004 3.375C15.0879 3.375 14.7732 3.34884 14.465 3.29766C13.7581 3.18104 13.0438 3.11516 12.3275 3.1005C12.3567 3.00909 12.375 2.91319 12.375 2.8125C12.375 2.74001 12.347 2.67031 12.2968 2.61796C12.2467 2.56561 12.1783 2.53465 12.1058 2.53153L9.99281 2.43956L12.1868 1.67175C12.2993 1.63209 12.375 1.52578 12.375 1.40625C12.375 0.941063 11.9964 0.5625 11.5312 0.5625C11.3243 0.5625 11.1167 0.585281 10.9145 0.630281C9.39851 0.967485 7.90962 1.41656 6.46003 1.97381L5.78953 2.23172L5.59519 1.84303C5.57799 1.80873 5.55398 1.7783 5.52463 1.75359C5.49528 1.72888 5.4612 1.71041 5.42447 1.69931L3.54206 1.13456C3.43372 0.881578 3.25358 0.665911 3.02393 0.514246C2.79428 0.362581 2.52521 0.281575 2.25 0.28125C1.70634 0.28125 1.23919 0.594844 1.00519 1.04737C0.902177 0.906515 0.845736 0.736996 0.84375 0.5625C0.84375 0.487908 0.814118 0.416371 0.761374 0.363626C0.708629 0.310882 0.637092 0.28125 0.5625 0.28125C0.487908 0.28125 0.416371 0.310882 0.363626 0.363626C0.310882 0.416371 0.28125 0.487908 0.28125 0.5625C0.28125 1.00716 0.493312 1.42341 0.84375 1.68694V1.6875C0.84375 2.46291 1.47459 3.09375 2.25 3.09375C2.61939 3.09376 2.97382 2.94778 3.23606 2.68762L4.32759 3.05156L4.3695 3.10753L3.7935 3.68353L2.754 3.94341C2.54062 3.95212 2.33205 4.00945 2.1442 4.11103C1.95635 4.21261 1.79418 4.35575 1.67006 4.52953C1.58716 4.45476 1.52085 4.36345 1.47541 4.26148C1.42997 4.1595 1.40641 4.04914 1.40625 3.9375H0.84375C0.84375 4.39116 1.071 4.80684 1.43578 5.05772C1.39361 5.26224 1.39746 5.47359 1.44705 5.67645C1.49665 5.8793 1.59075 6.06858 1.72254 6.23058C1.85432 6.39257 2.0205 6.52322 2.20901 6.61306C2.39753 6.7029 2.60367 6.74967 2.8125 6.75C3.54347 6.75 4.13916 6.18722 4.20553 5.47341L4.68225 4.99669L5.77153 4.21875H5.85984C6.03956 4.21875 6.22013 4.21031 6.40013 4.2075C5.56059 4.98881 5.0625 6.09891 5.0625 7.26497C5.06125 8.81859 5.35769 10.3581 5.93578 11.8001L6.73819 13.8057L5.91244 17.6597L6.46256 17.7775L7.28241 13.9517L7.45144 13.8389C7.93213 13.5173 8.34206 13.1009 8.65608 12.6153C8.9701 12.1296 9.1816 11.5849 9.27759 11.0146C9.28429 10.9743 9.28216 10.933 9.27133 10.8936C9.2605 10.8543 9.24123 10.8177 9.21488 10.7865C9.18833 10.7555 9.15537 10.7306 9.11828 10.7135C9.08119 10.6964 9.04084 10.6875 9 10.6875C8.53481 10.6875 8.15625 10.3089 8.15625 9.84375V8.65969C8.15647 8.45164 8.23922 8.25219 8.38633 8.10508C8.53343 7.95797 8.73289 7.87522 8.94094 7.875C9.32597 7.875 9.65166 8.15062 9.71494 8.53059L9.84769 9.32738C9.85568 9.37545 9.87602 9.42063 9.90673 9.45848C9.93744 9.49633 9.97746 9.52555 10.0229 9.54327C10.0683 9.561 10.1175 9.56662 10.1657 9.55958C10.2139 9.55255 10.2595 9.53311 10.298 9.50316L12.5376 7.76138C12.6625 7.66471 12.7635 7.54064 12.8328 7.39873C12.9022 7.25683 12.938 7.10088 12.9375 6.94294C12.9375 6.68138 13.1501 6.46875 13.4117 6.46875H15.5762L16.2692 7.85475L15.7972 8.56266C15.7656 8.61016 15.7492 8.66617 15.7501 8.72324C15.7511 8.78031 15.7694 8.83573 15.8026 8.88216L17.0578 10.6397C17.106 10.7071 17.1377 10.7848 17.1503 10.8667C17.1629 10.9485 17.1562 11.0322 17.1305 11.111C17.1049 11.1897 17.0611 11.2614 17.0027 11.3201C16.9443 11.3788 16.8729 11.423 16.7943 11.4491L16.5046 11.5456C16.409 11.5777 16.3375 11.6584 16.3178 11.7571L16.202 12.3362C16.1438 12.6278 16.1005 12.9222 16.0723 13.2182H14.9062V13.7807H16.0383C16.0352 13.8746 16.0312 13.9686 16.0312 14.0625C16.0312 14.8379 15.4004 15.4688 14.625 15.4688H12.5255L12.0465 14.7502L11.5785 15.0621L12.069 15.7975L11.5422 17.6411L12.0831 17.7958L12.5871 16.0312H14.625C15.7106 16.0312 16.5938 15.1481 16.5938 14.0625C16.5938 13.5214 16.6475 12.9777 16.7538 12.4464L16.8376 12.0277L16.9723 11.9827C17.1898 11.9105 17.3791 11.7716 17.5131 11.5856C17.6471 11.3997 17.7191 11.1763 17.7188 10.9471C17.7188 10.7182 17.6484 10.4988 17.5154 10.3126L16.373 8.71313L16.8278 8.03081C16.8553 7.98956 16.8714 7.94175 16.8744 7.89226C16.8775 7.84276 16.8674 7.79333 16.8452 7.749L16.1806 6.41953C17.0595 6.22266 17.7188 5.43741 17.7188 4.5V2.8125C17.7188 2.69887 17.6501 2.59622 17.5452 2.55263ZM11.0365 1.17928C11.199 1.14326 11.3649 1.12506 11.5312 1.125C11.619 1.125 11.6978 1.1655 11.7492 1.22878L8.47828 2.37375L7.16288 2.31666C8.4279 1.85343 9.72188 1.47349 11.0365 1.17928ZM2.25 2.53125C1.78481 2.53125 1.40625 2.15269 1.40625 1.6875C1.40625 1.22231 1.78481 0.84375 2.25 0.84375C2.71519 0.84375 3.09375 1.22231 3.09375 1.6875C3.09375 2.15269 2.71519 2.53125 2.25 2.53125ZM2.8125 6.1875C2.34731 6.1875 1.96875 5.80894 1.96875 5.34375C1.96875 4.87856 2.34731 4.5 2.8125 4.5C3.27769 4.5 3.65625 4.87856 3.65625 5.34375C3.65625 5.80894 3.27769 6.1875 2.8125 6.1875ZM4.33659 4.55231C4.32396 4.56134 4.31211 4.5714 4.30116 4.58241L4.10063 4.78294C4.0142 4.58932 3.88518 4.41771 3.72319 4.28091L4.00584 4.21031C4.05525 4.19795 4.10036 4.17238 4.13634 4.13634L4.71066 3.56203L5.06391 4.03284L4.33659 4.55231ZM5.48438 3.65625L4.725 2.64375C4.69068 2.59805 4.64332 2.56383 4.58916 2.54559L3.55612 2.20134C3.61168 2.05843 3.64332 1.90735 3.64978 1.75416L5.14687 2.20331L5.37384 2.65725C5.39627 2.70212 5.43029 2.74018 5.47237 2.76747C5.51445 2.79477 5.56307 2.81032 5.61319 2.8125L11.707 3.07744C11.6516 3.13566 11.5777 3.17616 11.493 3.19022C9.63115 3.49984 7.74698 3.65571 5.85956 3.65625H5.48438ZM17.1562 4.5C17.1562 5.27541 16.5254 5.90625 15.75 5.90625H13.4117C13.1368 5.90655 12.8733 6.01587 12.679 6.21022C12.4846 6.40457 12.3753 6.66808 12.375 6.94294C12.375 7.09031 12.3083 7.22672 12.1919 7.31728L10.3247 8.76966L10.2696 8.43806C10.218 8.12318 10.0559 7.83696 9.81245 7.6307C9.56898 7.42445 9.26002 7.31164 8.94094 7.3125C8.58373 7.3128 8.24124 7.45483 7.98866 7.70741C7.73608 7.95999 7.59405 8.30248 7.59375 8.65969V9.84375C7.5941 10.158 7.69952 10.463 7.89323 10.7104C8.08695 10.9578 8.35783 11.1333 8.66278 11.2089C8.44231 12.0833 7.9086 12.8464 7.16288 13.3535L6.45806 11.5912C5.90658 10.2155 5.62379 8.74701 5.625 7.26497C5.625 6.02044 6.28144 4.85072 7.35919 4.185C8.7755 4.12413 10.1868 3.97714 11.5853 3.74484C11.68 3.72909 11.7675 3.69703 11.8496 3.65625H12.0023C12.7941 3.65625 13.5917 3.72234 14.3727 3.85228C14.7113 3.90881 15.0573 3.9375 15.4004 3.9375C16.0349 3.9375 16.6407 3.75188 17.1562 3.4065V4.5Z" fill="#121120" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_106_6753">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className='ml-2'>jamal Haircut</p>
                                    </div>
                                    <div>
                                        <p className='font-bold'> $ 40 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <div className="flex justify-between rounded ">
                                <p className='font-bold text-base'>Subtotal</p>
                                <p className='font-bold'>$ 72</p>
                            </div>
                            <div className="flex justify-between rounded ">
                                <p className='font-bold text-base'>Platform Fee</p>
                                <p className=' font-bold'>$ 39</p>
                            </div>
                            <div className="flex justify-between rounded ">
                                <p className='font-bold text-base'>Tax</p>
                                <p className=' font-bold'>$ 99</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex justify-between'>
                                <p className='mr-2'><span className='font-bold mr-1'>Total</span> <span className='text-xs'>(incl. VAT)</span></p>
                                <CustomActions row={{
                                    status: 'Paid'
                                }} />
                            </div>
                            <div className='text-[#FF4842] font-bold'>
                                $78
                            </div>
                        </div>
                    </div>
                </Modal>
            }


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
