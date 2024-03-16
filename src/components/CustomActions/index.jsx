import React from 'react';

const getStatusColor = (status) => {
    switch (status) {
        case 'Pending':
            return ' text-[#A7A00A] bg-[#f1f0d8] font-semibold';
        case 'Canceled':
            return 'text-[#FF3636] bg-[#ffdcdc] font-semibold';
        case 'Complete':
            return 'text-[#229A16] bg-[#e4f8dd] font-semibold';
        case 'Accept':
            return 'text-[#3D9AE2] bg-[#e0effa] font-semibold';
        case 'Due':
            return 'text-[#FBB034] bg-[fef2df] font-semibold';
        default:
            return 'text-[#3D9AE2] bg-[#F7BD01] font-semibold';
    }
};

const CustomActions = ({ row }) => {
    // const editButton = handleEdit ? <IconButton onClick={() => handleEdit(row.id)}>Edit</IconButton> : null;
    // const deleteButton = handleDelete ? <IconButton onClick={() => handleDelete(row.id)}>Delete</IconButton> : null;

    return (
        <>
            {/* {editButton}
            {deleteButton} */}
            <div className={`border-2 rounded p-1 flex w-[100px] items-center justify-center ${getStatusColor(row.status)}`}>
                {row.status}
            </div>
        </>
    );
};

export default CustomActions;
