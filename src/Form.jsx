import React, { useState } from 'react';

const Form = () => {
    const [gender,setGender] = useState("female");
    const [city,setCity] = useState("mirpurkhas")
  return (
    <div>
        <h1>Handle Radio and Dropdown</h1>
       
        <input type="radio" checked={gender=="Male"} onChange={(e)=>setGender(e.target.value)} value={"Male"} name='gender' id='male' />
        <label htmlFor="male">Male</label>
        <input type="radio" checked={gender=="Female"} onChange={(e)=>setGender(e.target.value)} value={"Female"} name='gender' id='female' />
        <label htmlFor="female">Female</label>
        <br/><br/>
        <h2>Selected Gender: {gender}</h2><br/>
        <h2>Selected City: {city}</h2><br/>
        <select defaultValue={"mirpurkhas"} onChange={(e)=> setCity(e.target.value)}>
            <option value="karachi">Karachi</option>
            <option value="mirpurkhas">Mirpurkhas</option>
            <option value="hyderabad">Hyderabad</option>
        </select>
    </div>
  )
}

export default Form