import React from 'react'
import SectionHeading from '../../helper/sectionHeading'

const About = () => {
  return (
    <div className='py-16 bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(248,180,244,1)_0%,_rgba(169,219,237,1)_90%)] 
    dark:bg-[radial-gradient(circle_farthest-corner_at_17.6%_50.7%,_rgba(25,0,184,1)_0%,_rgba(0,0,0,1)_90%)]'>
        {/* Section Heading */}
        <SectionHeading title_1='Sobre' title_2='Mí' description='Conoce al desarrollador detrás del código'/>
    </div>
  )
}

export default About