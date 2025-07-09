import React from 'react';
import MyChild from './MyChild';


const App = () => {
 const myFun = (userName)=>{
  alert(userName)
 }
  return (
    <div>
      <h1>Hey From Parent Component</h1>
    <MyChild myFun={myFun} myName="Muhammad " />
    <MyChild myFun={myFun} myName=" Ali" />
    <MyChild myFun={myFun} myName="Khan" />
    <MyChild myFun={myFun} myName="Boss" />
    <MyChild myFun={myFun} myName="Haider Ali" />
    </div>
  )
}

export default App