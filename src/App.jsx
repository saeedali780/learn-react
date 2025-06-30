import React, { createContext, useState } from "react";
import Checkout from "./compnents/Checkout";
import Login from "./compnents/Login";
export  const userContext = createContext();

const App = () => {
  const [user,setUser]  = useState("Guest")

  return (

    <div>
   
      <userContext.Provider value={{user,setUser}}>
      <Login/>
      <Checkout  />
      </userContext.Provider>
   
    </div>
  )
}

export default App