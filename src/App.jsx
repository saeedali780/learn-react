import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Ethan'
  ]);
  const [dataDetails,setDataDetails] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 28 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 30 },
    { id: 5, name: 'Ethan', age: 27 }
  ]);
  
  const handleNameChange = (name)=>{
    data[data.length -1]=name;
    setData([...data]);
  }
  console.log("Before",dataDetails);
  const handleAgeChange = (age)=>{
    age = parseInt(age);
    dataDetails[dataDetails.length -1].age=age;
    setDataDetails([...dataDetails]);
    console.log("After",dataDetails);
    
  }
  
  return (
    <div>
      <h1>Updating Array in State</h1>
      <ul>
        <h1>List of Names</h1>
        <input type="text" onChange={(e)=>handleNameChange(e.target.value)} placeholder='enter last user name' />
        {data.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <hr />
      <h2>Data Details</h2>
      <input type="text" onChange={(e)=>handleAgeChange(e.target.value)} placeholder='enter last user age' />
      <ol>
        {dataDetails.map((item) => (
          <li key={item.id}> {item.name}, {item.age}</li>
        ))}
      </ol>
    </div>
  )
}

export default App