"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()

   const goToPage = () => {
    router.push('/Checkout'); // navigate to /about
  };
     

    
    const cart = [
        { id: 1, name: 'Product 1', amount: 20, offprice: 120, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 2, name: 'Product 2', amount: 20, offprice: 960, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 3, name: 'Product 3', amount: 20, offprice: 370, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
        { id: 4, name: 'Product 4', amount: 20, offprice: 370, image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc' },
    ]
    const [quantity, setQuantity]= useState(
        Object.fromEntries(cart.map(item => [item.id, 1]))
    );

    const handleQuantityChange = (id, delta) => {
        setQuantity(q => ({
            ...q,
            [id]: Math.max(1, (q[id] || 1) + delta)
        }));
    };



    return (
        <div>
            <div className='m-10 mb-30 flex flex-col justify-center  content-center items-center   gap-4'>
                <div  className='flex-row flex  justify-around gap-4 w-full shadow-xl shadow-neutral-300  rounded-xl   items-center p-4 '>
                  <h1 className='text-xl font-bold mx-2'>Product</h1>
                    <h1 className='text-xl font-bold mx-2'>Price</h1>
                    <h1 className='text-xl font-bold mx-2'>Quantity</h1>
                    <h1 className='text-xl font-bold mx-2'>SubTotal</h1>
                </div>
               {cart.map((item) => ( 
                <div key={item.id} className='flex-row flex  justify-between gap-6 w-full shadow-lg shadow-neutral-300  rounded-2xl   items-center p-4 '>
                    <div className='flex flex-row gap-6 items-center'>
                    <img src={item.image} alt={item.name} className='w-20 h-20 rounded-lg' />
                    <h1 className='text-lg font-bold mx-2'> {item.name} </h1>
                    </div>
                    <h1 className='text-xl font-bold mx-4 '>${item.offprice}</h1>
                    <div className='flex items-center mx-4 '>
                        <button onClick={() => handleQuantityChange(item.id, -1)} disabled={quantity[item.id] <= 1} className='bg-gray-200 px-2 py-1 rounded-l'>-</button>
                        <input type="number" value={quantity[item.id]} readOnly className='w-12 text-center border border-gray-300' />
                        <button onClick={() => handleQuantityChange(item.id, 1)} className='bg-gray-200 px-2 py-1 rounded-r'>+</button>
                    </div>
                    <div className='flex flex-row gap-10 items-center justify-center mx-2'>
                    <h1 className='text-xl font-bold mx-2'>${item.amount * quantity[item.id]}</h1>
                    <button className='bg-red-500 text-white px-4 py-2 rounded'>Remove</button>
                    </div>
                </div>
                   ))}
                
                <div className='flex flex-row items-start justify-around w-full m-2 p-1'>
                    <div className='flex flex-row gap-2 items-center'>
                        <input type="text"  className='border-2 flex placeholder-shown:border-neutral-500 border-neutral-500 rounded w-70 px-4 py-2 m-2 placeholder:justify-start placeholder:text-xl ' placeholder='Coupan Code'/>
                        <button className='bg-red-500  text-sm font-bold text-white px-4 py-3 rounded'>Apply Coupon</button>
                    </div>
                    <div className='flex flex-col border-2 w-80 rounded border-neutral-500 gap-2 p-2 m-2 items-center'>
                        <h2 className='text-2xl font-bold justify-start m-2 items-center'>Cart total</h2>
                        <div className='flex flex-row gap-2 w-full justify-between border-b-1 border-neutral-500  items-center'> 
                            <h2 className='text-lg font-bold justify-start items-center'>SubTotal:</h2>
                            <h1 className='text-lg font-bold justify-start items-center'>${cart.reduce((acc, item) => acc + item.amount * quantity[item.id], 0)}</h1>
                        </div>
                        <div className='flex flex-row gap-2 w-full justify-between border-b-1 border-neutral-500  items-center'> 
                            <h2 className='text-lg font-bold justify-start items-center'>Delivery Charge:</h2>
                            <h1 className='text-lg font-bold justify-start items-center'>Free</h1>
                        </div>
                        <div className='flex flex-row gap-2 w-full justify-between border-b-1 border-neutral-500  items-center'> 
                            <h2 className='text-lg font-bold justify-start items-center'>Total:</h2>
                            <h1 className='text-lg font-bold justify-start items-center'>${cart.reduce((acc, item) => acc + item.amount * quantity[item.id], 0)}</h1>
                        </div>
                        <button onClick={goToPage} className='bg-red-500  text-sm font-bold text-white px-4 m-4 py-2 rounded'>Process to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
