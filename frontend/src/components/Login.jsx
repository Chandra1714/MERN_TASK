import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Login.css'
const Login = () => {
  const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [msg,setmsg]=useState("")
  
    const handleSubmit =async(e)=>{
      e.preventDefault();
    try{
      const res = await axios.post("http://localhost:3000/auth/login",{email,password})
      setmsg(res.data.message);
      console.log("Token from backend",res.data.token)
      localStorage.setItem("token",res.data.token)
  
      setmsg("Login Successful Token saved")
    }
    catch(error){
      setmsg(error.message)
    }
  }
  return (
    <div>
      <form onClick={handleSubmit}>
        <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/><br /><br />
        <input type="text" placeholder='Enter your pssword'  value={password} onChange={(e)=>setpassword(e.target.value)}/><br /><br />
        <button type='submit'>Submit</button>
      </form>
      {msg && <p className={msg.toLowerCase().includes("success") ? "success" : "error"}>{msg}</p>}

    </div>
  )
}

export default Login
