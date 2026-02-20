"use client";
import React, { useState } from 'react'
import NavBar from './navbar'
import MobileNav from './mobileNav'

const ResponsiveNav = () => {

    const [showNav,setShowNav] = useState(false);

    const HandleOpenNav = () => setShowNav(true);
    const HandleCloseNav = () => setShowNav(false);

  return (
    <div>
        <NavBar openNav={HandleOpenNav}/>
        <MobileNav showNav={showNav} closeNav={HandleCloseNav}/>
    </div>
  )
}

export default ResponsiveNav