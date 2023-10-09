import { UserContext } from "../../context/userData"
import {useContext, useState} from 'react'


export const Register = ()=>{

    const{
        name, 
        surname, 
        handleChangeUser
    } = useContext(UserContext)

    const [userName, setUsername] = useState(name)
    const [userSurname, setUserSurname] = useState(surname)

    const handleUpdateUser = ()=>{

        handleChangeUser(userName, userSurname)
        
        setUserSurname('')
        setUsername('')
    }


    return(

        <>
            <main>

                <input 
                    value={userName}
                    onChange={(e)=> setUsername(e.target.value)}
                /> <br />

                <input 
                    value={userSurname}
                    onChange={(e)=>setUserSurname(e.target.value)}
                />
                
                <br />
                <button onClick={handleUpdateUser}>Register</button>

            </main>
        </>
    )
}