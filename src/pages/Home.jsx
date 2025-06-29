import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>

        <Link >Dashboard</Link>
        <br />
        <br />
        <Link>Home</Link>
    </div>
  )
}

export default Home