import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import {Routes,Link,Route } from 'react-router-dom'
import Register from './components/Register'


function App() {
  

  return (
    <>
      <nav>
           <Link to="/register">Register</Link>
            <Link to="/Login">Login</Link>
      </nav>
 
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
    </Routes>
    </>

  
  )
}

export default App
