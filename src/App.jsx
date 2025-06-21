import React, {act, useReducer } from 'react';

const App = () => {
  const [state,disptach] = useReducer(reducer,{count: 0, inreamentByValue: 1, decreamentByValue:1 });
  function reducer(state,action){
    if (action.type == 'increament') {
    //  return state + action.payload;
    return {...state,count: state.count + action.payload }
    }
    if (action.type == 'decreament') {
      return  {...state,count: state.count - action.payload } //state - action.payload;
    }
    if(action.type === "setIncreament"){
      return {...state, inreamentByValue: action.payload}
    }
    if(action.type === "setDecreament"){
      return {...state, decreamentByValue: action.payload}
    }
  }
  return (
    <div>
        <h1> {state.count}</h1>
        <label>Increament By:</label>
        <input type="text" value={state.inreamentByValue} onChange={(e)=> disptach({type: "setIncreament", payload: Number(e.target.value)})} />
        <br /><br />
        <label>Decreament By: </label>
        <input type="text" value={state.decreamentByValue} onChange={(e)=> disptach({type: "setDecreament", payload: Number(e.target.value)})} />
        <br />
      <button onClick={()=> disptach({type: "increament", payload: state.inreamentByValue})}>Increment Count</button>
      <button onClick={()=> disptach({type: "decreament", payload: state.decreamentByValue})}>Decreament Count</button>
    </div>
  )
}

export default App