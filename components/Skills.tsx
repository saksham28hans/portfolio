import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity : 1,
    }}
    transition={{
        duration: 1
    }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='uppercase text-gray-500 tracking-[20px] text-2xl absolute top-20 max-[400px]:tracking-[10px]'>Skills</h3>
        <h3 className='uppercase text-gray-500 tracking-[3px] absolute top-32 text-sm'>
            Hover over a skill for current proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5'>
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
           <Skill />
        </div>

    </motion.div>
  )
}

export default Skills