import './dashboard.css'
import Sidebar from '../components/Sidebar/Sidebar'
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import DashHistory from '../pages/dashHistory/DashHistory';
import DashSettings from '../pages/dashSettings/DashSettings';
import DashLogout from '../pages/dashLogout/DashLogout';
import DashAccount from '../pages/dashAccount/DashAccount';
import DashHome from '../pages/dashHome/DashHome';
import TopDash from '../components/topDash/TopDash'

 
const Dashboard = () => {
  return (     
    <div>
      <Sidebar/>
      <TopDash/>
      <Routes>
        <Route path="/" element={<DashHome/>} />
        <Route path="history" element={<DashHistory />} />
        <Route path="accounts" element={<DashAccount />} />
        <Route path="settings" element={<DashSettings />} />
        <Route path="logout" element={<DashLogout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default Dashboard