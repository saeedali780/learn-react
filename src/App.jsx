import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef(null);

  const handleInput = ()=>{
    console.log(inputRef);
    
    inputRef.current.focus()
    inputRef.current.placeholder = "Hello";
    inputRef.current.value = "Hello Saeed";
    inputRef.current.style.color = "green";
  }
  const toggleHandler = ()=>{
    if(inputRef.current.style.display!= "none"){
      inputRef.current.style.display= "none";
    }else{
      inputRef.current.style.display= "inline";
    }
  
  }
  return (
    <div>

      <input ref={inputRef} type="text" />
      <button onClick={handleInput}>Click Me</button>
      <button onClick={toggleHandler}>Toggle</button>
    </div>
  )
}

export default App