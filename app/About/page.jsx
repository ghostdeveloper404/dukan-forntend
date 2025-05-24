'use client'
import React from 'react'
import { useEffect, useRef } from 'react'

const About = () => {

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;
      scrollAmount +=1;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);




  const amit = [
    {
      id: 1, svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1664 1472" fill="#ffffff"><path fill="#ffffff" d="M1664 675V331q0-40-50-89.5T1503.5 160t-95.5-32q0-24-20-44t-44-20H320q-24 0-44 20t-20 44q-35 0-95.5 32T50 241.5T0 331v337q0 39 34.5 72t93.5 42v562q-26 0-45 19t-19 45t19 45t45 19h1408q26 0 45-19t19-45t-19-45t-45-19V785q60-10 94-40.5t34-69.5zM896 896v448H256V782q79-24 96-39q57 50 160 50t160-50q57 50 160 50t160-50q57 50 160 50t160-50q17 15 96 39v562h-128V896H896zm64 64h256v384H960V960zM384 677l-1-377q0-58 33.5-82t94.5-26h129q0 54 1 223.5t0 261.5q-37 50-129 50q-90 0-128-50zm639 0V192h128q24 1 31 1.5t26 3t25 6t18 11.5t16 19t8 28t4 39l1 377q-6 27-41.5 41t-86.5 14t-87-14t-42-41zM384 896v320h384V896H384zm64 64h256v192H448V960z"></path></svg>`,
      number: 10.5, seller: "Sellers active on site"
    },
    {
      id: 2, svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" fill="#ffffff"><path fill="#ffffff" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7ZM8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"></path><path fill="#ffffff" d="M6.5 9h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1C7.33 8 8 7.33 8 6.5S7.33 5 6.5 5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1a2.5 2.5 0 0 1 0 5Z"></path><path fill="#ffffff" d="M10.5 7h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5Zm0-2h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5Zm-3 7c-.16 0-.32-.08-.42-.22l-2-3a.498.498 0 0 1 .83-.55l2 3c.15.23.09.54-.14.69c-.09.06-.18.08-.28.08Z"></path></svg>`,
      number: 33, seller: "Monthly Products sales"
    },
    {
      id: 3, svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#ffffff"><path fill="#ffffff" d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v10.005A3.495 3.495 0 0 1 16.505 22H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7H7Zm6.635 13.5a3.479 3.479 0 0 1-.625-1.995V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h5.635ZM11.5 7V5a1.5 1.5 0 0 0-3 0v2h3ZM13 7h2.5V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v2Zm1.51 11.505a1.995 1.995 0 0 0 3.99 0V8.5h-3.99v10.005Z"></path></svg>`,
      number: 45.5, seller: "Coustomer active in site"
    },
    {
      id: 4, svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="#ffffff"><g fill="#ffffff"><path d="M15.84 19.345h.07c1.5.04 2.7 1.26 2.7 2.76c0 1.28-.87 2.35-2.05 2.67v1.12c0 .4-.32.72-.72.72c-.4 0-.72-.32-.72-.72v-1.12a2.769 2.769 0 0 1-2.05-2.67c0-.4.32-.72.72-.72c.4 0 .72.32.72.72c0 .74.59 1.33 1.32 1.33c.73 0 1.33-.6 1.33-1.33c0-.73-.6-1.33-1.33-1.33h-.07a2.765 2.765 0 0 1-2.69-2.76c0-1.28.87-2.35 2.05-2.67v-1.12c0-.4.32-.72.72-.72c.4 0 .72.32.72.72v1.12c1.18.32 2.05 1.39 2.05 2.67c0 .4-.32.72-.72.72c-.4 0-.72-.32-.72-.72c0-.73-.6-1.33-1.33-1.33c-.73 0-1.33.6-1.33 1.33c0 .73.6 1.33 1.33 1.33Z"></path><path d="m10.532 5.1l2.786 3.26l-.301.336C7.283 9.982 3 15.103 3 21.225c0 5.382 4.368 9.75 9.75 9.75h6.17c5.382 0 9.75-4.367 9.75-9.749c.01-6.123-4.273-11.244-10.007-12.53a1.104 1.104 0 0 0-.11-.615l2.37-2.713l.153-.236a1.956 1.956 0 0 0-2.892-2.423l-.843-1a2.02 2.02 0 0 0-3.008-.005l-.883.986a1.96 1.96 0 0 0-2.918 2.41Zm3.799 1.385l-1.696-1.96a1.978 1.978 0 0 0 2.365-.5l.8-1.038l.888 1.052a1.97 1.97 0 0 0 2.3.513L17.3 6.485h-2.969ZM5 21.225c0-5.988 4.852-10.84 10.84-10.84c5.988 0 10.84 4.852 10.83 10.838v.002a7.753 7.753 0 0 1-7.75 7.75h-6.17A7.753 7.753 0 0 1 5 21.225Z"></path></g></svg>`,
      number: 25, seller: "Anual gross sales in site"
    },
  ]

  const team = [
    { id: 1, name: "Monkey D luffy", img: `https://toppng.com/uploads/preview/luffy-anime-one-piece-luffy-115628753714bjr6ypxar.png`, position: "Capitan of team" },
    { id: 2, name: "Usopp", img: `https://imgs.search.brave.com/ou1cu_7fbG4ngVDwV7O93KP5CFErYnjd5qRMGk_mNAc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvVXNv/cHAtUE5HLUJhY2tn/cm91bmQucG5n`, position: "Sniper" },
    { id: 4, name: "Roronoa Zoro", img: `https://imgs.search.brave.com/soajEr9HatwpD5sltkSbLR_4KPy5KpseX_zv78AGhgM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTQvWm9y/by1Oby1CYWNrZ3Jv/dW5kLnBuZw`, position: "Sword master" },
    { id: 3, name: "Nami", img: `https://imgs.search.brave.com/eRx53ctGSWfJ3-LvQir2Znjt2gIU06Bvkao6L1GFx-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzZXQuY29t/L3cvZnVsbC8xLzQv/ZC81MjA0MzguanBn`, position: "Navigator" },
    { id: 5, name: "Sanji", img: `https://imgs.search.brave.com/73HCDPfsfcdlOBVfG_4Zvsy3qQu4YldGrxAyz6CWJ7M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1hbmltZS1ib3kt/cGZwLW9uZS1waWVj/ZS1wa2xqb2dmNXJy/eGp1dzlrLmpwZw`, position: "Cook" },
    { id: 6, name: "Tony Tony Chopper", img: `https://imgs.search.brave.com/rgjeByEmDd2JdO_CvAyRD1QqVzBffA4giXldSvGTr3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y2FydG9vbmdvb2Rp/ZXMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzEyL09u/ZS1QaWVjZS1Ub255/LVRvbnktQ2hvcHBl/ci0yNDR4MzAwLnBu/Zw`, position: "Doctor" },
    { id: 7, name: "Nico Robin", img: `https://imgs.search.brave.com/7Ra6q7cF7zBYIzlqvFICttdKtiOK-4ufkf5niTv_2yA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEzMDIz/NjcwLmpwZw`, position: "Archaeologist" },
    { id: 8, name: "Franky", img: `https://imgs.search.brave.com/LFplrXqYD5cjMEJ0699LiwITmgqglQxDyPJ4l9pS0bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDcxMzUy/NjEuanBn`, position: "Shipwright" },
    { id: 9, name: "Brook", img: `https://imgs.search.brave.com/76Cv-vVR9Ye7t50rl_GrFXy15c5vpBMHw7U_aPzLrwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y4LzMw/LzE3L2Y4MzAxNzcz/MmZhODEwOWY1YTk5/MTZjNDZiN2IwMDFi/LmpwZw`, position: "Musician" },
  ]


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
    <div className="w-full overflow-hidden">
      <div className='flex flex-row my-2 gap-10 justify-center mx-25 items-center'>
        <div className=' m-2 justify-center items-center'>
          <h1 className='text-6xl my-12 font-semibold'>Our Story</h1>
          <p className='text-lg m-2'>We are a team of passionate developers who love to create amazing web applications. Our goal is to make the web a better place for everyone.</p>
          <p className='text-lg m-2'>We believe in the power of technology to change lives and we are committed to using our skills to make a positive impact on the world.</p>
        </div>
        <img className='h-full w-full' src="about.jpg" alt="about" />
      </div>
      <div>
        <div
          className='grid grid-cols-2 m-10 md:grid-cols-4   gap-2 justify-items-center'>
          {amit.map((item) => (
            <div key={item.id} className='flex flex-col border-1 rounded-lg hover:text-white hover:bg-red-600 border-neutral-400 p-4  w-60 gap-2 justify-center  items-center '>
              <div dangerouslySetInnerHTML={{ __html: item.svg }} className='w-20  bg-black  border-8 border-neutral-400 rounded-full flex justify-center items-center  h-20'></div>
              <h1 className='text-3xl  font-bold'>{item.number}k</h1>
              <p className='text-lg '>{item.seller}</p>
            </div>
          ))}
        </div>


      </div>
        <div   ref={scrollRef}
        style={{
          overflowX: 'scroll', 
          display: 'flex',
           scrollbarWidth: 'none', // For Firefox
           msOverflowStyle: 'none', // For Internet Explorer and Edge
        }}
          className='flex flex-row  overflow-x-auto space-x-4 m-16  px-4 py-4 scroll-smooth snap-x-mandatory snap-x'>
          {team.map((item) => (
             <div  key={item.id} className='min-w-[300px] gap-4 flex-shrink-0 snap-start  bg-white rounded-lg shadow-lg p-4'> 
               <div className='w-full bg-neutral-500 h-80 overflow-hidden rounded-lg'>
                <img src={item.img} alt={item.name} 
                 className='w-full h-full object-cover'
                />
               </div>
                <h1 className='text-2xl font-bold text-center mt-2'>{item.name}</h1>
                <p className='text-lg text-center'>{item.position}</p>

             </div>
          ))}
        </div>
        <div className='flex justify-center mx-10 items-center gap-6'>
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

export default About
