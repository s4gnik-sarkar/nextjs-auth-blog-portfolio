import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-[50px] flex items-center justify-between'>
        <div>©2025 Lamamia. All rights reserved.</div>
        <div className='flex items-center gap-[10px]'>
          <Image src="/facebook.png" alt="Sagnik's FB" width={18} height={18} className='opacity-0.6 cursor-pointer'/>
          <Image src="/instagram.png" alt="Sagnik's IG" width={18} height={18} className='opacity-0.6 cursor-pointer'/>
          <Image src="/linkedin.png" alt="Sagnik's LI" width={18} height={18} className='opacity-0.6 cursor-pointer'/>
          <Image src="/youtube.png" alt="Sagnik's YT" width={18} height={18} className='opacity-0.6 cursor-pointer'/>
          <Image src="/twitter.png" alt="Sagnik's X" width={18} height={18} className='opacity-0.6 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Footer