'use client'
import React, { useState } from 'react'

const page = () => {
  const [selected, setSelected] = useState(null);


  const paymentoptions = ['Online', 'Cash on Delivery'];
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const Product = [
    { id: 1, name: 'Product 1', offprice: 120, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    { id: 2, name: 'Product 2',   offprice: 960, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    { id: 3, name: 'Product 3',   offprice: 370, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    { id: 4, name: 'Product 4',  offprice: 370, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
  ]



  return (
    <div className='w-full h-full '>
      <div className='flex flex-row items-start my-12   mx-16 justify-center'>
        <div className='flex flex-col items-start justify-center w-1/2 h-full'>
          <h1 className='text-3xl m-4 font-bold'>Billing Details</h1>
          <form className='flex flex-col items-start mt-4 justify-center w-full h-full'>
            <h2 className=' text-lg mx-2 text-neutral-600'>Full Name</h2>
            <input type="text" className='w-xl h-12 rounded-xl bg-neutral-300 p-4 m-2' />
            <h2 className=' text-lg mx-2 text-neutral-600'>Street Address</h2>
            <input type="text" className='w-xl h-12 rounded-xl bg-neutral-300 p-4 m-2' />
            <h2 className=' text-lg mx-2 text-neutral-600'>Tomn/City</h2>
            <input type="text" className='w-xl h-12 rounded-xl bg-neutral-300 p-4 m-2' />
            <h2 className=' text-lg mx-2 text-neutral-600'>Phone Number</h2>
            <input type="Phone" className='w-xl h-12 rounded-xl bg-neutral-300 p-4 m-2' />
            <h2 className=' text-lg mx-2 text-neutral-600'>Email Address</h2>
            <input type="Email" className='w-xl h-12 rounded-xl bg-neutral-300 p-4 m-2' />
          </form>
        </div>
        <div className='flex flex-col items-center mt-32 gap-2 justify-center w-1/2 h-full'>
          {Product.map((item) => (
            <div key={item.id} className='flex-row flex my-2 justify-around gap-2 w-full rounded-2xl   items-center  '>
              <div className='flex flex-row gap-2 items-center'>
                <img src={item.image} alt={item.name} className='w-10 h-10 rounded-lg' />
                <h1 className='text-lg font-medium mx-2'> {item.name} </h1>
              </div>

              <div className='flex flex-row gap-10 items-center justify-center mx-2'>
                <h1 className='text-xl font-bold mx-2'>${item.offprice}</h1>
              </div>
            </div>
          ))}
          <div className='flex flex-col mt-4 gap-1  items-center justify-center mx-4'>
          <div className='flex border-b-2  border-neutral-400 p-2 flex-row gap-60 items-center justify-around mx-2'>
            <h1 className='text-xl font-medium mx-2'>SubTotal</h1>
            <h1 className='text-xl font-medium mx-2'>${Product.reduce((acc, item) => acc + item.offprice, 0)}</h1>
          </div>          
          <div className='flex border-b-2 border-neutral-400 p-2 flex-row gap-48 items-center justify-around mx-2'>
            <h1 className='text-xl font-medium mx-2'>Delivery Charge</h1>
            <h1 className='text-xl font-medium mx-2'>Free</h1>
          </div>
          <div className='flex   flex-row gap-60 items-center  justify-around mx-2'>
            <h1 className='text-xl font-medium mx-2'>Total</h1>
            <h1 className='text-xl font-medium mx-2'>${Product.reduce((acc, item) => acc + item.offprice, 0)}</h1>
          </div>
          </div>
          <div className='flex flex-col gap-2 items-start justify-center mx-2'>
             <div className="flex p-2 my-4 mr-60 justify-center items-start flex-col gap-2.5">
              {paymentoptions.map((option, index) => (
                <div
                  key={option}
                  onClick={() => setSelected(option)}
                  className="flex flex-row items-center  cursor-pointer"
                >
                  <div
                    className={`w-6 h-6 border-4  rounded-full transition-colors duration-200 ${selected === option ? 'bg-black border-gray-400' : 'bg-white border-gray-400'
                      }`}
                  ></div>
                  <span className="text-sm mx-2 mt-1">{option}</span>
                </div>
              ))}
            </div>
            <div className='flex flex-row gap-2 items-center'>
                        <input type="text"  className='border-2 flex placeholder-shown:border-neutral-500 border-neutral-500 rounded w-70 px-4 py-2 m-2 placeholder:justify-start placeholder:text-xl ' placeholder='Coupan Code'/>
                        <button className='bg-red-500  text-sm font-bold text-white px-4 py-3 rounded'>Apply Coupon</button>
            </div>
            <button className='bg-red-500 mx-4 text-lg font-bold w-44 text-white px-1 py-3 rounded'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
