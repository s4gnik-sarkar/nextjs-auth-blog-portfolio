"use client"
import { useRouter } from 'next/navigation'

import Link from 'next/link'
import React, { useState } from 'react'

const Register = () => {

  const [err,setErr] = useState(false)
  
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

  try {
    
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name,email,password})
    })

    res.status === 201 && router.push("/dashboard/login?success=Account has been created")
  } catch (err) {
    setErr(true)
  }

  }
  return (
    <div className='flex flex-col gap-[20px] items-center justify-center'>
      <form action="" className="form w-[300px] flex flex-col gap-[20px]" onSubmit={handleSubmit}> 
        <input type="text" placeholder='username' className="input_reg" required />
        <input type="email" placeholder='email' className="input_reg" required />
        <input type="password" placeholder='password' className="input_reg" required />
        <button className="w-[300px] p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-[5px] text-[#eee] font-bold">Register</button>
      </form>
      {err && "Something went wrong!"}
      <Link href="/dashboard/login" className="underline text-blue-600">Login with an existing account</Link>
    </div>
  )
}

export default Register