import React from 'react'

const page = () => {
  return (
    <div>
        <div>
      <div className='flex gap-20  justify-center items-center  '>
        <div className='flex justify-center mx-5 items-center '>
            <img src="Signup.png" className='w-160 h-140  ' alt="signup" />
        </div>
        <div className='justify-center mr-20  items-center '>
            <h1 className='text-3xl mb-2 font-bold'>Log in to Exclusive </h1>
            <h3 className='text-lg m-2 '>Enter your details below</h3>
            <div className='flex flex-col m-2 justify-center items-center'>
            <input type="text" placeholder='Email or Phone number'  className='w-full m-1 p-3 border-b-2 border-b-gray-300  focus:outline-none focus:border-red-500 '/>
            <input type="password" placeholder='Password'  className='w-full p-3 m-1 border-b-2 border-b-gray-300  focus:outline-none focus:border-red-500 '/>
            </div>
            <div>
                <button className='bg-red-500 text-white w-full p-3 m-2 rounded-md hover:bg-red-600'>Log In</button>
                <button className='  w-full gap-4 hover:underline text-lg justify-center items-center text-red-600 p-3 m-2   '>
                   Forget Password?
                </button>
            </div>
           
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
