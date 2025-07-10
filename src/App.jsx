import React from 'react'
import { useRef } from 'react'
import UserInput from './UserInput';

const App = () => {
  const inputRef = useRef(null);
  const updateInput = ()=>{
   inputRef.current.value = 1000;
   inputRef.current.focus();
   inputRef.current.style.color="red";
    
  }

  return (
    <div>
      <h1>Forward Ref</h1>
      <UserInput ref={inputRef}/>
      <button onClick={updateInput}>Update Input</button>
    </div>
  )
}

export default App