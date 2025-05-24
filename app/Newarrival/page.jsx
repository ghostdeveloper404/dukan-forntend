import React from 'react'

const Newarrival = () => {

  const products = [
    {
      title: "Free and Fast Delivery",
      description: "Free delivery on all orders over $50.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="#ffffff" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"></path></svg>`,
      
    },
    {
      title: "24/7 Customer Support",
      description: "Our friendly customer support team is available 24/7 to assist you.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 14 14"><path fill="#ffffff" fill-rule="evenodd" d="M6.987 1.5A3.18 3.18 0 0 0 3.75 4.628V9a1 1 0 0 1-1 1H1.5A1.5 1.5 0 0 1 0 8.5v-2A1.5 1.5 0 0 1 1.5 5h.75v-.39A4.68 4.68 0 0 1 7 0a4.68 4.68 0 0 1 4.75 4.61V5h.75A1.5 1.5 0 0 1 14 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-.75v.5a2.75 2.75 0 0 1-2.44 2.733A1.5 1.5 0 0 1 8 14H6.5a1.5 1.5 0 0 1 0-3H8c.542 0 1.017.287 1.28.718a1.25 1.25 0 0 0 .97-1.218V4.627A3.18 3.18 0 0 0 6.987 1.5" clip-rule="evenodd"></path></svg>`,
      
    },
    {
      title: "Money-Back Guarantee",
      description: "We offer a 30-day money-back guarantee on all products.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="#ffffff" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0z"></path></svg>`,
      
    }
    
  ]

  return (
    <div>
      <div className="flex content-left pl-16  items-center mt-20">
        <div className="bg-red-500 w-6 h-10 rounded-md border-r-2 border-red-600 mr-2">
        </div>
        <h2 className="text-2xl  text-red-500">Featured</h2>
      </div>
      <div className="flex content-left flex-wrap justify-between pl-16 items-center mt-5">
        <h1 className="text-4xl text-black font-bold ">New Arrival</h1>
      </div>
      <section className="p-10">
        <div className=" flex justify-center items-center gap-2">
          {/* Big Image */}
          <div className="col-span-2 row-span-2 relative group w-90 h-[40rem]  ">
            <img
              src="https://imgs.search.brave.com/aGZPoehr51-wghQqrMQrhOb_cIQIDwSybyWU2oCevXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk0yRTVaVGxr/WXpNdFpqWXdOeTAw/WkRjNExXRTVaV1V0/TUdObVpqZ3hNelpq/TVRKbVhrRXlYa0Zx/Y0djQC5qcGc"
              alt="Big Image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0  flex flex-col justify-end p-6 rounded-lg group-hover:bg-opacity-60 transition">
              <h3 className="text-white backdrop-blur-sm bg-opacity-10 text-2xl font-bold">Nike Air Max 270 React</h3>
              <p className="text-white backdrop-blur-sm bg-opacity-10 text-sm mb-2">
                The Nike Air Max 270 React is a stylish and comfortable sneaker that
                combines the classic Air Max silhouette with modern React technology
                for a cushioned ride.
              </p>
              <button className="text-white flex items-end backdrop-blur-sm bg-opacity-10 underline text-lg">Shop Now</button>
            </div>
          </div>

          {/* Medium Image */}
          <div>
            <div className="col-span-1 row-span-1 w-[51rem] h-[20rem]  relative group">
              <img
                src="https://wallpapercave.com/wp/wp12013540.jpg"

                alt="Medium Image"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0  flex flex-col justify-end p-6 rounded-lg group-hover:bg-opacity-60 transition">
                <h3 className="text-white backdrop-blur-sm bg-opacity-20 text-2xl font-bold">Adidas Ultraboost 21</h3>
                <p className="text-white backdrop-blur-sm bg-opacity-20 text-sm mb-2">
                The Nike Air Max 270 React is a stylish and comfortable sneaker that
                combines the classic Air Max silhouette with modern React technology
                for a cushioned ride.
              </p>
                <button className="text-white flex items-end backdrop-blur-sm bg-opacity-20 underline text-lg">Shop Now</button>
              </div>
            </div>

            {/* Top Small Image 1 */}
            <div className='flex m-1 gap-2'>
              <div className="col-span-1 row-span-1 w-[25rem] h-[20rem] relative group">
                <img
                  src="https://imgs.search.brave.com/B9IorPpifC0P1KSqddRcPoWuBusWe1MGnPnJgKUfRv0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDUv/b25lLXBpZWNlLWx1/ZmZ5LWdlYXItNS1l/Z2doZWFkLmpwZw"
                  alt="Small Image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0  flex flex-col justify-end p-6 rounded-lg group-hover:bg-opacity-60 transition">
                  <h3 className="text-white backdrop-blur-sm bg-opacity-10 text-2xl font-bold">Puma RS-X3</h3>
                  <p className="text-white backdrop-blur-sm bg-opacity-10 text-sm mb-2">
                The Nike Air Max 270 React is a stylish and comfortable sneaker that
                combines the classic Air Max silhouette with modern React technology
                for a cushioned ride.
              </p>
                  <button className="text-white flex items-end backdrop-blur-sm bg-opacity-10 underline text-lg">Shop Now</button>
                </div>
              </div>

              {/* Top Small Image 2 */}
              <div className="col-span-1 row-span-1 w-[25rem] h-[20rem] relative group">
                <img
                  src="https://imgs.search.brave.com/Xq1fDOQckej234-ePqnRBRmcQGxR2g26FZaTrGzc1AA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbW9ua2V5LWQt/bHVmZnktcGljdHVy/ZXMtMGNwNmJ3ejkz/cTV1ZGM2My5qcGc"
                  alt="Small Image 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0  flex flex-col justify-end p-6 rounded-lg group-hover:bg-opacity-60 transition">
                  <h3 className="text-white text-2xl backdrop-blur-sm bg-opacity-10 font-bold">New Balance 990v5</h3>
                  <p className="text-white backdrop-blur-sm bg-opacity-10 text-sm mb-2">
                The Nike Air Max 270 React is a stylish and comfortable sneaker that
                combines the classic Air Max silhouette with modern React technology
                for a cushioned ride.
                 </p>
                  <button className="text-white backdrop-blur-sm flex items-end bg-opacity-10 underline text-lg">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
         <div className='flex justify-center items-center gap-6'>
          {products.map((product, index) => (
            <div key={index} className="flex flex-col justify-center items-center  p-4 m-2 w-64 h-64">
              <div className="w-22 bg-black border-neutral-400 border-10 rounded-full flex justify-center items-center h-22" dangerouslySetInnerHTML={{ __html: product.svg }}></div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">{product.title}</h3>
              <p className="text-gray-600 text-sm text-center">{product.description}</p>
            </div>
          ))}

         </div>
      

    </div>
  )
}

export default Newarrival
