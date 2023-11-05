import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import {HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";

function Header() {
    const [toggle, setToggle] = useState(true);
  return (
      <div className='flex items-center p-3'>
      <img src={logo} width={80} height={80} />
          <div className='flex bg-slate-500 p-2 w-full  mx-5 rounded-full items-center'>
              <HiMagnifyingGlass/>
          <input type="text" placeholder='Search Game' className='px-2 bg-transparent outline-none'/>
          </div> 
          <div>
              {toggle
                  ? <HiMoon className='text -[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                      onClick={() => setToggle(!toggle)} />
                  : <HiSun className='text -[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                      onClick={() => setToggle(!toggle)}/>
              }
          </div>
      </div>
  )
}

export default Header