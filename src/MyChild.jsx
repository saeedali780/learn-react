import React from 'react'

const MyChild = ({myFun,myName}) => {
  return (
    <div>
      <button onClick={()=>myFun(myName)}>Display Name</button>
    </div>
  )
}

export default MyChild