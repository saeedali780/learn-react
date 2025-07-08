import React, { useState } from 'react';
import Count from './Count';


const App = () => {
  const [count,setCount] = useState(0);
  const [data,setData] = useState(0);
  const [display,setDisplay] = useState(true)


  return (
    <div >
      {display?  <Count count={count} setCount={setCount} data={data}/> :null}
     
      <button onClick={()=> setCount(count + 1)}>Increament</button>
      <button onClick={()=> setCount(count - 1)}>Descreament</button>
      <button onClick={()=> setData(data + 1)}>Data</button>
      <button onClick={()=> setDisplay(!display)}>Toggle</button>
    </div>
  )
}

export default App