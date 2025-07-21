import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  background: '#f1f5f9',
  padding: '1rem 0',
  borderRadius: '0 0 16px 16px',
  boxShadow: '0 2px 8px rgba(37,99,235,0.07)',
  marginBottom: '2rem',
};

const linkStyle = {
  fontWeight: 'bold',
  fontSize: '1.1rem',
  color: '#2563eb',
  textDecoration: 'none',
  padding: '0.5rem 1.2rem',
  borderRadius: '8px',
  transition: 'background 0.15s, color 0.15s',
};

const activeLinkStyle = {
  background: '#2563eb',
  color: '#fff',
};

const App = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <nav style={navStyle}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
        >
          User List
        </NavLink>
        <NavLink
          to="/add"
          style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
        >
          Add User
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;