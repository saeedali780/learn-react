import React from 'react'
import { useTransition } from 'react';

const App = () => {
  const [pending,startTransition]= useTransition();
  
    const handleSubmit =  ()=>{

      startTransition(async()=>{
        await new Promise(res=>setTimeout(res,10000))
      });
  };
  return (
    <div>
      {
        pending?  <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" /> :null
      }
      <button disabled={pending} onClick={handleSubmit}>Click Me</button>
    </div>
  )
}

export default App