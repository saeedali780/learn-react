import React, {useReducer } from 'react';

const App = () => {
  const [state,disptach] = useReducer(reducer,0);
  function reducer(state,action){
    if (action.type == 'increament') {
      return state + action.payload;
    }
    if (action.type == 'decreament') {
      return state - action.payload;
    }
  }
  return (
    <div>
        <h1> {state}</h1>
      <button onClick={()=> disptach({type: "increament", payload: 1})}>Increment Count</button>
      <button onClick={()=> disptach({type: "decreament", payload: 1})}>Decreament Count</button>
    </div>
  )
}

export default App