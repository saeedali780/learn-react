import React from 'react'
import { useActionState } from 'react'

const App = () => {
  const handleSubmit = async (previousData,formData)=>{
    let name = formData.get("name");
    let password = formData.get("password");
  
    await new Promise(res=>setTimeout(res,2000))
    // console.log("handleSubmit called",name,password);
    if (name && password) {
      return {message:"Data Submitted",password,name}
    }else{
      return {error:"Failed to Submit Enter Valid Data",password,name}
    }  
  }
  const [data,action,pending] = useActionState(handleSubmit,undefined);
  console.log(data);
  return (
    <div>
      <h1>useActionState Hook</h1>
      <form action={action}>
        <input type="text" name='name' placeholder='Enter Name'/>
        <br/><br/>
        <input type="password" name='password' placeholder='Enter Password'/>
        <br/><br/>
        <button disabled={pending}>{pending?"Submiting...":"Submit"}</button>
        <br/><br/>
      </form>
      {data?.message && <span style={{color:"green"}}>{data.message}</span>}
      {data?.error && <span  style={{color:"red"}}>{data.error}</span>}
      {data?.message && (
        <>
          <h1>My Data:</h1>
          <h4>Name: {data.name}</h4>
          <h4>Password: {data.password}</h4>
        </>
      )}
    </div>
  )
}

export default App