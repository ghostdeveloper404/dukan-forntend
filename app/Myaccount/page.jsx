'use client'
import React, { useState } from 'react'

const page = () => {
  const [activeSection, setActiveSection] = useState('MyProfile');
  const [selected, setSelected] = useState(null);


  const options = [
    { id: 1, heading: "Manage My Account", opention1: "My Profile", option2: "My Payment Options" },
    { id: 2, heading: "My Orders", opention1: "My Returns", opention2: "My Cancellation", },
    { id: 3, heading: "My Wishlist", },
  ]

  const paymentoptions = ['Online', 'Cash on Delivery', 'Credit Card', 'Debit Card'];
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };


  return (
    <div className='w-full h-full '>
      <div className='flex flex-row m-10 items-start justify-center '>

        <div className='flex flex-col items-center h-full shadow-xl justify-center m-2 p-8 bg-gray-100 w-70'>
          {options.map((option) => (
            <div key={option.id} className=' p-4 m-2 w-full max-w-md'>
              <h2 className='text-lg font-semibold'>{option.heading}</h2>
              <ul className='list-none pl-5'>

                {Object.values(option)
                  .slice(2) // Only opention1, option2, etc.
                  .map((op, index) => {
                    let onClickHandler;

                    if (option.id === 1) {
                      onClickHandler =
                        index === 0
                          ? () => setActiveSection('MyProfile')
                          : () => setActiveSection('Address');
                    } else if (option.id === 2) {
                      onClickHandler =
                        index === 0
                          ? () => setActiveSection('Returns')
                          : () => setActiveSection('Cancellations');
                    } else {
                      onClickHandler = () => setActiveSection('MyProfile');
                    }

                    return (
                      <li key={`${option.id}-${index}`} className="text-sm font-semibold text-neutral-400 hover:text-red-500">
                        <button onClick={onClickHandler}>{op}</button>
                      </li>
                    );
                  })}


              </ul>
            </div>
          ))}
        </div>
        {activeSection === 'MyProfile' && (
          < section className='flex flex-col items-center shadow-xl justify-center m-2 p-8 bg-gray-100 w-full max-w-2xl '>
            <h2 className="text-xl text-red-600 flex items-left m-1 font-bold">Edit your Profile</h2>
            <div className='flex flex-row gap-8 justify-center mt-4 w-full items-center'>
              <div className='flex w-full flex-col '>
                <label className='text-lg  ' htmlFor="fname">First name</label>
                <input type="text" className='bg-gray-200 p-2 m-2  w-full focus:outline-none focus:border-red-500' defaultValue="John " id="fname" name="fname" />
              </div>
              <div className='flex w-full   flex-col '>
                <label className='text-lg  ' htmlFor="lname">Last name</label>
                <input type="text" className='bg-gray-200 w-full p-2 m-2 focus:outline-none focus:border-red-500' defaultValue=" Doe" id="lname" name="lname" />
              </div>
            </div>
            <div className='flex flex-row gap-8 justify-center mt-4 w-full items-center'>
              <div className='flex w-full flex-col '>
                <label className='text-lg  ' htmlFor="fname">Email</label>
                <input type="Email" className='bg-gray-200 p-2 m-2  w-full focus:outline-none focus:border-red-500' defaultValue="John " id="fname" name="fname" />
              </div>
              <div className='flex w-full   flex-col '>
                <label className='text-lg  ' htmlFor="lname">Address </label>
                <input type="text" className='bg-gray-200 w-full p-2 m-2 focus:outline-none focus:border-red-500' defaultValue=" Doe" id="lname" name="lname" />
              </div>
            </div>
            <div className='flex flex-col gap-2  mt-4 w-full '>
              <label className='text-lg my-2 ' htmlFor="fname">Password Changes</label>
              <input type="Password" className='bg-gray-200 p-2 m-2  w-full focus:outline-none focus:border-red-500' defaultValue="John " id="fname" name="fname" />
              <input type="Password" className='bg-gray-200 p-2 m-2  w-full focus:outline-none focus:border-red-500' defaultValue="John " id="fname" name="fname" />
              <input type="Password" className='bg-gray-200 p-2 m-2  w-full focus:outline-none focus:border-red-500' defaultValue="John " id="fname" name="fname" />
            </div>
            <div>
              <button className='bg-red-500 text-white p-2 m-2 w-full rounded-md hover:bg-red-600'>Save Changes</button>
            </div>
          </section>
        )}

        {activeSection === 'Address' && (
          <section className='flex flex-col items-center shadow-xl justify-center m-2 p-8 bg-gray-100 w-full max-w-2xl '>
            <h2 className="text-xl text-red-600 flex items-left m-1 font-bold"> Change Payment Option </h2>

            <div className="flex p-4 m-2 flex-col gap-6">
              {paymentoptions.map((option, index) => (
                <div
                  key={option}
                  onClick={() => setSelected(option)}
                  className="flex flex-row items-center  cursor-pointer"
                >
                  <div
                    className={`w-6 h-6 border-2 rounded-full transition-colors duration-200 ${selected === option ? 'bg-black border-black' : 'bg-white border-gray-400'
                      }`}
                  ></div>
                  <span className="text-sm mx-4 mt-1">{option}</span>
                </div>
              ))}
            </div>
            <div>
              <button className='bg-red-500 text-white p-2 m-2 w-full rounded-md hover:bg-red-600'>Save Changes</button>
            </div>



          </section>
        )}

        {activeSection === 'Returns' && (

          <section className='flex flex-col items-center shadow-xl justify-center m-2 p-8 bg-gray-100 w-full max-w-2xl '>
          <h2 className="text-xl text-red-600 flex items-left m-1 font-bold"> Return Product </h2>
          <div className='flex flex-col gap-8 justify-center mt-4 w-full items-center'>
            <div className='flex w-full flex-col '>
              <label className='text-lg  ' htmlFor="fname">Product Name</label>
              <input type="text" className='bg-gray-200 p-2 m-2  w-full focus:outline-none focus:border-red-500' defaultValue="John " id="fname" name="fname" />
            </div>
            <div className='flex w-full   flex-col '>
              <label className='text-lg  ' htmlFor="lname">Order ID</label>
              <input type="text" className='bg-gray-200 w-full p-2 m-2 focus:outline-none focus:border-red-500' defaultValue=" Doe" id="lname" name="lname" />
            </div>
            <div className='flex w-full   flex-col '>
              <label className='text-lg  ' htmlFor="lname">Pick up Address</label>
              <input type="text" className='bg-gray-200 w-full p-2 m-2 focus:outline-none focus:border-red-500' defaultValue=" Doe" id="lname" name="lname" />
            </div>
            </div>
            <div>
              <button className='bg-red-500 text-white p-2 m-2 w-full rounded-md hover:bg-red-600'>Return</button>
            </div>
          </section>
           )}

            {activeSection === 'Cancellations' && (

          <section className='flex flex-col items-center shadow-xl justify-center m-2 p-8 bg-gray-100 w-full max-w-2xl '>
          <h2 className="text-xl text-red-600 flex items-left m-1 font-bold"> Return Product </h2>
          <div className='flex flex-col gap-8 justify-center mt-4 w-full items-center'>
            <div className='flex w-full flex-col '>
              <label className='text-lg  ' htmlFor="fname">Product Name</label>
              <input type="text" className='bg-gray-200 p-2 m-2  w-full focus:outline-none focus:border-red-500' defaultValue="John " id="fname" name="fname" />
            </div>
            <div className='flex w-full   flex-col '>
              <label className='text-lg  ' htmlFor="lname">Order ID</label>
              <input type="text" className='bg-gray-200 w-full p-2 m-2 focus:outline-none focus:border-red-500' defaultValue=" Doe" id="lname" name="lname" />
            </div>
           
            </div>
            <div>
              <button className='bg-red-500 text-white p-2 m-2 w-full rounded-md hover:bg-red-600'>Return</button>
            </div>
          </section>
           )}
      </div>

    </div>
  )
}

export default page
