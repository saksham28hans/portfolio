import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[300px] max-[300px]:w-[200px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden '>
         <motion.img 
         initial = {{
            y:-100,
            opacity : 0,
         }}
         transition = {{
            duration : 1.2
         }}
         whileInView = {{
            opacity : 1, y: 0
         }}
         viewport = {{
            once:true
         }}
         className='w-24 h-24 rounded-full object-cover object-center'
         src="/images/deloitte.jpg"
         />

         <div className='px-0 md:px-10'>
            <h4 className='text-xl md:text-3xl font-light'>Analyst</h4>
            <p className='text-base font-bold md:text-xl mt-1'>Deloitte</p>
            <div className='flex space-x-2 my-2'>
                <img className="w-10 h-10 rounded-full" src="/images/saksham.jpg" alt="" />
                <img className="w-10 h-10 rounded-full" src="/images/saksham.jpg" alt="" />
                <img className="w-10 h-10 rounded-full" src="/images/saksham.jpg" alt="" />
            </div>
            <p className='md:uppercase py-2 text-gray-100'>Started- Aug 2018, Ended- Aug 2021</p>
            <div className='h-32 md:h-36  overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            <ul className='list-disc space-y-2 ml-5 mr-2 text-base'>
                <li>Summary Points Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, perspiciatis.</li>
                <li>Summary Points Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ut.</li>
                <li>Summary Points Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ratione.</li>
                <li>Summary Points Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, architecto.</li>
            </ul>
            </div>
         </div>

    </article>
  )
}

export default ExperienceCard