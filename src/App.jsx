import React, {useReducer } from 'react';

const App = () => {
  const [state,disptach] = useReducer(reducer,{count:0});
  function reducer(state,action){
    if (action.type == 'increament') {
    //  return state + action.payload;
    return {...state,count: state.count + action.payload }
    }
    if (action.type == 'decreament') {
      return  {...state,count: state.count - action.payload } //state - action.payload;
    }
  }
  return (
    <div>
        <h1> {state.count}</h1>
      <button onClick={()=> disptach({type: "increament", payload: 1})}>Increment Count</button>
      <button onClick={()=> disptach({type: "decreament", payload: 1})}>Decreament Count</button>
    </div>
  )
}

export default App