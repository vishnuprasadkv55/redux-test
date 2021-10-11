import { createContext, useContext, useState } from "react";

const LoggedUserContext = createContext();

export const UserProvider = (props)=>{
    const [user, setUser] = useState(false);
    return <LoggedUserContext.Provider value={[user, setUser]} {...props}/>
}

export const useUser = ()=>{
    const context = useContext(LoggedUserContext)
    return context;
}