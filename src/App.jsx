import { useState, useReducer } from 'react';

const App = () => {
  const [state,dispatch] = useReducer(reducer,{balance: 0});
  const [amount,setAmount] = useState(0)
  function reducer(state,action){
    if(action.type == 'add'){
      return {...state,balance:state.balance + action.payload}
    }
    if(action.type == 'withdraw'){
      return {...state, balance: state.balance - action.payload}
    }
  }

  return (

    <div>
      {state.balance}

      <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
      <button onClick={()=>dispatch({type:"add",payload: Number(amount)})}>deposit</button>
      <button onClick={()=>dispatch({type:"withdraw",payload: Number(amount)})}>withdraw</button>
    </div>
  )
}

export default App