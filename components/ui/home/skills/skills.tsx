import React from 'react'
import SectionHeading from '../../helper/sectionHeading'
import { skillCategories } from '@/data'
import SkillsCard from './skillsCard'

const Skills = () => {
  return (
    <div className='py-16
    bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(248,180,244,1)_0%,_rgba(169,219,237,1)_90%)] 
    dark:bg-[radial-gradient(circle_farthest-corner_at_17.6%_50.7%,_rgba(25,0,184,1)_0%,_rgba(0,0,0,1)_90%)]'>
        <SectionHeading 
            title_1='Conocimientos' 
            title_2='Técnicos' 
            description='Técnologías que he adquirido con el tiempo'
        />
        <div className='space-y-12 w-[80%] mx-auto'>
            {skillCategories.map((category) => {
                return <div key={category.title}>
                    <h3 className='text-xl font-semibold mb-6 flex items-center gap-3'>
                        <span className='w-2 h-2 rounded-full bg-purple-600'></span>
                        {category.title}
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                        {category.skills.map((skill,index) => {
                            return <div key={index}>
                                <SkillsCard name={skill.name} icon={skill.icon}/>
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Skills