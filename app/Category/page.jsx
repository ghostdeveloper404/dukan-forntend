import Link from 'next/link'
import React from 'react'
import  { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const Category = () => {

  const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

  const categories = [
    { id: 1, name: 'Phone' , href:'/phone', svg: `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='#000000'><g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' stroke-width='1.5' color='currentColor'><path d='M5 9c0-3.3 0-4.95 1.025-5.975S8.7 2 12 2s4.95 0 5.975 1.025S19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975S15.3 22 12 22s-4.95 0-5.975-1.025S5 18.3 5 15zm6 10h2'></path><path d='m9 2l.089.534c.193 1.157.29 1.736.686 2.088C10.19 4.989 10.776 5 12 5s1.81-.01 2.225-.378c.397-.352.493-.93.686-2.088L15 2'></path></g></svg>` },
      { id: 2, name: 'Computer' , href:'/computer' , svg: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2"><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21H17M12 21H7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21V17"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="6;0"></animate></path><path stroke-dasharray="64" stroke-dashoffset="64" d="M12 17H3V5H21V17Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="64;0"></animate></path></g></svg>` },
      { id: 3, name: 'Camera' , href:'/camera', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16"><path fill="#000000" d="M11 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"></path><path fill="#000000" d="M11 4V1H5v3H0v9h5c.8.6 1.9 1 3 1s2.2-.4 3-1h5V4h-5zM6 2h4v2H6V2zm2 11c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4zm7-7h-2V5h2v1z"></path></svg>` },
      { id: 4, name: 'Smart Watch' , href:'/smartwatch', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" stroke-width="1.5" d="M4.5 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C7.07 4.5 8.712 4.5 12 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C19.5 7.07 19.5 8.712 19.5 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C4.5 16.93 4.5 15.288 4.5 12M9 22h6M9 2h6m-5 8l3 3m2-4l-4 4" color="currentColor"></path></svg>` },
      { id: 5, name: 'Headphone' , href:'/headphone', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 128 128"><ellipse cx="18.19" cy="101.39" fill="#616161" rx="7.4" ry="10.85" transform="rotate(-10.978 18.207 101.413)"></ellipse><path fill="none" stroke="#616161" stroke-miterlimit="10" stroke-width="6" d="M15.41 60.04c-.64 13.15.36 27.76 2.01 41.81"></path><ellipse cx="109.81" cy="101.39" fill="#616161" rx="10.85" ry="7.4" transform="rotate(-79.018 109.802 101.39)"></ellipse><path fill="none" stroke="#616161" stroke-miterlimit="10" stroke-width="6" d="M112.59 60.04c.64 13.15-.36 27.76-2.01 41.81"></path><path fill="#616161" d="M113.93 66.61c-5.17-.24-9.46-4.12-10.13-9.25c-.75-5.81-2.68-12.52-7.52-18.96c-7.61-10.11-18.75-15.46-32.23-15.46c-9.45 0-22.73 2.68-32.34 15.46c-4.9 6.52-6.81 13.37-7.54 19.27c-.61 4.89-4.57 8.68-9.5 8.91l-.6.03c-3.46.16-6.32-2.7-6.12-6.15c.48-8.43 2.6-23.4 11.05-34.64C29.58 11.74 45.58 4 64.05 4c18.4 0 34.36 7.74 44.94 21.8c8.46 11.25 10.57 26.23 11.06 34.65c.2 3.46-2.66 6.32-6.12 6.16z"></path><path fill="#424242" d="M38.73 123.29c-9.72 1.35-20.87-5.82-23.12-22.41c-2.24-16.52 5.61-26.56 13.57-28.1l9.55 50.51z"></path><path fill="#757575" d="m39.29 69.36l-8.46 1.45a8.6 8.6 0 0 0-6.8 6.73c-.94 4.61-1.54 11.98.4 22.03c1.95 10.04 5.26 16.65 7.87 20.58c1.92 2.9 5.4 4.36 8.82 3.69l8.46-1.45c4.09-.79 5.1-13.31 2.25-27.95c-2.84-14.64-8.45-25.87-12.54-25.08z"></path><ellipse cx="45.66" cy="95.64" fill="#424242" opacity=".5" rx="6.29" ry="24.95" transform="rotate(-10.978 45.677 95.658)"></ellipse><linearGradient id="notoHeadphone0" x1="142.597" x2="145.527" y1="234.485" y2="234.485" gradientTransform="rotate(-10.978 -627.855 670.484)" gradientUnits="userSpaceOnUse"><stop offset=".202" stop-color="#212121"></stop><stop offset="1" stop-color="#212121" stop-opacity="0"></stop></linearGradient><path fill="url(#notoHeadphone0)" d="M49.85 94.83c1.78 9.16 2.17 16.79.88 17.04s-3.79-6.97-5.56-16.13c-1.78-9.16-2.17-16.79-.88-17.04s3.78 6.97 5.56 16.13z"></path><path fill="#424242" d="M89.27 123.29c9.72 1.35 20.87-5.82 23.12-22.41c2.24-16.52-5.61-26.56-13.57-28.1l-9.55 50.51z"></path><path fill="#757575" d="m88.71 69.36l8.46 1.45a8.6 8.6 0 0 1 6.8 6.73c.94 4.61 1.54 11.98-.4 22.03c-1.95 10.04-5.26 16.65-7.87 20.58a8.595 8.595 0 0 1-8.82 3.69l-8.46-1.45c-4.09-.79-5.1-13.31-2.25-27.95c2.84-14.64 8.45-25.87 12.54-25.08z"></path><ellipse cx="82.34" cy="95.64" fill="#424242" opacity=".5" rx="24.95" ry="6.29" transform="rotate(-79.018 82.337 95.639)"></ellipse><linearGradient id="notoHeadphone1" x1="152.929" x2="155.859" y1="236.49" y2="236.49" gradientTransform="scale(-1 1) rotate(-10.982 -697.156 1390.947)" gradientUnits="userSpaceOnUse"><stop offset=".202" stop-color="#212121"></stop><stop offset="1" stop-color="#212121" stop-opacity="0"></stop></linearGradient><path fill="url(#notoHeadphone1)" d="M78.15 94.83c-1.78 9.16-2.17 16.79-.88 17.04s3.79-6.97 5.56-16.13c1.78-9.16 2.17-16.79.88-17.04s-3.78 6.97-5.56 16.13z"></path><path fill="#424242" d="M119.09 62.1c-2.83 1.92-6.32-.24-7.39-3.16c-1.24-7.28-3.69-15.73-8.49-22.7c-8.99-13.79-24.1-20.7-39.21-20.71c-15.11.01-30.22 6.92-39.21 20.71c-4.8 6.97-7.24 15.43-8.49 22.7c-1.07 2.92-4.56 5.08-7.39 3.16c-.23-.16-.58-.56-.94-.78c.28 3.05 2.94 5.42 6.1 5.28l.87-.04c6.18.05 8.63-3.88 9.2-8.63c.71-5.95 2.6-12.92 7.58-19.53C41.31 25.65 54.55 22.95 64 22.94c9.45.01 22.69 2.71 32.28 15.46c4.9 6.52 6.81 13.37 7.54 19.27c.62 4.95 3.02 8.94 9.77 8.92l.33.02c3.16.15 5.82-2.23 6.1-5.28c-.35.21-.7.61-.93.77z"></path><path fill="#757575" d="M14.65 41.61c-.93-.66-1.66-1.39-.33-6.41c1.61-6.05 9.08-17.76 24.13-25.52c2.79-1.44 9.57-3.59 11.64.14c1.96 3.54-7.51 6.12-10.85 7.91c-8.74 4.7-15.05 11.33-18.44 16.57c-1.08 1.67-3.93 8.87-6.15 7.31z"></path></svg>` },    
      {id: 6, name: 'Gaming' , href:'/gaming', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 512 512"><path fill="#000000" d="M380.95 114.46c-62.946-13.147-63.32 32.04-124.868 32.04c-53.25 0-55.247-44.675-124.87-32.04C17.207 135.072-.32 385.9 60.16 399.045c33.578 7.295 50.495-31.644 94.89-59.593a51.562 51.562 0 0 0 79.77-25.78a243.665 243.665 0 0 1 21.24-.91c7.466 0 14.44.32 21.126.898a51.573 51.573 0 0 0 79.82 25.717c44.45 27.95 61.367 66.93 94.955 59.626c60.47-13.104 42.496-260.845-71.01-284.543zM147.47 242.703h-26.144V216.12H94.73v-26.143h26.594v-26.593h26.144v26.582h26.582v26.144h-26.582v26.582zm38.223 89.615a34.336 34.336 0 1 1 34.337-34.336a34.336 34.336 0 0 1-34.325 34.346zm140.602 0a34.336 34.336 0 1 1 34.367-34.325a34.336 34.336 0 0 1-34.368 34.335zM349.98 220.36a17.323 17.323 0 1 1 17.32-17.32a17.323 17.323 0 0 1-17.323 17.323zm37.518 37.52a17.323 17.323 0 1 1 17.322-17.324a17.323 17.323 0 0 1-17.365 17.334zm0-75.048a17.323 17.323 0 1 1 17.322-17.323a17.323 17.323 0 0 1-17.365 17.333zm37.518 37.518a17.323 17.323 0 1 1 17.323-17.323a17.323 17.323 0 0 1-17.367 17.334z"></path></svg>` },
      { id: 7 , name : 'Colthes' , href:'/colthes', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 64 64"><path fill="#000000" d="m18.811 7.785l.124.194a165.79 165.79 0 0 0-5.368.801c-1.841.31-5.796 1.776-8.428 2.802l-.016-.189L2 12.408l.898 12.334l3.335.284l-.02-.236l8.688.672c.154 10.261-1.067 22.453-1.897 29.581l-.291-.067l-.228 4.485S20.842 61.83 31.992 62v-4.64l.006-43.565L22.438 2l-3.627 5.785M3.834 23.818l-.779-10.701l1.175-.383l.911 11.196l-1.307-.112m27.158 37.161c-8.498-.235-15.258-1.734-17.467-2.281l.126-2.489c2.708.575 9.74 1.914 17.341 2.131v2.639m-1.866-6.068c-1.294 0-2.346-.979-2.346-2.186s1.052-2.186 2.346-2.186c1.295 0 2.346.979 2.346 2.186s-1.051 2.186-2.346 2.186m0-7.973c-1.294 0-2.346-.979-2.346-2.187c0-1.206 1.052-2.185 2.346-2.185c1.295 0 2.346.979 2.346 2.185c0 1.208-1.051 2.187-2.346 2.187m0-7.972c-1.294 0-2.346-.979-2.346-2.186c0-1.207 1.052-2.187 2.346-2.187c1.295 0 2.346.979 2.346 2.187c0 1.206-1.051 2.186-2.346 2.186m0-7.974c-1.294 0-2.346-.978-2.346-2.185c0-1.208 1.052-2.187 2.346-2.187c1.295 0 2.346.979 2.346 2.187c0 1.208-1.051 2.185-2.346 2.185m2.346-10.158c0 1.207-1.051 2.186-2.346 2.186c-1.294 0-2.346-.979-2.346-2.186s1.052-2.186 2.346-2.186c1.295 0 2.346.979 2.346 2.186m-.898-7.207l-4.605 3.532l-5.976-9.378l2.549-4.064l8.032 9.91"></path><path fill="#000000" d="m58.879 11.393l-.016.189c-2.632-1.024-6.588-2.492-8.428-2.802a168.624 168.624 0 0 0-5.368-.801l.124-.194L41.564 2H22.438l4.981 6.143h9.164l-4.585 5.652l1.091.836v47.34c10.603-.301 18.428-2.51 18.428-2.51l-.228-4.485l-.29.068c-.83-7.129-2.053-19.321-1.898-29.582l8.685-.672l-.02.236l3.336-.284L62 12.408l-3.121-1.015M41.46 3.716l2.549 4.065l-5.977 9.378l-4.61-3.533l8.038-9.91m8.891 52.496l.126 2.485c-2.114.521-8.395 1.913-16.388 2.238v-2.631c7.123-.268 13.668-1.533 16.262-2.092m9.815-32.394l-1.308.111l.914-11.194l1.173.382l-.779 10.701"></path></svg>`}
      ]
   
    const bestselling = [
      {id: 1 , name: "Product-1" , href:'/product-1', price:250 , offprice:360, stars:4 , image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc'},
      {id: 2 , name: "Product-2" , href:'/product-2', price:250 , offprice:360, stars:3 , image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc'},
      {id: 3 , name: "Product-3" , href:'/product-3', price:250 , offprice:360, stars:5 , image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc'},
      {id: 4 , name: "Product-4" , href:'/product-4', price:250 , offprice:360, stars:2 , image: 'https://imgs.search.brave.com/Od_s_A7H3fN31kxPGnX6XlvIUOhq091NVEoelgzMOQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzQ0LzU4LzU0/LzM2MF9GXzE0NDU4/NTQ5MF80WGg4dGl6/UmFxeTRFeGJ3eGV2/UHpCZGJsdzdhbDd5/Zy5qcGc'},

    ]

    const images = [
      'https://imgs.search.brave.com/9TKJjsmxa1QkmHyYEaqc2JBbm4ci76q8rXxtF_o-i4k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L29u/ZXBpZWNlL2ltYWdl/cy82LzZiL1NsaWRl/XzFfcHJldmlldy5w/bmcvcmV2aXNpb24v/bGF0ZXN0L3NjYWxl/LXRvLXdpZHRoLWRv/d24vODYwP2NiPTIw/MjMwNzE4MDQ1MTIy',
      'https://imgs.search.brave.com/eCL7FXw-jcK-F5ofEdWmHI854xOoE2zrRLMlkx9Cde4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA0L2RvbmZs/YW1pbmdvLXNpci1j/cm9jb2RpbGUtYW5k/LW1paGF3ay1mcm9t/LW9uZS1waWVjZS5q/cGc',
      'https://imgs.search.brave.com/zW88_PEZexlJCGDkcf7_BZV66wuvjEQwdKjhMSOK8wM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqQmxaRE16/TURndFkySXhZeTAw/TTJaakxUbGxZMkl0/TkRjME5qYzRORGhq/WmpVelhrRXlYa0Zx/Y0djQC5qcGc',
      'https://imgs.search.brave.com/LnbLF6BlqAKInGAHV6ZRGnGqlBEh1ly8Ze1fBpGkhf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA2L3Vzb3Bw/LXMtMTAtYmVzdC1m/aWdodHMtaW4tb25l/LXBpZWNlLXJhbmtl/ZC5qcGc',
    
    ]



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
    <>
     <div>
      <div className="flex content-left pl-20  items-center mt-20">
        <div className="bg-red-500 w-6 h-10 rounded-md border-r-2 border-red-600 mr-2"></div>
        <h2 className="text-2xl  text-red-500">Category</h2>
      </div>
      <div className="flex content-left justify-between pl-16 items-center mt-5">
        <div className="flex content-left mr-4 ml-4  items-center ">
          <h1 className="text-4xl text-black font-bold ">Broswse By Category</h1>
        </div>
        <div className='flex relative  justify-around mr-4 ml-2 items-center'>
                <button
            onClick={() => {
              document.getElementById('scrollable-category').scrollBy({ left: -200, behavior: 'smooth' });
            }}
            className="absolute right-20 top-1/2 transform -translate-y-1/2  p-2 rounded-full  z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              viewBox="0 0 512 512"
              className="text-black"
            >
              <path
                fill="currentColor"
                d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248s-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"
              ></path>
            </svg>
          </button>
          <button
          onClick={() => {
            document.getElementById('scrollable-category').scrollBy({ left: 200, behavior: 'smooth' });
          }}
          className="absolute -left-15 top-1/2 transform -translate-y-1/2  p-2 rounded-full  z-10"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 512 512"
          className="text-black"
        >
          <path
            fill="currentColor"
            d="M256 8c137 0 248 111 248 248S393 504 256 504S8 393 8 256S119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"
          ></path>
        </svg>
      </button>
        </div>
     </div>
        <div id="scrollable-category"
         style={{
          overflowX: 'scroll',
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer and Edge
        }}
        className="flex  overflow-x-scroll  flex-row gap-4 mt-10 ml-20 mr-16">
          {categories.map((category) => (
            <Link  key={category.id} href={category.href} className="flex hover:bg-red-500 flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <div dangerouslySetInnerHTML={{ __html: category.svg }} className="w-40 h-30 ml-20 mt-5 "></div>
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </Link>
          ))}
        </div>
         
        
          <div className="flex content-left pl-20  items-center mt-20">
            <div className="bg-red-500 w-6 h-10 rounded-md border-r-2 border-red-600 mr-2"></div>
            <h2 className="text-2xl  text-red-500">This Month</h2>
          </div>
          <div className="flex content-left justify-between pl-16 items-center mt-5">
            <div className="flex content-left mr-4 ml-4  items-center ">
              <h1 className="text-4xl text-black font-bold ">Best Selling Products</h1>
            </div>
            <div className='flex  bg-red-500 mr-12 px-10 py-2  rounded-lg  justify-around  items-center'>
              <Link href='/best-selling' className="text-lg text-white  font-semibold">See All</Link>
            </div>
          </div>
           <div className='mt-10 ml-20 mr-16  flex flex-row gap-4'>
             {bestselling.map((product) => (
               <div key={product.id} className='flex group relative flex-col items-center justify-center p-5 bg-white shadow-lg rounded-lg  hover:shadow-xl transition-shadow duration-300 mb-5'>
                  <div className='absolute top-5 right-4 flex m-4 flex-col justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" className=' bg-white p-2 rounded-2xl m-1' width="35" height="35" viewBox="0 0 1024 1024"><path fill="#080808" d="M287.984 114.16c31.376 0 88.094 15.008 180.094 105.616l45.616 44.912l44.928-45.632c63.872-64.896 131.84-105.2 177.376-105.2c61.408 0 109.809 21.008 157.009 68.096c44.464 44.368 68.992 103.36 68.992 166.112c.032 62.784-24.448 121.824-69.408 166.672c-3.664 3.712-196.992 212.304-358.96 387.104c-7.632 7.248-16.352 8.32-20.991 8.32c-4.576 0-13.2-1.024-20.8-8.096c-39.472-43.905-325.552-362-358.815-395.232C88.497 462.416 64 403.376 64 340.608c.015-62.752 24.511-121.728 69.04-166.144c43.295-43.264 93.984-60.304 154.944-60.304zm-.002-64c-76.528 0-144 22.895-200.176 79.008c-117.072 116.768-117.072 306.128 0 422.96c33.424 33.44 357.855 394.337 357.855 394.337c18.48 18.496 42.753 27.68 66.96 27.68c24.225 0 48.4-9.184 66.912-27.68c0 0 354.88-383.024 358.656-386.85c117.04-116.88 117.04-306.24 0-423.007c-58.112-58-123.024-86.784-202.208-86.784c-75.648 0-160 60.32-223.008 124.32C447.981 110.159 366.237 50.16 287.981 50.16z"></path></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className=' bg-white p-2 rounded-2xl m-1' width="35" height="35" viewBox="0 0 32 32" fill="#080808"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"><path d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9s13 6 13 9Z"></path><path d="M21 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></path></g></svg>
                  </div>
                 <img src={product.image} alt={product.name} className='w-80 h-70 m-2 object-cover rounded-lg' />
                 <Link
                     href="/product"
                    className="absolute flex-col top-80 -right-24 transform -translate-x-1/2 bg-black text-white text-sm px-20 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                     View Details
                    </Link>
                 <h3 className='text-xl font-semibold  mt-4 text-gray-800'>{product.name}</h3>
                 <div className=' m-2 flex gap-3 flex-row items-center justify-center'>
                 <p className=' text-xl text-red-500 '>${product.price}</p>
                 <p className='text-gray-400 text-xl line-through'>${product.offprice}</p>
                 </div>
                 <div className='flex items-center'>
                 {Array(5)
                .fill()
                .map((_, index) => (
                  <span key={index}>
                    {index < Number(product.stars) ? (
                      // Yellow filled star SVG
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36">
                        <path fill="#ffdd00" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"></path>
                      </svg>
                    ) : (
                      // Outline or unfilled star SVG
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#ffdd00" d="M21.995 9.933a.5.5 0 0 0-.423-.568l-6.304-.919l-2.82-5.73a.52.52 0 0 0-.896 0l-2.82 5.73l-6.304.92a.5.5 0 0 0-.278.852l4.563 4.46l-1.077 6.3a.5.5 0 0 0 .726.527L12 18.532l5.638 2.973a.506.506 0 0 0 .316.05a.5.5 0 0 0 .41-.576l-1.077-6.3l4.563-4.461a.5.5 0 0 0 .145-.285zM16.4 14.147a.501.501 0 0 0-.143.442l.95 5.558l-4.974-2.623a.506.506 0 0 0-.466 0l-4.974 2.623l.95-5.558a.501.501 0 0 0-.143-.442L3.572 10.21l5.565-.81a.501.501 0 0 0 .376-.275L12 4.07l2.487 5.054a.5.5 0 0 0 .376.274l5.565.811l-4.028 3.938z"></path>
                      </svg>
                    )}
                  </span>
                ))}
                 </div>

                </div>
                
              ))}
           </div>
            <div className=" relative flex flex-wrap justify-center mt-4 space-x-2">
            <div
            ref={scrollRef}
            className=" relative  rounded-xl m-20 flex overflow-x-scroll  flex-nowrap scrollbar-hide snap-x snap-mandatory scroll-smooth"
           
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
                className="flex-shrink-0  relative w-full snap-start"
                // style={{ width: `${containerWidth}px` }}
              >
                <Image
                  src={src}
                  alt={`Slide ${i}`}
                  width={800}
                  height={600}
                  className="w-full   h-[500px] object-cover"
                />
                  <div className="absolute inset-0 bg-black/40  flex  flex-col justify-end p-4 text-white rounded-lg">
                  <h2 className="text-lg ml-20 font-semibold">Image Title</h2>
                  <Link href={`/image/${i}`} className="mt-2 justify-center text-xl ml-20 mb-15 font-bold h-12  pl-10 p items-center w-40 bg-red-500 hover:bg-red-400 text-white px-4 py-3 rounded">
                    Click Me
                  </Link>
                </div>
                
              </div>
            ))}
          </div>

          
            </div>
      </div>
   
    </>
  )
}

export default Category
