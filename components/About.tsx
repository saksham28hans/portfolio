import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

const About = (props: Props) => {
    return (
        <>
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
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='uppercase text-gray-500 tracking-[20px]  max-[300px]:text-xl max-[300px]:tracking-[10px] text-2xl mx-auto absolute top-20'>About</h3>
            
            <motion.img
                initial={{
                    x: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{
                    once: true
                }}
                src="/images/saksham.jpg" alt="About Picture"
                className='mt-5 -mb-20 md:mb-0 flex-shrink-0 max-[380px]:w-32 max-[380px]:h-32  max-[300px]:w-20 max-[300px]:h-20 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px] md:mt-0' />

            <div className='space-y-5 px-0 md:pl-20 md:pr-10 md:mt-0'>
                <h4 className='text-xl font-semibold md:text-4xl max-[300px]:text-base'>Here is a little background</h4>
                <p className='text-base max-[380px]:text-sm  max-[300px]:text-[11px] xl:text-xl'>Hi, My Name is Saksham Hans. I am a dedicated full stack web developer currently pursuing my MCA from NIT, Kurukshetra. With 2 years of experience in web development, I have honed my skills in both front-end and back-end technologies. Previously, I worked as an SAP ABAP developer at Deloitte, contributing to enterprise-level solutions. My expertise spans various aspects of web development, enabling me to deliver high-quality and efficient web solutions.</p>
            </div>
            
        </motion.div>
        </>
    )
}

export default About