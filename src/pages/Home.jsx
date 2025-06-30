import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
  
const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/dashboard/profile')
  }
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={handleClick}>Go to Profile Page</button>
      
    </div>
  )
}

export default Home