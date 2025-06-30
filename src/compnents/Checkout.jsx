import React, { useContext } from 'react';
import { userContext } from '../App';

const Checkout = () => {
  const {user} =  useContext(userContext);

  
  return (
    <div><h1>Checkout as {user}</h1></div>
  )
}

export default Checkout