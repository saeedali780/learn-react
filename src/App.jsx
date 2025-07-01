import React from "react";
import Checkout from "./compnents/Checkout";
import Login from "./compnents/Login";
import { UserProvider } from "./context/UserContext";
import Logout from "./compnents/Logout";
import UseDisplayMessage from "./hooks/UseDisplayMessage";


const App = () => {
  const [message,displayMessage]= UseDisplayMessage()
  displayMessage()
  return (

    <div>
   <h1>{message}</h1>
    </div>
  )
}

export default App