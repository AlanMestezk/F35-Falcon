
import { useEffect, useState } from 'react'
import './App.css'
import {  UserProvider } from './context/userData'
import { UserApp } from './components/user'
import { Register } from './components/register'

function App() {
  const [showUser, setShowUser] = useState(true)
  const [registerUser, setRegisterUser] = useState(true)

  const handleShow = ()=>{
    if(showUser){
      setShowUser(false)
    }else{
      setShowUser(true)
    }
  }

  const handleRegister= ()=>{
    if(registerUser){
      setRegisterUser(false)
    }else{
      setRegisterUser(true)
    }
  }


  return (
    <UserProvider>

      <strong>Olá</strong>
      <br />
      <br />
      <button onClick={handleShow}>
        {showUser ? "Show" : "Back"}
      </button>
      <button onClick={handleRegister}>Register</button>

      {
        showUser ?
        (
          <div>
            <h1>...</h1>
          </div>
        ):(
          <div>
            <UserApp/>
          </div>
        )
      }

      {
        registerUser ? 
        (
          <div>
            ****
          </div>

        ):(
          <div>
            <Register/>
          </div>

        )
      }

    </UserProvider>
  )
}

export default App
