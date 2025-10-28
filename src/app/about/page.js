import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
      <div className='w-[100%] h-[300px] relative'>
        <Image
        src= "https://images.pexels.com/photos/7230344/pexels-photo-7230344.jpeg"
        fill={true}
        alt='About Cover Picture'
        className='object-cover grayscale-100 rounded-2xl'
        />
        <div className="absolute bottom-[20px] bg-[#53c28b] px-[15px] text-white opacity-85 rounded-sm">
          <h1 className="imgTitle">Digital Storytellers</h1>
          <h2 className="imgDesc">
            Handwriting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="textCont flex gap-[100px]">
        <div className="item flex-1 mt-[50px] flex flex-col gap-[2.5px]">
          <h1 className='title'>Who Are We?</h1>
          <p className='desc text-lg font-light text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor aperiam dolorum magnam ratione id ipsum possimus error deserunt sapiente. Nulla eius eos enim harum, repudiandae in cumque illum libero natus architecto reprehenderit fuga, ut pariatur eveniet aspernatur. Molestiae atque repellat sequi laborum 
            <br />
            <br />
            corrupti cumque ducimus aliquam? Fugit magni explicabo dolorum alias velit nihil sint, illum corrupti perspiciatis obcaecati ullam commodi modi molestias magnam soluta officia atque. Fuga, officia tempore.
          </p>
        </div>
        <div className="item flex-1 mt-[50px] flex flex-col gap-[2.5px]">
          <h1 className='title'>What We Do?</h1>
          <p className='desc text-lg font-light text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor aperiam dolorum magnam ratione id ipsum possimus error deserunt sapiente. Nulla eius eos enim harum, repudiandae in cumque illum libero natus architecto reprehenderit fuga, ut pariatur eveniet aspernatur. Molestiae atque repellat sequi laborum 
            <br />
            <br />
            corrupti cumque ducimus aliquam? Fugit magni explicabo dolorum alias velit nihil sint, illum corrupti perspiciatis obcaecati ullam commodi modi molestias magnam soluta officia atque. Fuga, officia tempore.
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About