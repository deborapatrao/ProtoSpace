import React, { useState, useEffect } from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Workspace from './Workspace'


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  // or useLayoutEffect?
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}


const Dashboard = () => {
  const [width, height] = useWindowSize();

  return (
    <div className='container'>
      <div className='container__navbar'>
        <Header />
      </div>

      <div className='container__dashboard'>
        {width > 1000 ? <Sidebar width={width} /> : ''}
        <Workspace width={width} />
      </div>
    </div>
  );
}

export default Dashboard;
