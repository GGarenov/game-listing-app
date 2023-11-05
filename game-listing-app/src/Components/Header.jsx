import React from 'react'
import logo from './../assets/Images/logo.png'
import {HiMagnifyingGlass } from "react-icons/hi2";

function Header() {
  return (
      <div>
      <img src={logo} width={80} height={80} />
          <div className='flex bg-slate-500 p-2 w-full items-center'>
              <HiMagnifyingGlass/>
              
          <input type="text" className='bg-transparent outline-none'/>
          </div> 
      </div>
  )
}

export default Header