"use client"
import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import { items } from "./data.js";
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat]

  if(data){
    return data
  }
  return notFound()
}

const Category = ({params}) => {
  const resolvedParams = React.use(params)
  // console.log(resolvedParams)
  const data = getData(resolvedParams.category)
  return (
    <div>
      <h1 className="catTitle text-[#53c28b]">{resolvedParams.category}</h1>

      {data.map((item) => (
      <div className="item_cats flex gap-[50px] mt-[50px] mb-[100px]" key = {item.id}>
        <div className="content flex-1 flex flex-col gap-[20px] justify-center">
          <h1 className="title !text-5xl">{item.title}</h1>
          <p className="desc !text-[20px]">{item.desc}</p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className='imgCont flex-1 h-[500px] relative'>
          <Image 
          src={item.image}
          alt='image'
          fill={true}
          className='object-cover'
          />
        </div>
      </div>
      ))}
    </div>
  )
}

export default Category