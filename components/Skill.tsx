import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
};

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
         <motion.img 
        initial ={{
            // x : directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{
            duration : 1.5
        }}
        whileInView={{
            opacity : 1,
            // x:0
        }} 
        src="/images/react.png"
        className='rounded-full border max-[300px]:w-12 max-[300px]:h-12 border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:h-20 md:w-20 max-[300px]:w-12 max-[300px]:h-12 rounded-full z-0' >
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl md:text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill