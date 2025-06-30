import React from "react";
import Checkout from "./compnents/Checkout";
import Login from "./compnents/Login";
import { UserProvider } from "./context/UserContext";


const App = () => {


  return (

    <div>
      <UserProvider>
      <Login/>
      <Checkout  />
      </UserProvider>
    </div>
  )
}

export default App