import React from 'react';
import { useState } from 'react';

const App = () => {
  const [users,setUsers] = useState([]);
  const [user,setUser] = useState('');
  const handleAddUsers = ()=>{
    setUsers([...users,user])
  }
 const total = users.length;
 const last = users[users.length-1];
 const unique =[...new Set(users )].length
  
  return (
    <div>
      <h2>Total Users: {total} </h2>
      <h2>Last User: {last} </h2>
      <h2>Unique Total User: {unique} </h2>
      <input type="text" onChange={(e)=>setUser(e.target.value)}/>
      <button onClick={handleAddUsers}>Add user</button>
      {users.map((item,index)=>(
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  )
}

export default App