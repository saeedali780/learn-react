import React, { useState } from 'react';
import UseLocalStorage from '../hooks/UseLocalStorage';

const Login = () => {

  const [value,setValue] = useState("");
  const [user,setUser] = UseLocalStorage();
function handleClick(){
    setUser(value)
;  }
  return (
    <div>
      <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login