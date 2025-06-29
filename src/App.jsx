import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";


// import { useState, useReducer } from 'react';


const App = () => {
  // const [state,dispatch] = useReducer(reducer,{balance: 0});
  // const [amount,setAmount] = useState(0)
  // function reducer(state,action){
  //   if(action.type == 'add'){
  //     return {...state,balance:state.balance + action.payload}
  //   }
  //   if(action.type == 'withdraw'){
  //     return {...state, balance: state.balance - action.payload}
  //   }
  // }

  return (

    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>
      {/* {state.balance}

      <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
      <button onClick={()=>dispatch({type:"add",payload: Number(amount)})}>deposit</button>
      <button onClick={()=>dispatch({type:"withdraw",payload: Number(amount)})}>withdraw</button> */}
    </BrowserRouter>
  )
}

export default App