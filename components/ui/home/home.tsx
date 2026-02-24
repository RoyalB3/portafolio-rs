"use client";
import React from 'react'
import ThemeToggler from '../helper/themeToggler'
import Hero from './hero/hero'
import About from './about/about';
import Skills from './skills/skills';
import Project from './project/project';
import Experience from './experience/experience';

const Home = () => {
  return (
    <div className="overflow-hidden">
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Experience/>
    </div>
  )
}

export default Home