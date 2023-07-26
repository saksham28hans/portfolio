import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity : 1,
    }}
    transition={{
        duration: 1.5
    }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='uppercase text-gray-500 tracking-[20px] text-2xl  max-[300px]:text-xl max-[500px]:tracking-[10px] mx-auto absolute top-20 xl:top-16 '>Experience</h3>

        <div className='max-[380px]:mt-20 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default WorkExperience