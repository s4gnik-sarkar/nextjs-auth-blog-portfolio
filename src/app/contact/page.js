import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: "Luna Dev Contact Information",
  description: "This is Contact Page",
};


const Contact = () => {
  return (
    <div className='contain'>
      <h1 className='title !text-5xl pb-[100px] text-center'>{`Let's Keep in Touch`}</h1>
      <div className="content flex items-center gap-[100px]">
        <div className="imgCont flex-1 h-[500px] relative">
          <Image
          src="/contact.png"
          alt="contact"
          fill={true}
          className="image object-contain  motion-translate-y-loop-[-15px] motion-scale-loop-[1.03] motion-duration-2000 motion-ease"
          />
        </div>
        <form className="form flex-1 flex flex-col gap-[20px]">
          <input type="text" placeholder='name' className='input p-[20px] bg-transparent outline-none text-[#bbb] border-3 border-solid font-bold text-xl' />
          <input type="text" placeholder='email' className='input p-[20px] bg-transparent outline-none text-[#bbb] border-3 border-solid font-bold text-xl' />
          <textarea className='textArea p-[20px] bg-transparent outline-none text-[#bbb] border-3 border-solid font-bold text-xl' placeholder='message' cols="30" rows="10"></textarea>
          <Button url="/#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact