import React from 'react';
import { Outlet } from 'react-router-dom';

const WebsiteLayout = () => {
    console.log(' Website  ghg Layout');
    return (
        <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, neque.
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default WebsiteLayout;