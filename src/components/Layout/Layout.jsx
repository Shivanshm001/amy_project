import { Navbar } from 'components/Navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}