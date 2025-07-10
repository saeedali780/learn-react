import React from 'react'
import { useFormStatus } from 'react-dom';

const App = () => {
  const handleSubmit = async ()=>{
    await new Promise(res=>setTimeout(res,5000))
    console.log("Submited");
  };
  function CustomerForm(){
    const {pending} = useFormStatus();
    console.log(pending);
    
    return(
      <div>
      <input type="text" placeholder='Enter Name'/>
      <br/><br/>
      <input type="password" placeholder='Enter Password'/>
      <br/><br/>
      <button disabled={pending}>{pending?"Submiting...":"Submit" }</button>
      </div>
    )
  }
  
  return (
    <div>
      <h1>useFormStatus Hook in ReactJs 19</h1>
      <form action={handleSubmit}>
      <CustomerForm />
      </form>
    </div>
  )
}

export default App