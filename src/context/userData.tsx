import { ReactNode, createContext, useState } from "react";

interface UserProviderProps{
    children: ReactNode
}

type UserContextData={
    name: string 
    surname: string 
    handleChangeUser: (name: string, surname: string)=> void
}

export const UserContext = createContext({} as UserContextData)

export const UserProvider = ({children}: UserProviderProps)=>{

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const handleChangeUser = (name: string, surname: string)=>{
        setName(name)
        setSurname(surname)
    }

    return(
        <UserContext.Provider 
            value={{
                name, surname,
                handleChangeUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}