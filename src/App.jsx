import React,{useState} from 'react';

const App = () => {
  const [toggle,setToggle] = useState(false);
  const [value,setValue] = useState('');
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setValue('') }>Clear</button>
        {toggle && value ? <h1>{value}</h1> : <h1>Please enter a value</h1>}
     
      
    </div>
  )
}

export default App