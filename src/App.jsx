import React, { useState } from 'react';
import College from './College';
import {SubjectContext} from './ContexData.jsx';

const App = () => {
  const [subject,setSubject] = useState("");

  return (
    <div style={{backgroundColor:"yellow", padding:10}}>
    <SubjectContext.Provider value={subject}>
      <select value={subject} onChange={(e)=>setSubject(e.target.value)}>
      <option value="">Select Value</option>

        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="Computer Science">Computer Science</option>
      </select>
      <h1>App</h1>
      <button onClick={()=> setSubject("")}>Clear Subject</button>
      <College/>
    </SubjectContext.Provider>
    </div>
  )
}

export default App