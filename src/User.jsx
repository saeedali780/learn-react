import React from 'react';

const User = ({user,setUser}) => {
  return (
    <div>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <h1>City: {user.city}</h1>
        <button onClick={() => setUser({...user,name:'Jane'})}>Change Name</button>
    </div>
  )
}

export default User