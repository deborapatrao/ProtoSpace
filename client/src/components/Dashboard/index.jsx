import React from 'react';
import {
    Outlet
} from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            Dashboard (Header + Sidebar + Workspace)
            <Outlet />
        </div>
    );
}

export default Dashboard;
