import React, { Suspense, use } from 'react';
const fetchData = ()=> fetch('https://dummyjson.com/users').then((response)=> response.json());
//console.log(fetchData());

const userResource = fetchData()

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
      <User userResource={userResource} />
      </Suspense>
    </div>
  )
}

export default App;


const User = ({userResource})=>{
 
  const userData = use(userResource);
  const users = userData.users;
  console.log(users);
  
  return(
      <div>
      {users.map((user)=>(
        <h1 key={user.ids}>{user?.lastName}</h1>
      ))}
      </div>
  )
}