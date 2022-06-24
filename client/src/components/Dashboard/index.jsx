import React from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Workspace from './Workspace'


const Dashboard = () => {
    return (
        <div className='container'>
      <div className='container__navbar'>
        <Header />
      </div>

      <div className='container__dashboard'>
        <Sidebar />
        <Workspace />
      </div>
    </div>
    );
}

export default Dashboard;
