import React from "react";
import Checkout from "./compnents/Checkout";
import Login from "./compnents/Login";
import { UserProvider } from "./context/UserContext";
import Logout from "./compnents/Logout";


const App = () => {


  return (

    <div>
      <UserProvider>
      <Login/>
      <Checkout  />
      <Logout/>
      </UserProvider>
    </div>
  )
}

export default App