import React, { useState } from 'react'

const UseLocalStorage = () => {
    const  [userName,setUserName] = useState(()=>getUser())
function setUser(value){
    localStorage.setItem("userName",value)
 }
 function getUser() {
  const user =   localStorage.getItem("userName");
  return user;
 }
 return [userName,setUser]
}

export default UseLocalStorage