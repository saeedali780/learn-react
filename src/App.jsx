import { Alert, Button } from 'react-bootstrap';
import React, { useState } from 'react';

const App = () => {
  const [count,setCount] = useState(0)
  return (
    <>
    <h1>Hello React Bootstrap</h1>
    <Alert variant='success'>Hello, react-bootstrap installed</Alert>
    <h1>count: {count}</h1>
      <Button onClick={()=> setCount(count+1)} variant='success'>Increament</Button>
      <Button  onClick={()=> setCount(count-1)}  variant='danger'>Deacreament</Button>
      <Button  onClick={()=> setCount(0)}  variant='warning'>Clear</Button>
    </>

  )
}

export default App