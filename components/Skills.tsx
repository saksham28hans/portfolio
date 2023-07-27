import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { skills } from '../data/skill.js';
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
        {skills.map((skill,i)=>(
            <Skill key={i} directionLeft={skill.directionLeft} imgUrl ={skill.imgUrl} proficiency={skill.proficiency}/>
        ))}
           {/* <Skill directionLeft={true} imgUrl ='/images/react.png'/>
           <Skill directionLeft={true} imgUrl ='/images/nodejs.png'/>
           <Skill directionLeft={true}imgUrl ='/images/mongodb.png'/>
           <Skill directionLeft={true} imgUrl ='/images/javascript.png'/>
           <Skill directionLeft={true} imgUrl ='/images/express.png'/>
           <Skill directionLeft={true} imgUrl ='/images/nextjs.png'/>
           <Skill directionLeft={true} imgUrl ='/images/redux.png'/>
           <Skill directionLeft={true} imgUrl ='/images/html.png'/>
           <Skill imgUrl ='/images/python.png'/>
           <Skill imgUrl ='/images/c++.png'/>
           <Skill imgUrl ='/images/java.png'/>
           <Skill imgUrl ='/images/firebase.png'/>
           <Skill imgUrl ='/images/abap.png'/>
           <Skill imgUrl ='/images/bp.png'/>
           <Skill imgUrl ='/images/css.png'/> */}
        </div>

    </motion.div>
  )
}

export default Skills