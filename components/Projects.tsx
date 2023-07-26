import React from 'react'
import { motion } from 'framer-motion'

type Props = {}
const projects = [1,2,3,4,5];
const Projects = (props: Props) => {
  return (
    <div className='h-[100vh] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='uppercase text-gray-500 tracking-[20px] text-2xl absolute top-20 max-[450px]:tracking-[10px]'>
        Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {projects.map((project,i)=>(
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:p-44 h-[95vh] overflow-hidden '>
                <motion.img
                initial ={{
                    y:-100,
                    opacity: 0
                }} 
                transition = {{
                    duration : 1.2
                }}
                whileInView={{
                    opacity : 1,
                    y:0
                }}
                viewport={{
                    once:true
                }}
                src='/images/deloitte.jpg'
                className='w-24 h-24 max-[450px]:w-16 max-[450px]:h-16 lg:w-32 lg:h-32'
                />
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-2xl font-semibold text-center max-[450px]:text-xl max-[290px]:text-base'>
                        Case Study  {i+1} of {projects.length} : Netflix Clone
                    </h4>
                    <p className='text-base text-center md:text-left lg:text-xl px-4 max-[290px]:text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae id magnam quos adipisci, dolorem corporis distinctio quae vel provident voluptatibus culpa est debitis minima laboriosam neque voluptatum perspiciatis exercitationem. Itaque sapiente harum debitis laudantium. Reiciendis autem sed corrupti cum ipsa sit dolores facilis, consectetur vel id ipsam suscipit excepturi.
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-6'>
        </div>
    </div>
  )
}

export default Projects