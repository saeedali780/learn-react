import React, { useRef, useState } from 'react'

const App = () => {

  const userNameRef = useRef();
  const userPasswordRef = useRef();




  const [username,setUserName] = useState("");
  const [userPassword,setUserPassword] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault()
    const user = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    console.log(user,password);
  };
  const controledHandler = (e)=>{
    e.preventDefault();
    console.log(username,userPassword);
  }
  const submitHandlerRef = (e)=>{
    e.preventDefault();
    const user  = userNameRef.current.value;
    const password = userPasswordRef.current.value;
    console.log(user,password);
    
    
  }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={submitHandler}>

        <input type="text" id='username'  placeholder='enter user name'/>
        <br/><br/>
        <input type="password" id='password'  placeholder='enter user password'/>
        <br/><br/>
        <button>
          Submit
        </button>
      </form>
      <hr/>

      <h1>Uncontrolled Component with UseRef</h1>
      <form onSubmit={submitHandlerRef}>
        <input ref={userNameRef} type="text"   placeholder='enter user name'/>
        <br/><br/>
        <input ref={userPasswordRef} type="password"  placeholder='enter user password'/>
        <br/><br/>
        <button>
          Submit with ref
        </button>
      </form>
      <hr/>

<h1>controlled Component</h1>
<form onSubmit={controledHandler}>
  <input type="text"  onChange={(e)=>setUserName(e.target.value)}  placeholder='enter user name'/>
  <br/><br/>
  <input type="password" onChange={(e)=>setUserPassword(e.target.value)}  placeholder='enter user password'/>
  <br/><br/>
  <button>
    Submit
  </button>
</form>
    </div>
  )
}

export default App