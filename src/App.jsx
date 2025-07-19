import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [apiData,setApiData] =  useState([])

  useEffect(()=>{
    getUsersData()
  },[])
  const getUsersData = async ()=>{
    const url = 'https://dummyjson.com/users';
    let response = await fetch(url);
   response = await response.json();
  //  console.log(response.users);
   
  setApiData(response.users)
  // console.log(apiData);
  
  }
  useEffect(() => {
    console.log(apiData);
  }, [apiData]);
  return (
    <div>
    {apiData && apiData.map((user) => (
      <h1 key={user.id}>{user.firstName}</h1>
    ))}
    </div>
  )
}

export default App