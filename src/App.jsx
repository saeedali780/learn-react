import React,{useState} from 'react';
import User from './User';


const App = () => {
  const [user,setUser] = useState({
    name:'John',
    age:20,
    city:'New York'
  });
  return (
    <div>
      <User user={user} setUser={setUser}/>
    </div>
  )
}

export default App