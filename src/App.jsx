import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [color,setColor] = useState("white")
  console.log(color);
  return (
    <div >
      <h1>Digital Clock in ReactJs</h1>
      <select defaultValue={"white"} onChange={(e)=> setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="white">White</option>
      </select>
      <h1>{color}</h1>
    
      
     <Clock color={color}/>
    </div>
  )
}

export default App