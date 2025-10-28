import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";



async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className="top flex gap-[20px]">
        <div className="info flex-1 flex flex-col justify-between ">
          <h1 className="title text-4xl">
            {data.title}
          </h1>
          <p className="desc !text-xl font-light">
            {data.desc}
          </p>
          <div className="author flex items-center gap-[20px] text-xl font-bold text-[#bbb]">
            <Image
            src={data.avatar || '/hero.png'}
            alt='author'
            width={40}
            height={40}
            className='avatar object-contain rounded-full'
            />
            <span className="username">{data.username}</span>
          </div>
        </div>
        <div className="imgCont flex-1 h-[300px] relative">
          <Image
          src={data.image && data.image.startsWith('http') ? data.image : '/hero.png'}
          alt='blog image'
          fill={true}
          className='image object-cover'
          />
        </div>
      </div>
      <div className="content mt-[50px] text-[20px] font-light text-[#999] justify-text">
        <p className="text !text-xl font-light">
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost