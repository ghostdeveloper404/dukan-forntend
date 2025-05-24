import React, { useRef } from 'react';
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'

const Ourproduct = () => {
    const productRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
     

    const scrollToCard = (newIndex) => {
        if (productRefs.current[newIndex]) {
          productRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
          setActiveIndex(newIndex);
        }
      };
      
      const scrollNext = () => {
        const nextIndex = Math.min(Products.length - 1, activeIndex + 1);
        scrollToCard(nextIndex);
      };
      
      const scrollPrev = () => {
        const prevIndex = Math.max(0, activeIndex - 1);
        scrollToCard(prevIndex);
      };
      


    const Products = [
        { id: 1, name: 'Product 1', price: 160, stars: 5, off: "40%", link:'/Product', offprice: 120, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 2, name: 'Product 2', price: 1160, stars: 4, off: "40%", link:'/Product', offprice: 960, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 3, name: 'Product 3', price: 400, stars: 3, off: "40%", link:'/Product', offprice: 370, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 4, name: 'Product 4', price: 400, stars: 3, off: "40%", link:'/Product', offprice: 375, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 5, name: 'Product 5', price: 500, stars: 4, off: "40%", link:'/Product', offprice: 375, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 6, name: 'Product 6', price: 600, stars: 2, off: "40%", link:'/Product', offprice: 520, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 7, name: 'Product 7', price: 700, stars: 4, off: "40%", link:'/Product', offprice: 620, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 8, name: 'Product 8', price: 800, stars: 3, off: "40%", link:'/Product', offprice: 720, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 9, name: 'Product 9', price: 900, stars: 4, off: "40%", link:'/Product', offprice: 820, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 10, name: 'Product 10', price: 1000, stars: 5, off: "40%", link:'/Product', offprice: 920, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    ];

    return (
        <div >
            <div className="flex content-left pl-16  items-center mt-20">
                <div className="bg-red-500 w-6 h-10 rounded-md border-r-2 border-red-600 mr-2">
                </div>
                <h2 className="text-2xl  text-red-500">Our Products</h2>
            </div>
            <div className="flex content-left flex-wrap justify-between pl-16 items-center mt-5">

                <h1 className="text-4xl text-black font-bold ">Explore Our Products</h1>

                <div className='flex relative justify-center items-center mr-16 '>
                    <button
                       onClick={scrollPrev}
                        className="absolute right-[5rem] top-1/2 transform -translate-y-1/2 p-2 rounded-full  z-10"
                    >
                        <svg className='m-2' xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 512 512"><path fill="#000000" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248s-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg>

                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute left-[-5rem] top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10"
                    >
                        <svg className='m-2' xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 512 512"><path fill="#000000" d="M256 8c137 0 248 111 248 248S393 504 256 504S8 393 8 256S119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg>

                    </button>
                </div>


            </div>

            <div className='flex  justify-center relative  m-16 mb-2 items-center    '>
        <div id="scrollable-grid"

          style={{
            overflowX: 'scroll', 
            display: 'flex',
            width: '100%',
             scrollbarWidth: 'none', // For Firefox
             msOverflowStyle: 'none', // For Internet Explorer and Edge
          }}
          
         className='flex scroll-smooth overflow-x-scroll    scrollbar-none  gap-5   '>
          {Products.map((product ,index) => (
            <div key={product.id}
            ref={(el) => (productRefs.current[index] = el)}
            style={{ minWidth: '250px', maxWidth: '400px', height: '500px' }} // Fixed card dimensions

            className=" group  flex-shrink-0 flex-col items-center justify-center p-5 bg-white shadow-lg rounded-lg  hover:shadow-xl transition-shadow duration-300 mb-5  relative scrollbar-hide scrollbar-none  ">
              {/* Discounted Price Badge */}
              <p className="absolute  top-2 left-2 bg-red-500 text-white  text-sm font-bold px-4 py-2 rounded">
                - {product.off}
              </p>
              <div className='absolute top-2 right-0.5 flex m-4  flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className=' bg-white p-1 rounded-xl m-1' width="40" height="35" viewBox="0 0 1024 1024"><path fill="#080808" d="M287.984 114.16c31.376 0 88.094 15.008 180.094 105.616l45.616 44.912l44.928-45.632c63.872-64.896 131.84-105.2 177.376-105.2c61.408 0 109.809 21.008 157.009 68.096c44.464 44.368 68.992 103.36 68.992 166.112c.032 62.784-24.448 121.824-69.408 166.672c-3.664 3.712-196.992 212.304-358.96 387.104c-7.632 7.248-16.352 8.32-20.991 8.32c-4.576 0-13.2-1.024-20.8-8.096c-39.472-43.905-325.552-362-358.815-395.232C88.497 462.416 64 403.376 64 340.608c.015-62.752 24.511-121.728 69.04-166.144c43.295-43.264 93.984-60.304 154.944-60.304zm-.002-64c-76.528 0-144 22.895-200.176 79.008c-117.072 116.768-117.072 306.128 0 422.96c33.424 33.44 357.855 394.337 357.855 394.337c18.48 18.496 42.753 27.68 66.96 27.68c24.225 0 48.4-9.184 66.912-27.68c0 0 354.88-383.024 358.656-386.85c117.04-116.88 117.04-306.24 0-423.007c-58.112-58-123.024-86.784-202.208-86.784c-75.648 0-160 60.32-223.008 124.32C447.981 110.159 366.237 50.16 287.981 50.16z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className=' bg-white p-1 rounded-xl m-1' width="40" height="35" viewBox="0 0 32 32" fill="#080808"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"><path d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9s13 6 13 9Z"></path><path d="M21 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></path></g></svg>
              </div>
              
             <img
                src={product.image}
                alt={product.name}
                width={400}
                height={200}
                className=" p-10   w-auto h-80  object-cover rounded-lg bg-gray-300 rounded-t-lg "
              />
              <Link
                href={product.link}
                className="absolute flex-col top-80 -right-50 transform -translate-x-1/2 bg-black text-white text-sm px-40 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Details
              </Link>
            
              <h3 className="text-3xl font-semibold  mt-4 text-gray-800">{product.name}</h3>
              <div className=' m-2 flex gap-2 flex-row items-center justify-left '>
                <p className="text-2xl text-red-500 "> ${product.offprice}</p>
                <p className="text-gray-400 text-2xl line-through "> ${product.price}</p>
              </div>
              <p className="text-yellow-500 flex">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <span key={index}>
                    {index < Number(product.stars) ? (
                      // Yellow filled star SVG
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36">
                        <path fill="#ffdd00" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"></path>
                      </svg>
                    ) : (
                      // Outline or unfilled star SVG
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="#ffdd00" d="M21.995 9.933a.5.5 0 0 0-.423-.568l-6.304-.919l-2.82-5.73a.52.52 0 0 0-.896 0l-2.82 5.73l-6.304.92a.5.5 0 0 0-.278.852l4.563 4.46l-1.077 6.3a.5.5 0 0 0 .726.527L12 18.532l5.638 2.973a.506.506 0 0 0 .316.05a.5.5 0 0 0 .41-.576l-1.077-6.3l4.563-4.461a.5.5 0 0 0 .145-.285zM16.4 14.147a.501.501 0 0 0-.143.442l.95 5.558l-4.974-2.623a.506.506 0 0 0-.466 0l-4.974 2.623l.95-5.558a.501.501 0 0 0-.143-.442L3.572 10.21l5.565-.81a.501.501 0 0 0 .376-.275L12 4.07l2.487 5.054a.5.5 0 0 0 .376.274l5.565.811l-4.028 3.938z"></path>
                      </svg>
                    )}
                  </span>
                ))}

              </p>
            </div>
          ))}
        </div>
      </div>

      
      <div className='flex  justify-center relative    mx-16 mt-1 items-center    '>
        <div id="scrollable-grid"

          style={{
            overflowX: 'scroll', 
            display: 'flex',
            width: '100%',
             scrollbarWidth: 'none', // For Firefox
             msOverflowStyle: 'none', // For Internet Explorer and Edge
          }}
          
         className='flex scroll-smooth overflow-x-scroll    scrollbar-none  gap-5   '>
          {Products.map((product ,index) => (
            <div key={product.id}
            
            style={{ minWidth: '250px', maxWidth: '400px', height: '500px' }} // Fixed card dimensions

            className=" group  flex-shrink-0 flex-col items-center justify-center p-5 bg-white shadow-lg rounded-lg  hover:shadow-xl transition-shadow duration-300 mb-5  relative scrollbar-hide scrollbar-none  ">
              {/* Discounted Price Badge */}
              <p className="absolute  top-2 left-2 bg-red-500 text-white  text-sm font-bold px-4 py-2 rounded">
                - {product.off}
              </p>
              <div className='absolute top-2 right-0.5 flex m-4  flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className=' bg-white p-1 rounded-xl m-1' width="40" height="35" viewBox="0 0 1024 1024"><path fill="#080808" d="M287.984 114.16c31.376 0 88.094 15.008 180.094 105.616l45.616 44.912l44.928-45.632c63.872-64.896 131.84-105.2 177.376-105.2c61.408 0 109.809 21.008 157.009 68.096c44.464 44.368 68.992 103.36 68.992 166.112c.032 62.784-24.448 121.824-69.408 166.672c-3.664 3.712-196.992 212.304-358.96 387.104c-7.632 7.248-16.352 8.32-20.991 8.32c-4.576 0-13.2-1.024-20.8-8.096c-39.472-43.905-325.552-362-358.815-395.232C88.497 462.416 64 403.376 64 340.608c.015-62.752 24.511-121.728 69.04-166.144c43.295-43.264 93.984-60.304 154.944-60.304zm-.002-64c-76.528 0-144 22.895-200.176 79.008c-117.072 116.768-117.072 306.128 0 422.96c33.424 33.44 357.855 394.337 357.855 394.337c18.48 18.496 42.753 27.68 66.96 27.68c24.225 0 48.4-9.184 66.912-27.68c0 0 354.88-383.024 358.656-386.85c117.04-116.88 117.04-306.24 0-423.007c-58.112-58-123.024-86.784-202.208-86.784c-75.648 0-160 60.32-223.008 124.32C447.981 110.159 366.237 50.16 287.981 50.16z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className=' bg-white p-1 rounded-xl m-1' width="40" height="35" viewBox="0 0 32 32" fill="#080808"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"><path d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9s13 6 13 9Z"></path><path d="M21 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></path></g></svg>
              </div>
              
             <img
                src={product.image}
                alt={product.name}
                width={400}
                height={200}
                className=" p-10   w-auto h-80  object-cover rounded-lg bg-gray-300 rounded-t-lg "
              />
              <Link
                href="/product"
                className="absolute flex-col top-80 -right-50 transform -translate-x-1/2 bg-black text-white text-sm px-40 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Details
              </Link>
            
              <h3 className="text-3xl font-semibold  mt-4 text-gray-800">{product.name}</h3>
              <div className=' m-2 flex gap-2 flex-row items-center justify-left '>
                <p className="text-2xl text-red-500 "> ${product.offprice}</p>
                <p className="text-gray-400 text-2xl line-through "> ${product.price}</p>
              </div>
              <p className="text-yellow-500 flex">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <span key={index}>
                    {index < Number(product.stars) ? (
                      // Yellow filled star SVG
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36">
                        <path fill="#ffdd00" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"></path>
                      </svg>
                    ) : (
                      // Outline or unfilled star SVG
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="#ffdd00" d="M21.995 9.933a.5.5 0 0 0-.423-.568l-6.304-.919l-2.82-5.73a.52.52 0 0 0-.896 0l-2.82 5.73l-6.304.92a.5.5 0 0 0-.278.852l4.563 4.46l-1.077 6.3a.5.5 0 0 0 .726.527L12 18.532l5.638 2.973a.506.506 0 0 0 .316.05a.5.5 0 0 0 .41-.576l-1.077-6.3l4.563-4.461a.5.5 0 0 0 .145-.285zM16.4 14.147a.501.501 0 0 0-.143.442l.95 5.558l-4.974-2.623a.506.506 0 0 0-.466 0l-4.974 2.623l.95-5.558a.501.501 0 0 0-.143-.442L3.572 10.21l5.565-.81a.501.501 0 0 0 .376-.275L12 4.07l2.487 5.054a.5.5 0 0 0 .376.274l5.565.811l-4.028 3.938z"></path>
                      </svg>
                    )}
                  </span>
                ))}

              </p>
            </div>
          ))}
        </div>
      </div>
       <div className='m-5 left-1/2 relative bg-red-500 w-50 h-10 p-5 rounded-md border-r-2 border-red-600 flex justify-center items-center '>
                <Link href="/Allprodcts" className='text-lg font-bold  text-white'>View All Product</Link>
        </div>

        </div>
    )
}

export default Ourproduct
