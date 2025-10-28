"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import React from 'react'
// import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {

  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", { email, password })

  }
  return (
    <div className='flex flex-col gap-[20px] items-center justify-center'>
      <form action="" className="form w-[300px] flex flex-col gap-[20px]" onSubmit={handleSubmit}> 
        
        <input type="email" placeholder='email' className="input_reg" required />
        <input type="password" placeholder='password' className="input_reg" required />
        <button className="w-[300px] p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-[5px] text-[#eee] font-bold">Login</button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login