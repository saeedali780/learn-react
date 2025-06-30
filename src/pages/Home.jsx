import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
const [username,setUserName] = useState("");  
const navigate = useNavigate();


  const handleClick = ()=>{
    navigate('/dashboard/profile',{state:{username}})
  }
  return (
    <div>
        <h1>Home Page</h1>
        <input type="text" value={username} onChange={(e)=> setUserName(e.target.value)} />
        <button onClick={handleClick}>Go to Profile Page</button>
      
    </div>
  )
}

export default Home