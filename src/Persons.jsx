import React from 'react';

const Persons = ({user}) => {
   
  return (
<div>
       
      <h1>Name: {user.name}</h1>
      <h1>Id: {user.id}</h1>
</div>
  )
}

export default Persons