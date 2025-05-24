"use client"
import Image from 'next/image'
import Link from 'next/link'
import React , { useState , useEffect , useRef } from 'react'




const Navbar = () => {
  

  const [isOpen, setIsOpen] = useState(false);
   
  const dropdownRef = useRef(null); // Reference to the dropdown container

 const handleClickOutside = (event) => {
  const clickedLink = event.target.closest('a');
  if (clickedLink) return; // allow navigation, don't close dropdown

  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setIsOpen(false);
  }
};




 useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000); 
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

 


  return (
    <div>
      
        <nav className="flex border-b-[#5f5f5f] border-b-1 items-center justify-around py-3.5">
          <div className="text-black mx-1.5  m-1 font-bold  text-5xl">Dukan</div>
          <ul className="flex m-2 space-x-4">
            <li><Link href="/" className="text-black text-xl hover:underline">Home</Link></li>
            <li><Link href="/About" className="text-black text-xl hover:underline">About</Link></li>
            <li><Link href="/Signup" className="text-black text-xl hover:underline">Sign Up</Link></li>
            <li><Link href="/Contact" className="text-black text-xl hover:underline">Contact</Link></li>
          </ul>
        
           
            <div className="search mx-1 flex justify-center items-center relative mt-1">
              <input type="text"className="font-inherit py-1 text-inherit bg-[#f4f2f2] border text-[#646464]  px-4 rounded-full w-48 transition-all ease-in-out duration-500 mr-[-2rem] focus:outline-none focus:bg-[#f0eeee] focus:shadow-[0_0_1em_#00000013] placeholder:font-light placeholder:text-black"
                 placeholder="Type your text"/>
                <button className="border-none  mt-[0.1em] hover:cursor-pointer focus:bg-[#f0eeee]">
                  <svg className="h-[1.3em] w-[1.3em] fill-[#555050]"
                     aria-hidden="true"  viewBox="0 0 24 24">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                </button>
                <Link href="/Cart" className="border-none mx-2  mt-[0.1em] hover:cursor-pointer focus:bg-[#f0eeee]">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" className='mx-1.5' viewBox="0 0 36 36">
                <path fill="#CCD6DD" d="M31 22H11L9 10h24z"/>
                <path fill="#66757F" d="M32.984 27h-22C9.89 27 9 26.109 9 25.016S9.906 23 11 23l.007-.001l.008.001H31a1 1 0 0 0 .986-.836l2-12A.997.997 0 0 0 33 9H9.817l-1.04-6.166a.988.988 0 0 0-.942-.814C7.819 2.017 7.808 2 7.792 2H3a1 1 0 0 0 0 2h3.946l2.903 17.216c-1.642.493-2.849 2-2.849 3.8A3.989 3.989 0 0 0 10.984 29h22a1 1 0 1 0 0-2zM30.82 17h-3.307l.273-2h3.366l-.332 2zm-5.326 0H22v-2h3.767l-.273 2zM20 17h-3.494l-.273-2H20v2zm-5.512 0h-3.307l-.333-2h3.367l.273 2zm-2.641 4l-.333-2h3.247l.273 2h-3.187zm5.206 0l-.273-2H20v2h-2.947zM22 21v-2h3.22l-.273 2H22zm4.967 0l.273-2h3.247l-.333 2h-3.187zm4.852-10l-.333 2H28.06l.273-2h3.486zm-5.505 0l-.273 2H22v-2h4.314zM20 11v2h-4.041l-.273-2H20zm-6.333 0l.273 2h-3.427l-.333-2h3.487z"/><circle cx="14" cy="31" r="3" fill="#E1E8ED"/>
                <path fill="#292F33" d="M14 35c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2z"/><circle cx="28" cy="31" r="3" fill="#E1E8ED"/><path fill="#292F33" d="M28 35c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2z"/>
                </svg>
               </Link>
               <button ref={dropdownRef} onClick={() => setIsOpen(!isOpen)} className="border-none  mt-[0.1em] hover:cursor-pointer focus:bg-[#f0eeee]">
               <svg fill="#000000" viewBox="0 0 56 56" width="50" height="25" xmlns="http://www.w3.org/2000/svg">
               <g id="SVGRepo_bgCarrier" strokeWidth="0">
                </g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 28.0117 35.8164 C 19.6913 35.8164 13.7148 39.8242 11.1835 44.9102 C 10.5507 44.2774 10.1992 43.3633 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 43.3399 45.4726 44.2774 44.8398 44.8867 C 42.3320 39.8008 36.5429 35.8164 28.0117 35.8164 Z M 28.0117 31.9023 C 32.4882 31.9492 36.0273 28.1289 36.0273 23.1133 C 36.0273 18.4023 32.4882 14.5118 28.0117 14.5118 C 23.5351 14.5118 19.9726 18.4023 19.9960 23.1133 C 20.0429 28.1289 23.5351 31.8320 28.0117 31.9023 Z">
                </path>
                </g>
                </svg>
                </button>

                {isOpen && (
                  <ul className="absolute top-6 z-10 right-0 mt-2 w-48 bg-transparent backdrop-blur-xl  backdrop-brightness-125 backdrop-saturate-150 border border-gray-200 rounded-lg shadow-lg">
                    <li className="px-1 flex py-2 hover:bg-gray-100 cursor-pointer">
                  <Link href='/Myaccount' className='flex items-center'  >
                    <svg className='mx-1' fill="#000000" viewBox="0 0 56 56" width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  </g>
                   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 28.0117 35.8164 C 19.6913 35.8164 13.7148 39.8242 11.1835 44.9102 C 10.5507 44.2774 10.1992 43.3633 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 43.3399 45.4726 44.2774 44.8398 44.8867 C 42.3320 39.8008 36.5429 35.8164 28.0117 35.8164 Z M 28.0117 31.9023 C 32.4882 31.9492 36.0273 28.1289 36.0273 23.1133 C 36.0273 18.4023 32.4882 14.5118 28.0117 14.5118 C 23.5351 14.5118 19.9726 18.4023 19.9960 23.1133 C 20.0429 28.1289 23.5351 31.8320 28.0117 31.9023 Z">
                </path>
                </g>
                </svg>
                      Manage My account 

                </Link>
                    </li>
                    <li className="px-2 py-2 flex hover:bg-gray-100 cursor-pointer">
                    <Link className='flex items-center' href="/orders">
                    <svg className='mx-1' viewBox="0 0 24 24" fill="none" width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                       <path d="M4.50938 10.4343C4.7433 8.79689 4.86026 7.97818 5.42419 7.48909C5.98812 7 6.81514 7 8.46918 7H9H15H15.5308C17.1849 7 18.0119 7 18.5758 7.48909C19.1397 7.97818 19.2567 8.79689 19.4906 10.4343L20.3478 16.4343C20.6512 18.5586 20.803 19.6208 20.2049 20.3104C19.6068 21 18.5339 21 16.388 21H16H8H7.61204C5.46614 21 4.3932 21 3.79511 20.3104C3.19703 19.6208 3.34877 18.5586 3.65224 16.4343L4.50938 10.4343Z" stroke="#323232" strokeWidth="2" strokeLinejoin="round"></path> <path d="M9 11V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V11" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        </path> </g></svg>
                      My Orders
                      </Link>
                    </li>
                    <li className="px-2 py-2 flex hover:bg-gray-100 cursor-pointer">
                    <Link className='flex items-center' href="/wishlist">
                    <svg className='mx-1' width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                       <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#000000" strokeWidth="1.008" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                      My Wishlist
                      </Link>
                    </li>
                    <li className="px-2 py-2 flex hover:bg-gray-100 cursor-pointer">
                    <Link className='flex items-center' href="/logout">
                    <svg className='mx-1' viewBox="0 0 24 24" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                      Logout
                    </Link>
                    </li>
                  </ul>
          )}

            </div>
        </nav>
          
         

    </div>
  )
}

export default Navbar
