"use client"
import Image from "next/image";
import Link from 'next/link'
import Flashsales from "./flashsales/page";
import React, { useState, useEffect, useRef, use } from 'react'
import Category from "./Category/page";
import Ourproduct from "./Ourproduct/page";
import Newarrival from "./Newarrival/page"



const images = [
  'https://imgs.search.brave.com/9TKJjsmxa1QkmHyYEaqc2JBbm4ci76q8rXxtF_o-i4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L29u/ZXBpZWNlL2ltYWdl/cy82LzZiL1NsaWRl/XzFfcHJldmlldy5w/bmcvcmV2aXNpb24v/bGF0ZXN0L3NjYWxl/LXRvLXdpZHRoLWRv/d24vODYwP2NiPTIw/MjMwNzE4MDQ1MTIy',
  'https://imgs.search.brave.com/eCL7FXw-jcK-F5ofEdWmHI854xOoE2zrRLMlkx9Cde4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA0L2RvbmZs/YW1pbmdvLXNpci1j/cm9jb2RpbGUtYW5k/LW1paGF3ay1mcm9t/LW9uZS1waWVjZS5q/cGc',
  'https://imgs.search.brave.com/zW88_PEZexlJCGDkcf7_BZV66wuvjEQwdKjhMSOK8wM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqQmxaRE16/TURndFkySXhZeTAw/TTJaakxUbGxZMkl0/TkRjME5qYzRORGhq/WmpVelhrRXlYa0Zx/Y0djQC5qcGc',
  'https://imgs.search.brave.com/LnbLF6BlqAKInGAHV6ZRGnGqlBEh1ly8Ze1fBpGkhf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA2L3Vzb3Bw/LXMtMTAtYmVzdC1m/aWdodHMtaW4tb25l/LXBpZWNlLXJhbmtl/ZC5qcGc',

]

export default function Home() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };




  useEffect(() => {
    // Set the container width dynamically
    if (scrollRef.current) {
      setContainerWidth(scrollRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (scrollRef.current) {
        setContainerWidth(scrollRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      scrollRef.current.scrollTo({
        left: scrollRef.current.offsetWidth * nextIndex,
        behavior: 'smooth',
      });
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className='flex justify-center  items-center'>

        <ul className=' px-10  border-r-1 py-10 flex flex-col w-fit item-center space-x-4 bg-[#f0eeee] '>
          <li className='text-black p-2 flex items-center text-xl font-bold'> Womans Fashion <svg xmlns="http://www.w3.org/2000/svg" className='mx-2' width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M3.636 4.372L16.985 12l-13.35 7.628l.993 1.736L21.016 12L4.628 2.636l-.992 1.736Z"></path></svg> </li>
          <li className='text-black p-2 flex items-center text-xl font-bold'> Mens Fashion <svg xmlns="http://www.w3.org/2000/svg" className='mx-4' width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M3.636 4.372L16.985 12l-13.35 7.628l.993 1.736L21.016 12L4.628 2.636l-.992 1.736Z"></path></svg>  </li>
          <li className='text-black p-2 text-xl font-bold'> Electronics</li>
          <li className='text-black p-2 text-xl font-bold'>Medicine</li>
          <li className='text-black p-2 text-xl font-bold'>Home & Living</li>
          <li className='text-black p-2 text-xl font-bold'>Beauty & Health</li>
          <li className='text-black p-2 text-xl font-bold'>Sports</li>

        </ul>
          
        <div className="w-full max-w-4xl  mx-auto">

          <div
            ref={scrollRef}
            className=" relative flex overflow-x-scroll   scrollbar-hide snap-x snap-mandatory scroll-smooth"
           
            style={{
              overflowX: 'scroll',
              scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none', // For Internet Explorer and Edge
              scrollBehavior: 'smooth'
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0  w-full snap-start"
                style={{ width: `${containerWidth}px` }}
              >
                <Image
                  src={src}
                  alt={`Slide ${i}`}
                  width={800}
                  height={600}
                  className="w-full   h-[300px] object-cover"
                />

                <div className="relative inset-0 flex items-start bg-black justify-center  ">
                  <Link
                    href={`/image/${i}`}
                    className="text-white text-xl  font-bold hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex  justify-center mt-4 space-x-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div >
         <Flashsales />
          <Category />
          <Ourproduct />
          <Newarrival />
          <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-red-600 text-white shadow-lg transition-opacity duration-300 hover:bg-black ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      {/* SVG Icon (Arrow Up) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
    </div>

  );
}
