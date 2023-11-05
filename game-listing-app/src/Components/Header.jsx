import React from 'react'
import logo from './../assets/Images/logo.png'
import {HiMagnifyingGlass } from "react-icons/hi2";

function Header() {
  return (
      <div>
      <img src={logo} width={80} height={80} />
          <div>
              <HiMagnifyingGlass/>
          <input type="text" />
          </div> 
      </div>
  )
}

export default Header