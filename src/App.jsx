import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [userData,setUserData] = useState([]);
  const [loading,setLoading] = useState(false)




  useEffect(()=>{
    setLoading(true)
    getUserData()
  },[])

  const getUserData = async()=>{
    const api = "http://localhost:3000/users";
    let response= await fetch(api);
   response= await response.json();
   setUserData(response);
   setLoading(false);
   
  }
  return (
    <div>
      <h1 className='text-xl mt-4 ml-4 font-bold'>Integrate JSON Server API and Loader</h1>
      {
        !loading? userData.map((user,key) => (
         <h1 className='text-xl mt-4 ml-4 font-bold text-green-700' key={key}>{user.name}</h1>
      ))
      : <h1 className='text-5xl'>Loading...</h1>
      }
    </div>
  ) 
}

export default App