import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./compnents/Nav";
import Profile from "./pages/Profile.jsx"
import Settings from "./pages/Settings.jsx"
import Products from "./pages/Products.jsx";

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
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products/:id" element={<Products/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>} >
      <Route path="profile" element={<Profile/>}/>
      <Route path="settings" element={<Settings/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>} />

    </Routes>
      {/* {state.balance}

      <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
      <button onClick={()=>dispatch({type:"add",payload: Number(amount)})}>deposit</button>
      <button onClick={()=>dispatch({type:"withdraw",payload: Number(amount)})}>withdraw</button> */}
    </BrowserRouter>
  )
}

export default App