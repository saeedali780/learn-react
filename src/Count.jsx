import React, { useEffect } from 'react';

const Count = ({count,data}) => {

  useEffect(()=>{
    console.log("This will execute once");
    
  },[]);

    useEffect(()=>{
     console.log("this will execute when count is updated");
     
    },[count]);

    useEffect(()=>{
      return ()=>{
         console.log("this will execute when toggle is hidden");
      }
        
      
    }, []);

    

  return (
    <div> 
      <h1>Count is: {count} & Data: {data}</h1>
    </div>
  )
}

export default Count;