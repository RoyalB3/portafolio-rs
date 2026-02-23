"use client";
import React from 'react'
import ThemeToggler from '../helper/themeToggler'
import Hero from './hero/hero'
import About from './about/about';
import Skills from './skills/skills';

const Home = () => {
  return (
    <div className="overflow-hidden">
        <Hero/>
        <About/>
        <Skills/>
    </div>
  )
}

export default Home