import React from 'react';

const Persons = ({user}) => {
   
  return (
<div style={{
    border:"1px solid green",
    padding: "10px",
    margin:"10px",
    width: "400px",
    borderRadius:"10px",
}}>
      <h2>Id: {user.id}</h2>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
    
</div>
  )
}

export default Persons