import React from 'react';
import useToggle from './custom hooks/useToggle';



const App = () => {
  const [value,toggleValue]= useToggle(true)
  console.log(value);
  
  return (
    <div>
      {value? <h1>Custom Hooks in React</h1>  :null}
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={()=>toggleValue(false)}>Hide Heading</button>   
      <button onClick={()=>toggleValue(true)}>Show Heading</button>   

    </div>
  )
}

export default App