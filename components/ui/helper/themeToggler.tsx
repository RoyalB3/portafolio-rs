"use client"; //solo así podemos usar hooks
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { Sun, Moon } from 'lucide-react';

const ThemeToggler = () => {

    const [mounted, setMounted] = useState(false);

    const {theme, setTheme, systemTheme} =  useTheme();

    useEffect(()=>{
        montChecked();
    },[]);

    const montChecked = () => {
        setMounted(true)
    };

    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
  return (<Button 
    className='p-2 transition w-10 h-10 cursor-pointer 
    bg-gray-100 dark:bg-gray-800 
    rounded-lg flex flex-col 
    items-center justify-center'
    onClick={() => setTheme(currentTheme==="dark" ? "ligth" : "dark")}
    >
        {currentTheme == "dark" ? (
            <Sun className='text-white w-7 h-7 cursor-pointer'/>
        ) : (<Moon className='text-black w-7 h-7 cursor-pointer'/>)}
    </Button>)
}

export default ThemeToggler