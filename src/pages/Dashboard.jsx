import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
        <ul>
            <li>   <Link to='profile'>Profile</Link></li>
            <li>  <Link to='settings'>Settings</Link></li>
        </ul>

       <h1> Dashboard Page</h1>
       <Outlet/>
    </div>
  )
}

export default Dashboard