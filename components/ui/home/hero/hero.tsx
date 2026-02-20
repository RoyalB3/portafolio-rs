import { Download, FolderOpen } from 'lucide-react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Button } from '../../ui/button'

const hero = () => {
  return (
    <div className='relative min-h-screen 
        bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(248,180,244,1)_0%,_rgba(169,219,237,1)_90%)]
        flex items-center justify-center overflow-hidden 
        dark:bg-[radial-gradient(circle_farthest-corner_at_17.6%_50.7%,_rgba(25,0,184,1)_0%,_rgba(0,0,0,1)_90%)]'
    >
        {/*Contenido*/}
        <div className='relative z-10 text-center'>
            {/* Pin de disponibilidad*/}
            <div className='sm:mb-6'>
                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600
                text-sm text-muted-foreground dark-text-gray-200 mb-8'>
                    <span className='w-2 h-2 rounded-full bg-green-500'></span>
                    Disponible a Oportunidades
                </span>
            </div>
            {/* Titulo */}
            <h1 className='text-4xl sm:text-4xl md:text-6xl lg:text-4xl font-bold mb-6'>    
                Hola! me llamo <span className='lg:text-5xl md:text-7xl text-purple-600 dark:text-yellow-300'>Richard Sequera</span>
            </h1>
            <div className='text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12'>
                <TypeAnimation 
                    sequence={[
                        "FullStack Developer",
                        2000,
                        "Editor de Videos",
                        2000,
                        "Gamer",
                        2000,
                        "Genio del fútbol (mentira xD)",
                        2000  
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    className='font-mono'
                />
            </div>
            <p className='text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10'>
                Desarrollador Fullstack con +3 años de experiencia trabajando para empresas de gran renombre a nivel latinoamericano    
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size={"lg"} asChild className='w-fit mx-auto sm:mx-0'>
                <a href="#_">
                    <FolderOpen className='w-5 h-5 mr-2'/>
                    Ver Proyectos
                </a>
            </Button>
            <Button size={"lg"} asChild className='w-fit mx-auto sm:mx-0'>
                <a href="#_">
                    <Download className='w-5 h-5 mr-2'/>
                    Descargar CV
                </a>
            </Button>
            </div>
        </div>
    </div>
  )
}

export default hero