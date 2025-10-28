"use client"
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const links = [
    {
        id:1,
        title: "Home",
        url: "/",
    },
    {
        id:2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id:3,
        title: "Blog",
        url: "/blog",
    },
    {
        id:4,
        title: "About",
        url: "/about",
    },
    {
        id:5,
        title: "Contact",
        url: "/contact",
    },
    {
        id:6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    const session = useSession();

  return (
    <div className="h-[100px] flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">lamamia</Link>
        <div className="flex items-center gap-[20px]">
            <DarkModeToggle/>
            {links.map((link) => (
                <Link key={link.id} href={link.url} className="link">{link.title}</Link>
            ))}
            {session.status === "authenticated" && (
            
                <button className="px-2.5 border-none bg-[#53c28b] cursor-pointer rounded-sm text-[#ffff] w-max" onClick={signOut}>Logout</button>
            )}
        </div>
    </div >
  )
}

export default Navbar