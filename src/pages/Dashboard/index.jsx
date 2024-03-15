import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
                <div class="flex  items-center justify-around min-h-32 rounded bg-gray-50 ">
                    <div className='space-y-2'>
                        <p className='text-2xl font-semibold'>8.2k</p>
                        <p>Total Appointment</p>
                    </div>
                    <div>
                        <p class="text-2xl text-gray-400">

                            <img src='/assets/Appointment.png' alt="" />
                        </p>
                    </div>
                </div>
                <div class="flex  items-center justify-around min-h-32 rounded bg-gray-50 ">
                    <div className='space-y-2'>
                        <p className='text-2xl font-semibold'>311k</p>
                        <p>Total User</p>
                    </div>
                    <div>
                        <p class="text-2xl text-gray-400">
                            <img src='/assets/user.png' alt="" />
                        </p>
                    </div>
                </div>
                <div class="flex  items-center justify-around min-h-32 rounded bg-gray-50 ">
                    <div className='space-y-2'>
                        <p className='text-2xl font-semibold'>124k $</p>
                        <p>Total amount</p>
                    </div>
                    <div>
                        <p class="text-2xl text-gray-400">

                            <img src='/assets/dollar.png' alt="" />
                        </p>
                    </div>
                </div>
                <div class="flex  items-center justify-around min-h-32 rounded bg-gray-50 ">
                    <div className='space-y-2'>
                        <p className='text-2xl font-semibold'>8.2k</p>
                        <p>Pending Appointment</p>
                    </div>
                    <div>
                        <p class="text-2xl text-gray-400">

                            <img src='/assets/Appointment.png' alt="" />
                        </p>
                    </div>
                </div>
                <div class="flex items-center justify-center h-24 rounded bg-gray-50">
                    <p class="text-2xl text-gray-400">
                        <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center h-24 rounded bg-gray-50">
                    <p class="text-2xl text-gray-400">
                        <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;