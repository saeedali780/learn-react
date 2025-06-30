import { React, createContext,useReducer } from 'react';

const userContext = createContext();

const UserProvider = ({children}) => {
   // const [user,setUser]  = useState("Guest");
   const userReducer = (state,action)=>{
    if(action.type=="login"){
        return action.payload
    }if(action.type=="logout"){
        return action.payload
    };
   };
   const [user,dispatch] = useReducer(userReducer,"")
  return (
    <userContext.Provider value={{user, dispatch}}>
    {children}
    </userContext.Provider>
  )
}

export {UserProvider,userContext}