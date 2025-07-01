import { useState } from "react"

const UseDisplayMessage = () => {
    const [message,setMessage] = useState("This is a Message")
  const displayMessage = ()=>{
    console.log("This is from DisplayMessage ")
  }
  return [message,displayMessage]
}

export default UseDisplayMessage