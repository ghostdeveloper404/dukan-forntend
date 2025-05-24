import React from 'react'
import Link from 'next/link'

const landing = () => {
  const footer = [
    { id: 1, title: "Exclusive", iten1: "Subscribe", item2: "Get 10% off" },
    { id: 2, title: "Support", item1: "404 Nowhere , Nw 500 , k2-18b  Leo constellation  , ", item2: "nothuman@leomail.const", item3: "+495 234 567 890" },
    { id: 3, title: "Account", item1: "My Account", item2: "Login/Register", item3: "Cart", item4: "Shop" },
    { id: 4, title: "Quick Link", item1: "Privacy Policy", item2: "Terms and Use", item3: "FAQ", item4: "Contact Us" },
    {
      id: 5, title: "Follow Us", item1: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="#f7f3f3"><path fill="#f7f3f3" d="M7.2 16V8.5h-2V5.8h2V3.5C7.2 1.7 8.4 0 11.1 0c1.1 0 1.9.1 1.9.1l-.1 2.5h-1.7c-1 0-1.1.4-1.1 1.2v2H13l-.1 2.7h-2.8V16H7.2z"></path></svg>`, item2: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f7f3f3"><path fill="#f7f3f3" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"></path></svg>`
      , item3: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="#f7f3f3"><path fill="none" stroke="#f7f3f3" strokeLinecap="round" strokeLinejoin="round" d="M4 9.4a6.77 6.77 0 0 1-2.41 1.21a.5.5 0 0 0 0 .94C8.51 14.39 12.91 10 12.24 5.13l1.12-2.32h-1.3C10.44.82 6.14.92 6.85 5.16c0 0-2.3.41-5.24-2.48A.5.5 0 0 0 .76 3A5.52 5.52 0 0 0 4 9.4"></path></svg>`,
      item4: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 464 480" fill="#f7f3f3"><path fill="#f7f3f3" d="M462 274v170h-98V285q0-67-50-67q-37 0-51 36q-3 7-3 24v166h-99q1-269 0-297h99v42l-1 1h1v-1q32-49 89-49q51 0 82 34t31 100zM58 4Q33 4 17.5 18.5T2 55t15 37t39 15h1q25 0 40.5-15T113 55q-1-22-16-36.5T58 4zM7 444h99V147H7v297z"></path></svg>`
    },
  ]
  return (
    <div>

      <div className='bg-[#1a1a1a] text-[#f7f3f3] py-10 px-5'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='flex flex-col md:flex-row gap-16'>
            {footer.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                {item.id === 5 ? (
                  // Render with dangerouslySetInnerHTML for id: 5
                  <>
                    <div className='flex gap-5 mt-5 md:mt-0'>
                    <div className='text-xl' dangerouslySetInnerHTML={{ __html: item.item1 }}></div>
                    <div className='text-xl' dangerouslySetInnerHTML={{ __html: item.item2 }}></div>
                    <div className='text-xl' dangerouslySetInnerHTML={{ __html: item.item3 }}></div>
                    <div className='text-xl' dangerouslySetInnerHTML={{ __html: item.item4 }}></div>
                    </div>
                  </>
                   ) : item.id === 3 ? (
                    // Render as links for id: 2 and id: 4
                    <>
                      <Link href="/Myaccount">{item.item1}</Link>
                      <Link href="/Signup">{item.item2}</Link>
                      <Link href="/cart">{item.item3}</Link>
                      <Link href="/">{item.item4}</Link>
                    </>
                     ) :  item.id === 4 ? (
                      // Render as links for id: 2 and id: 4
                      <>
                        <Link href="/About">{item.item1}</Link>
                        <Link href="/About">{item.item2}</Link>
                        <Link href="/About">{item.item3}</Link>
                        <Link href="/Contact">{item.item4}</Link>
                      </>
                   
                 
                ) : (
                  // Render normally for other ids
                  <>
                    <p >{item.iten1}</p> 
                    <p>{item.item2}</p> 
                    <p>{item.item3}</p>
                    <p>{item.item4}</p>
                  </>
                )}
              </div>
            ))}
          </div>
         
        </div>
      </div>

    </div>
  )
}

export default landing
