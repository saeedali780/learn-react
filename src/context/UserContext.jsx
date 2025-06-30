import { React, createContext,useReducer } from 'react';

const userContext = createContext();

const UserProvider = ({children}) => {
   // const [user,setUser]  = useState("Guest");
   const userReducer = (state,action)=>{
    if(action.type=="login"){
        return {user:action.payload}
    }if(action.type=="logout"){
        return {user:action.payload}
    };
   };
   const [state,dispatch] = useReducer(userReducer,{user:null,})
  return (
    <userContext.Provider value={{...state, dispatch}}>
    {children}
    </userContext.Provider>
  )
}

export {UserProvider,userContext}