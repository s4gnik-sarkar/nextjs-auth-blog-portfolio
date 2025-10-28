import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div>
      <h1 className="selectTitle mx-[20px] my-[0px]">Choose a gallery</h1>
      <div className="items flex gap-[50px] pt-[30px]">
        <Link href="/portfolio/illustrations" className="item group border-[5px] border-solid border-[#bbb] rounded-sm w-[300px] h-[400px] relative bg-[url('/illustration.png')] bg-cover hover:scale-[1.05] transition-all duration-300 ease-in-out">
          <span className='title absolute right-[10px] bottom-[10px] text-[40px] font-bold text-[#bbb] group-hover:text-[#53c28b]'>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className="item group border-[5px] border-solid border-[#bbb] rounded-sm w-[300px] h-[400px] relative bg-[url('/websites.jpg')] bg-cover hover:scale-[1.05] transition-all duration-300 ease-in-out">
          <span className='title absolute right-[10px] bottom-[10px] text-[40px] font-bold text-[#bbb] group-hover:text-[#53c28b]'>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className="item group border-[5px] border-solid border-[#bbb] rounded-sm w-[300px] h-[400px] relative bg-[url('/apps.jpg')] bg-coverbg-[url('/illustration.png')] bg-cover hover:scale-[1.05] transition-all duration-300 ease-in-out">
          <span className='title absolute right-[10px] bottom-[10px] text-[40px] font-bold text-[#bbb] group-hover:text-[#53c28b]'>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio