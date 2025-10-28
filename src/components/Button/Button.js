import Link from 'next/link'
import React from 'react'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
    <button className='p-3 border-none bg-[#53c28b] cursor-pointer rounded-sm text-[#ffff] w-max'>{text}</button>
    </Link>
  )
}

export default Button