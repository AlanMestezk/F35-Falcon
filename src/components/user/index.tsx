import { useContext} from "react"
import { UserContext } from "../../context/userData"


export const UserApp = ()=>{

    const {
        name, surname
        
    } = useContext(UserContext)

    return(
        <>
            <main>
            <hr /><br /><hr />

                <h2>REGISTERED USER</h2>
                <strong>*Name* <br /> {name}</strong>
                <br />
                <br />
                <strong>*Surname* <br /> {surname}</strong>
                <br />

                <hr /><br /><hr />
            </main>
        </>
    )
}