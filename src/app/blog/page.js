import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button/Button'

const blogposts = [
  { img: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg' },
  { img: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg' },
  { img: 'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg' },
  // Add more blogs image here
]

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const Blog = async ({params}) => {
  const data = await getData(); // Replace with fetched data if needed

  function getRandomImage() {
    return blogposts[Math.floor(Math.random() * blogposts.length)].img;
  }

  return (
  <div>
    <h1 className="blogHead !text-4xl px-8">Our Blogs</h1>
  <div className="w-full py-8 px-2 md:px-8">
    <h1 className="catTitle mb-8 text-[#53c28b] text-3xl font-bold text-center capitalize">
      {params.category}
    </h1>
    <div className="flex flex-col gap-8 w-full">
      {data.map((item) => (
        <Link href={`/blog/${item._id}`}
          className="
            group
            flex flex-col md:flex-row gap-8 w-full
            rounded-xl shadow-lg bg-white/10
            hover:shadow-2xl hover:bg-white/20 transition-all duration-300
            overflow-hidden
            no-underline
          "
          key={item._id}
        >
          <div className='imgCont relative w-full md:w-1/3 min-h-[220px]'>
            <Image
              src={item.image && item.image.startsWith('http') ? item.image : getRandomImage()}
              alt={"blog image"}
              fill
              className='object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none group-hover:scale-105 transition-transform duration-300'
              priority={true}
            />
          </div>
          <div className="content flex-1 flex flex-col gap-5 justify-center px-4 py-6 w-full">
            <h2 className="title text-2xl md:text-4xl font-extrabold text-[#333] mb-2 group-hover:text-[#53c28b] transition-colors">
              {item.title}
            </h2>
            <p className="desc text-[16px] md:text-[18px] text-[#555] group-hover:text-[#9ea1a3]">
              {item.desc}
            </p>
            {/* <Button text="Read More" url={`/blog/${item._id}`} /> */}
          </div>
        </Link>
      ))}
    </div>
  </div>
  </div>
);
};

export default Blog;
