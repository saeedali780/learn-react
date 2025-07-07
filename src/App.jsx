import React, { useEffect, useState } from 'react';


const App = () => {
  const [count,setCount] = useState(0);

  useEffect(()=>{
  callfun();
    callfun2()
  },[])
  function callfun(){
    console.log("Hello from fun");
  }
  function callfun2(){
    console.log("Hello from fun2");
  }


  return (
    <div >
      <h1>Count is: {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increament</button>
      <button onClick={()=> setCount(count - 1)}>Descreament</button>
    
    </div>
  )
}

export default App