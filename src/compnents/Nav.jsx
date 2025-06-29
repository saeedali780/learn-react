import React from 'react'
import { Link } from 'react-router-dom'

const navStyle = {
  background: '#222',
  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: '500',
  transition: 'color 0.2s',
};

const linkHoverStyle = {
  color: '#61dafb',
};

const Nav = () => {
  const [hovered, setHovered] = React.useState(null);
  return (
    <nav style={navStyle}>
      <Link
        to='/'
        style={hovered === 'home' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
        onMouseEnter={() => setHovered('home')}
        onMouseLeave={() => setHovered(null)}
      >
        Home
      </Link>
      <Link
        to='/dashboard'
        style={hovered === 'dashboard' ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
        onMouseEnter={() => setHovered('dashboard')}
        onMouseLeave={() => setHovered(null)}
      >
        Dashboard
      </Link>
      
    </nav>
  )
}

export default Nav