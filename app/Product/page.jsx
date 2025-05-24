"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [activeSection, setActiveSection] = useState('Image1');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);


   const Wishlist = [
    { id: 1, name: 'Product 1', price: 160, stars: 5, off: "40%", link: '/Product', offprice: 120, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    { id: 2, name: 'Product 2', price: 1160, stars: 4, off: "40%", link: '/Product', offprice: 960, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    { id: 3, name: 'Product 3', price: 400, stars: 3, link: '/Product', offprice: 370, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    { id: 4, name: 'Product 4', price: 400, stars: 2, off: "60%", link: '/Product', offprice: 370, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },

  ];

  const Product = [
    {
      image1: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc',
      image2: 'https://imgs.search.brave.com/a0eGVcQO6o37b1cNe3o2-uP1K6p6vigNr9ZD_JQfZQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgw/MDcwNTE4L3Bob3Rv/L3N0YWNrLW9mLWNs/b3RoZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXY5YWdy/UG5yb1JBUjMxMlBO/REtnVDV2OHEtZ21Z/Snk2S1NRcnJwV2Uz/ZUk9',
      image3: 'https://imgs.search.brave.com/NAvy1LTl09e54Zbio2iytmOI6jkztwvc3AG2ThdLYvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/Njk2Nzk3L3Bob3Rv/L2hlYXAtb2YtZm9s/ZGVkLWNsb3RoZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXlKODBORkNCRW5a/QS1ZVGxRVzBwN3Vx/a0ljbkR5LWdadVVY/M2ROX3lpVFU9',
      image4: 'https://imgs.search.brave.com/sVdNTKDF-4O69u73lClSR4TXChIAZN9ag9Mwf8DkVDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMS56/ZXJvY2hhbi5uZXQv/U3RyYXcuSGF0LlBp/cmF0ZXMuNjAwLjM3/OTI3NTMuanBn',
      Name: 'Product Name',
      price: 200,
      off: "40%",
      offprice: 120,
      stars: 4,
      review: 50,
      available: 20,
      inStock: true,
      "colors": ["black", "red", "blue"],
      "sizes": ["S", "M", "L", "XL"],
      discription: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }

  ]

  return (
    <div>
      {Product.map((item, index) => (
        <div key={index} className='flex flex-row gap-6 w-full  mt-16 p-2 items-start justify-center '>
          <div className='flex flex-col gap-2 w-auto   items-center  p-8'>
            <button onClick={() => setActiveSection('Image1')} className='w-32 h-full  m-1 bg-neutral-300 rounded-lg shadow-6xl '>
              <img className='w-30 h-30 rounded-2xl p-2 m-1' src={item.image1} alt={Product.Name} />
            </button>
            <button onClick={() => setActiveSection('Image2')} className='w-32 h-full m-1 bg-neutral-300 rounded-lg shadow-6xl'>
              <img className='w-30 h-30 rounded-2xl p-2 m-1' src={item.image2} alt={Product.Name} />
            </button>
            <button onClick={() => setActiveSection('Image3')} className='w-32 h-full m-1 bg-neutral-300 rounded-lg shadow-6xl'>
              <img className='w-30 h-30 rounded-2xl p-2 m-1' src={item.image3} alt={Product.Name} />
            </button>
            <button onClick={() => setActiveSection('Image4')} className='w-32 h-full m-1 bg-neutral-300 rounded-lg shadow-6xl'>
              <img className='w-30 h-30 rounded-2xl p-2 m-1' src={item.image4} alt={Product.Name} />
            </button>

          </div>
          <div className='flex flex-col gap-2 w-lg bg-neutral-300 rounded-2xl   items-center  p-8'>
            {activeSection === 'Image1' && (
              <img className='w-120 h-110 rounded-2xl p-2 m-1' src={item.image1} alt={Product.Name} />
            )}
            {activeSection === 'Image2' && (
              <img className='w-120 h-110 rounded-2xl p-2 m-1' src={item.image2} alt={Product.Name} />
            )}
            {activeSection === 'Image3' && (
              <img className='w-120 h-110 rounded-2xl p-2 m-1' src={item.image3} alt={Product.Name} />
            )}
            {activeSection === 'Image4' && (
              <img className='w-120 h-110 rounded-2xl p-2 m-1' src={item.image4} alt={Product.Name} />
            )}

          </div>
          <div className='flex flex-col gap-4 w-lg  rounded-2xl   items-start justify-center flex-wrap  p-2'>
            <h1 className='text-3xl font-bold mx-2'>{item.Name}</h1>
            <div className='flex flex-row mx-2.5 justify-center items-center  gap-2'>
              <p className="text-yellow-700 flex justify-center items-center">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <span key={index}>
                      {index < Number(item.stars) ? (
                        // Yellow filled star SVG
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 36 36">
                          <path fill="#ffdd00" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"></path>
                        </svg>
                      ) : (
                        // Outline or unfilled star SVG
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                          <path fill="#ffdd00" d="M21.995 9.933a.5.5 0 0 0-.423-.568l-6.304-.919l-2.82-5.73a.52.52 0 0 0-.896 0l-2.82 5.73l-6.304.92a.5.5 0 0 0-.278.852l4.563 4.46l-1.077 6.3a.5.5 0 0 0 .726.527L12 18.532l5.638 2.973a.506.506 0 0 0 .316.05a.5.5 0 0 0 .41-.576l-1.077-6.3l4.563-4.461a.5.5 0 0 0 .145-.285zM16.4 14.147a.501.501 0 0 0-.143.442l.95 5.558l-4.974-2.623a.506.506 0 0 0-.466 0l-4.974 2.623l.95-5.558a.501.501 0 0 0-.143-.442L3.572 10.21l5.565-.81a.501.501 0 0 0 .376-.275L12 4.07l2.487 5.054a.5.5 0 0 0 .376.274l5.565.811l-4.028 3.938z"></path>
                        </svg>
                      )}
                    </span>
                  ))}
                <span className='text-lg text-gray-500 ml-2'>({item.review} reviews)</span>
              </p>
              <div className='text-xl text-black m-0.5'>|</div>
              <p className='text-lg text-green-500 m-0.5'>{item.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
            <div className='flex flex-row gap-2 mx-2'>
              <p className='text-3xl font-bold text-red-500'>${item.offprice}</p>
              <p className='text-lg text-gray-500 line-through'>${item.price}</p>
              <p className='text-lg text-green-500'>{item.off}off</p>
            </div>
            <div className='flex flex-row gap-2 border-b-2 border-b-neutral-400  p-2'>
              <p className='text-lg text-neutral-700 m-2'>{item.discription}</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 mt-3">
              <p className='text-xl text-neutral-700 m-2'> Color:</p>
              {item.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-4 rounded-full border-4 p-2 ${selectedColor === color ? "border-red-100" : "border-transparent"}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className="flex flex-row justify-center items-center gap-2 ">
              <p className='text-xl text-neutral-700 m-2'> Size:</p>
              {item.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex justify-center items-center rounded-lg border-1 border-neutral-400 p-2 ${selectedSize === size ? "bg-red-600" : "bg-transparent"}`}
                >
                  <p className='text-lg text-black'>{size}</p>
                </button>
              ))}
            </div>

            <div className='flex flex-row justify-center items-center gap-2'>
              <div className="flex items-center border-2 m-2 border-neutral-500 rounded-sm  gap-2">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-6 text-xl py-2 hover:bg-red-500 hover:text-white border-neutral-500 border-r-2 "
                  disabled={quantity <= 1}
                >
                  -
                </button>

                <span className="min-w-[2rem] mx-2 text-xl text-center">{quantity}</span>

                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-6 py-2 text-xl hover:bg-red-500 hover:text-white border-neutral-500 border-l-2"
                  disabled={quantity >= item.available}
                >
                  +
                </button>
              </div>
              <button className='bg-red-500 m-2   font-bold rounded-lg px-2 py-1 hover:bg-red-600'>
                <p className='text-lg font-bold  text-white mx-10 my-2'>Buy now</p>
              </button>
              <button className=' m-2 border-2 font-bold rounded-lg border-neutral-500  px-3 py-2 hover:shadow-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15" fill="#000000"><path fill="#000000" fillRule="evenodd" d="M4.893 2.352a2.547 2.547 0 0 0-2.54 2.553c0 1.477.857 3.012 2.02 4.43c1.021 1.246 2.222 2.335 3.127 3.143c.905-.808 2.106-1.897 3.127-3.143c1.163-1.418 2.02-2.953 2.02-4.43a2.547 2.547 0 0 0-2.54-2.553c-.836 0-1.288.291-1.567.606c-.261.295-.394.628-.515.932l-.063.156a.5.5 0 0 1-.924 0l-.063-.156c-.121-.304-.254-.637-.515-.932c-.279-.315-.73-.606-1.567-.606Zm-3.54 2.553a3.547 3.547 0 0 1 3.54-3.553c1.115 0 1.842.408 2.316.943c.112.126.208.259.291.39c.083-.131.18-.264.291-.39c.474-.535 1.2-.943 2.316-.943a3.547 3.547 0 0 1 3.54 3.553c0 1.835-1.046 3.6-2.246 5.064c-1.137 1.387-2.48 2.582-3.395 3.397l-.173.155a.5.5 0 0 1-.666 0l-.173-.155c-.916-.815-2.258-2.01-3.395-3.397C2.4 8.505 1.352 6.74 1.352 4.905Z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <div className='flex flex-col w-full rounded-2xl border-2 m-2 border-neutral-500 justify-center items-center gap-2'>
              <div className='flex border-b-2 w-full py-2  border-neutral-500 flex-row justify-center items-center gap-2'>
                <svg className='m-2' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000" strokeLinecap="round" strokeWidth="1.5"><path strokeLinejoin="round" strokeMiterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></path><path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"></path><path strokeLinejoin="round" d="M2 9h4"></path><path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"></path></g></svg>
                <div className='flex m-2 flex-col gap-2 justify-center items-start'>
                  <h2 className='text-xl font-bold '>Free Delivery</h2>
                  <p className='text-lg '>Free devlivery available for this product</p>
                </div>
              </div>
              <div className='flex w-full flex-row justify-left items-center pl-12 py-2 gap-2'>
                <svg className='m-2' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#000000"><path fill="#000000" d="M12 4a7.986 7.986 0 0 0-6.357 3.143L8 9.5H2v-6l2.219 2.219A9.982 9.982 0 0 1 12 2c5.523 0 10 4.477 10 10h-2a8 8 0 0 0-8-8Zm-8 8a8 8 0 0 0 14.357 4.857L16 14.5h6v6l-2.219-2.219A9.982 9.982 0 0 1 12 22C6.477 22 2 17.523 2 12h2Z"></path></svg>
                <div className='flex m-2 flex-col gap-2 justify-center items-start'>
                  <h2 className='text-xl font-bold '>Return Delivery</h2>
                  <p className='text-lg '>Free 30 Days Delivery Returns.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
           <div className="flex flex-row justify-center justify-self-start pl-16 m-12 items-center">
            <div className="bg-red-500 w-6 h-10 rounded-md border-r-2 border-red-600 mr-2">
            </div>
            <h2 className="text-2xl  text-red-500">Related Product</h2>
          </div>
           <div
          
                    className='flex flex-row scrollbar-none mb-12 gap-6 ml-5  mr-6 relative w-full justify-center items-center overflow-x-hidden'>
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
  )
}

export default page
