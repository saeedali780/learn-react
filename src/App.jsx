import React from "react";
import Checkout from "./compnents/Checkout";
import Login from "./compnents/Login";
import { UserProvider } from "./context/UserContext";
import Logout from "./compnents/Logout";
import UseDisplayMessage from "./hooks/UseDisplayMessage";


const App = () => {
  
  return (

    <div>
      <Login/>
    </div>
  )
}

export default App