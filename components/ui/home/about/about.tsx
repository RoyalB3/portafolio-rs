import React from 'react'
import SectionHeading from '../../helper/sectionHeading'
import Image from 'next/image'
import { highlights, stats } from '@/data'
import { stat } from 'fs'

const About = () => {
  return (
    <div className='py-16 bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(248,180,244,1)_0%,_rgba(169,219,237,1)_90%)] 
    dark:bg-[radial-gradient(circle_farthest-corner_at_17.6%_50.7%,_rgba(25,0,184,1)_0%,_rgba(0,0,0,1)_90%)]'>
        {/* Section Heading */}
        <SectionHeading 
            title_1='Sobre' 
            title_2='Mí' 
            description='Conoce al desarrollador detrás del código'/>
            
            <div className='grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center'>
                {/* Imagen */}
                <div className='relative'>
                    <div className='aspect-square rounded-2xl overflow-hidden p-2'>
                        <Image 
                            src={"/images/perfil-linkedin.jpg"} 
                            alt='profile' 
                            width={700} 
                            height={700} 
                            className='w-full h-full object-center rounded-xl'
                        />
                    </div>
                </div>
                {/* Contenido */}
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>
                        Soy un desarrollador creativo y metódico
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>Soy un desarrollador fullstack de +2 años de experiencias creando aplicaciones nativas y web. 
                        Este viaje nació de la necesidad de plasmar ideas através de un computador. 
                    </p>
                    <p className='text-muted-foreground leading-relaxed'>Más allá del código, me considero un apasionado por los conocimientos,
                        me gusta compartir lo que sé y a la vez aprender de las personas.
                        Suelo ver cada día como una oportunidad para aprender algo nuevo.
                    </p>
                    {/* Adornos */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
                        {highlights.map((item) => {
                            return <div 
                                key={item.text}
                                className='flex items-center gap-3 text-sm'>
                                    <div className='w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center'>
                                        <item.icon className='w-4 h-4 text-blue-500'/>
                                    </div>
                                    <span className='text-muted-foreground'>{item.text}</span>
                                </div>
                        })}
                    </div>
                </div>
            </div>
            {/* estadisticas */}
            <div className='mt-16 w-[80%] mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                    {stats.map((stat) => {
                        return <div 
                            key={stat.label} 
                            className='bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center'
                        >
                            <div className='text-3xl md:text-4xl font-bold text-purple-600 mb-2'>{stat.value}</div>
                            <div className='text-sm text-muted-foreground'>{stat.label}</div>
                        </div>
                    })}
                </div>
            </div>
    </div>  
  )
}

export default About