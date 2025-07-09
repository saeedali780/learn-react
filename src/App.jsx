import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef(null);

  const handleInput = ()=>{
    console.log(inputRef);
    
    inputRef.current.focus()
    inputRef.current.placeholder = "Hello";
    inputRef.current.value = "Hello Saeed";
  }
  return (
    <div>

      <input ref={inputRef} type="text" />
      <button onClick={handleInput}>Click Me</button>
    </div>
  )
}

export default App