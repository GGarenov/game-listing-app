import React from 'react'
import logo from './../assets/Images/logo.png'
import {HiMagnifyingGlass, HiMoon } from "react-icons/hi2";

function Header() {
  return (
      <div className='flex items-center'>
      <img src={logo} width={80} height={80} />
          <div className='flex bg-slate-500 p-2 w-full  mx-5 rounded-full items-center'>
              <HiMagnifyingGlass/>
          <input type="text" className='bg-transparent outline-none'/>
          </div> 
          <div>
              <HiMoon/>
          </div>
      </div>
  )
}

export default Header