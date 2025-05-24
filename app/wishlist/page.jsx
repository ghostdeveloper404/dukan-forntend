'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
import { useState } from 'react';

const page = () => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (scrollRef.current) {
        setIsOverflowing(scrollRef.current.scrollWidth > scrollRef.current.clientWidth);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);


  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Adjust scroll amount as needed
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  const Wishlist = [
    { id: 1, name: 'Product 1', price: 160, stars: 5, off: "40%", link: '/Product', offprice: 120, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    { id: 2, name: 'Product 2', price: 1160, stars: 4, off: "40%", link: '/Product', offprice: 960, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    { id: 3, name: 'Product 3', price: 400, stars: 3, link: '/Product', offprice: 370, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    { id: 4, name: 'Product 4', price: 400, stars: 2, off: "60%", link: '/Product', offprice: 370, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },

  ];

  return (
    <div className='w-full h-full'>
      <div className='m-10 mb-30 flex flex-col justify-center  content-center items-center   gap-4'>
        <div className='flex justify-between gap-4 w-full   items-center  p-8'>
          <h1 className='text-4xl font-bold'>Wishlist</h1>
          <button className=' text-neutral-950 border-2 hover:shadow-lg hover:font-bold text-lg px-4 py-2 rounded'>Add to Cart</button>
        </div>
        <div className="relative w-full flex items-center">
          {isOverflowing && (
            <button
              className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-200"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              onClick={() => scroll('left')}
            >
              <svg width="24" height="24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

          )}
          <div
            ref={scrollRef}
            style={{
              scrollBehavior: 'smooth', scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none',
            }}
            className='flex flex-row scrollbar-none  gap-6 ml-5  mr-6 relative w-full justify-center items-center overflow-x-scroll'>
            {Wishlist.map((product, index) => (
              <div key={product.id} className="product-card flex flex-shrink-0 flex-col relative justify-center bg-neutral-300 items-center hover:bg-white  shadow-6xl rounded-lg p-4 ">
                <p className="absolute  top-4 left-4 bg-red-500 text-white  text-sm font-bold px-4 py-2 rounded-2xl">
                  -{product.off}
                </p>
                <div className='absolute top-4 bg-neutral-300 rounded-full right-4 flex p-3 m-2 hover:bg-white  flex-col justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#000000"><path fill="#000000" d="m6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"></path></svg>
                </div>
                <div className='bg-neutral-400 hover:underline gap-2 rounded-2xl flex flex-col justify-end items-center w-60 h-50 '>
                  <img src={product.image} alt={product.name} className='w-32 h-32 object-cover' />
                  <div className=' justify-center items-center rounded-b-2xl py-2 gap-3.5 w-full bg-black flex flex-row text-red-500 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#ffffff"><path fill="#ffffff" d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z"></path></svg>
                    Add all to cart
                  </div>
                </div>
                <h2 className='text-lg mt-4 font-semibold'>{product.name}</h2>
                <div className='flex flex-row gap-2'>
                  <p className=' text-red-500'> ${product.offprice}</p>
                  <p className='text-neutral-500 line-through '> ${product.price}</p>
                </div>
              </div>

            ))}

          </div>
          {isOverflowing && (
            <button
              className="absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-200"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              onClick={() => scroll('right')}
            >
              <svg width="24" height="24" fill="none"><path d="M9 6l6 6-6 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          )}
        </div>

        <div className='flex justify-between items-center gap-240 mt-10'>
          <div className="flex flex-row justify-center items-center">
            <div className="bg-red-500 w-6 h-10 rounded-md border-r-2 border-red-600 mr-2">
            </div>
            <h2 className="text-2xl  text-red-500">Just for you</h2>
          </div>
          <div className="flex flex-row justify-center items-center">
            <button className=' text-neutral-950 border-2 hover:shadow-lg hover:font-bold text-lg px-4 py-2 rounded'>See all</button>
          </div>
        </div>

        <div

          className='flex flex-row scrollbar-none  gap-6 ml-5  mr-6 relative w-full justify-center items-center overflow-x-hidden'>
          {Wishlist.map((product, index) => (
            <div key={product.id} className=" flex flex-shrink-0 flex-col relative justify-center bg-neutral-300 items-center hover:bg-white  shadow-6xl rounded-lg p-4 ">
              <p className="absolute  top-4 left-4 bg-red-500 text-white  text-sm font-bold px-4 py-2 rounded-2xl">
                -{product.off}
              </p>
              <Link href={product.link} className='absolute top-4 bg-neutral-300 rounded-full right-4 flex p-1 m-1 hover:bg-white  flex-col justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000000"><path fill="#000000" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9Z"></path></svg>
              </Link>
              <div className='bg-neutral-400 hover:underline gap-2 rounded-2xl flex flex-col justify-end items-center w-60 h-50 '>
                <img src={product.image} alt={product.name} className='w-32 h-32 object-cover' />
                <Link href="/Product" className=' justify-center items-center rounded-b-2xl py-2 gap-3.5 w-full bg-black flex flex-row text-red-500 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#ffffff"><path fill="#ffffff" d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z"></path></svg>
                  Add all to cart
                </Link>
              </div>
              <h2 className='text-lg mt-4 font-semibold'>{product.name}</h2>
              <div className='flex flex-row gap-2'>
                <p className=' text-red-500'> ${product.offprice}</p>
                <p className='text-neutral-500 line-through '> ${product.price}</p>
              </div>
            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

export default page
