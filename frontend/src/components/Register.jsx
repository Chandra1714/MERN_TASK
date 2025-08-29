import React, { useState } from 'react'
import axios from"axios"
import './Register.css'

const Register = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [msg,setmsg]=useState("")

  const handleSubmit =async(e)=>{
    e.preventDefault();
  try{
    const res = await axios.post("http://localhost:3000/auth/register",{email,password})
    setmsg(res.data.message);
  }
  catch(error){
    setmsg(error.message)
  }
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your Name'  value={email} onChange={(e)=>setemail(e.target.value)}/><br /><br />
        <input type="text" placeholder='Enter your email'  value={password} onChange={(e)=>setpassword(e.target.value)}/><br /><br />
        <input type="text" placeholder='Enter your pssword' /><br /><br />
        <button type='submit'>Register</button>
        </form>
      {msg && <p className={msg.toLowerCase().includes("success") ? "success" : "error"}>{msg}</p>}

    </div>
  )
}

export default Register
