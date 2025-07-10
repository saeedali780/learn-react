import React from 'react'
import { useState } from 'react'

const App = () => {
  const [data,setData]= useState({
    name:"Saeed",
    address:{
      city:"Karachi",
      country:"Pakistan",
    }
  });
  const handleName = (name)=>{
    console.log(name); 
    data.name = name
    setData({...data})
  }
  const handleCity = (city)=>{
    data.address.city= city
    setData({...data,address:{...data.address,city}})
  }
  const handleCounty = (country)=>{
    data.address.country= country
    setData({...data,address:{...data.address,country}})
  }
  return (
    <div>
      <h1>Updating objects in state</h1>
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
      <input type="text" onChange={(e)=>handleName(e.target.value)} placeholder='update name'/><br/><br/>
      <input type="text" onChange={(e)=>handleCity(e.target.value)} placeholder='update city'/><br/><br/>
      <input type="text" onChange={(e)=>handleCounty(e.target.value)} placeholder='update country'/><br/>
    </div>
  )
}

export default App