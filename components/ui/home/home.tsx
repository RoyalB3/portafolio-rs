"use client";
import React from 'react'
import ThemeToggler from '../helper/themeToggler'
import Hero from './hero/hero'
import About from './about/about';

const Home = () => {
  return (
    <div className="overflow-hidden">
        <Hero/>
        <About/>
    </div>
  )
}

export default Home