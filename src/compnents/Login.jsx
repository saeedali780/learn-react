import React, { useState, useContext } from 'react';

import { userContext } from '../context/UserContext.jsx';

const Login = () => {
     const [value,setValue] = useState("");
     const {user,setUser} =  useContext(userContext);

     const handleSubmit = (e)=>{
        e.preventDefault();
        setUser(value)
     }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login