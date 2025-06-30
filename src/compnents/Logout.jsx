import React, { useContext } from 'react';
import { userContext } from '../context/UserContext.jsx';
const Logout = () => {
    const {dispatch} =  useContext(userContext);
  return (
    <div>
        <button onClick={()=> dispatch({type: "logout",payload: "Guest"})}>logout</button>
    </div>
  )
}

export default Logout