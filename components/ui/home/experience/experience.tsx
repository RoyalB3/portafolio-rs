import React from 'react'
import SectionHeading from '../../helper/sectionHeading'
import { experiences } from '@/data'
import { Briefcase, GraduationCap } from 'lucide-react'

const Experience = () => {
  return (
    <div className='py-16 
    bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(248,180,244,1)_0%,_rgba(169,219,237,1)_90%)] 
    dark:bg-[radial-gradient(circle_farthest-corner_at_17.6%_50.7%,_rgba(25,0,184,1)_0%,_rgba(0,0,0,1)_90%)]
    '>
        <SectionHeading 
            title_1='Experiencia y' 
            title_2='Educación' 
            description='Mi travesía profesional y acádemica'
        />
        <div className='relative px-6 max-w-4xl mx-auto'>
            {/* timeline */}
            <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b 
            from-blue-400 to-blue-900 md:-translate-x-px'></div>
            {experiences.map((item,index) => {
                return (
                    <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 
                    ${index %2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >                            
                        {/* timeline node */}
                        <div className='absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full
                        bg-white border-2 border-blue-500 flex items-center justify-center z-10'>
                            {item.type === "work" ? (
                                <Briefcase className='w-4 h-4 text-blue-500'/>
                                ) : (
                                    <GraduationCap className='w-4 h-4 text-blue-500'/>
                                ) 

                            }
                        </div>
                        {/* Content */}
                        <div className='ml-16 md:ml-0 md:w-[calc(50%-2rem)]'>
                            <div className='bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:scale-105
                            transition-all duration-300'>
                                <div className='flex items-center gap-2 text-sm text-blue-50 mb-2'>
                                    <span className='px-3 py-1 rounded-full bg-blue-600/10 font-medium'>
                                        {item.period}
                                    </span>
                                </div>
                                <h3 className='text-xl font-semibold mb-1'>{item.title}</h3>
                                <p className='text-muted-foreground text-sm mb-3'>{item.company}</p>
                                <p className='text-muted-foreground text-sm mb-4'>{item.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {item.technologies.map((tech) => {
                                        return <span
                                            key={tech}
                                            className='text-xs px-2 py-1 rounded-md bg-indigo-500 text-white'
                                        >
                                            {tech}
                                        </span>
                                    })

                                    }
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:block md:w-[calc(50%-2rem)]'></div>
                    </div>
                    );
            })}
        </div>
    </div>
  )
}

export default Experience