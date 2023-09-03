import React, { useState, useEffect } from 'react';
import './sidebar.css'; 
import hyveSvg from '../../assets/hyveSvg.svg'
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';


function Sidebar() {
    const [collapsed, setCollapsed] = useState(window.innerWidth <= 1200);

    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setCollapsed(window.innerWidth <= 1200);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div className={`responsive-sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-logo">
            <img src={hyveSvg} alt="" />
        </div>
        <div className="toggle-button" onClick={toggleSidebar}>
          {collapsed ? <BiMenuAltRight className='menuIcon' /> : <GrFormClose className='menuIcon'/>}        
        </div>
        <ul className="sidebar-menu">
          <Link to='/dashboard' className='links'>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              Home
            </li>
          </Link>  
          <Link to="/dashboard/history" className='links'>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 16.74V4.67c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15C9.44 3.9 6.26 2.84 4.16 2.67 2.97 2.57 2 3.47 2 4.66v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98ZM12 5.49v15M7.75 8.49H5.5M8.5 11.49h-3"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              History
            </li>
          </Link>  
          <Link to="/dashboard/accounts" className='links'>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12.12 12.78a.963.963 0 0 0-.24 0 3.27 3.27 0 0 1-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 0 1 .12 6.55ZM18.74 19.38A9.934 9.934 0 0 1 12 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              Account
            </li>
          </Link>  
          <Link to="/dashboard/settings" className='links'>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              Settings
            </li>
          </Link>  
          </ul>
        <ul className="sidebar-menu logout">
          <Link to="/dashboard/logout">
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M15 12H3.62M5.85 8.65L2.5 12l3.35 3.35"></path></svg>
              Logout
            </li>
          </Link>
        </ul>
      </div>    
    );
}

export default Sidebar;
