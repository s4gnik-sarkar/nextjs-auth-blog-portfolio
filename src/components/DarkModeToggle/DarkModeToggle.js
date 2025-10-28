"use client"
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const DarkModeToggle = () => {


  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className='w-[42px] h-[24px] border-[1.5px] border-solid border-[#53c28b70] rounded-[30px] p-[2px] flex items-center justify-between cursor-pointer relative ' onClick={toggle}>
      <div className="icon text-[12px]">🌙</div>
      <div className="icon text-[12px]">☀️</div>
      <div className={`ball w-[15px] h-[15px] bg-[#53c28b] rounded-full absolute ${mode === "light" ? "left-[2px]" : "right-[2px]"}`} />
    </div>
  )
}

export default DarkModeToggle