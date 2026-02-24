import React from 'react'
import SectionHeading from '../../helper/sectionHeading'
import { projects } from '@/data'
import ProjectCard from './projectCard'

const Project = () => {
  return (
    <div className='py-16 
        bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(248,180,244,1)_0%,_rgba(169,219,237,1)_90%)] 
        dark:bg-[radial-gradient(circle_farthest-corner_at_17.6%_50.7%,_rgba(25,0,184,1)_0%,_rgba(0,0,0,1)_90%)]'
    >    
        <SectionHeading 
            title_1='Proyectos' 
            title_2='Realizados' 
            description='Una selección de mis proyectos más recientes'
        />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
            {projects.map((project,index)=> {
                return <div key={index}>
                    <ProjectCard {...project}/> 
                </div>
            })}
        </div>
    </div>
  )
}

export default Project