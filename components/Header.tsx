import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
     <motion.div
     initial = {{
        x:-500,
        opacity : 0,
        scale: 0.5,
     }} 
     animate = {{
        x:0,
        opacity : 1,
        scale: 1.0
     }}
     transition={{
        duration : 1.5
     }}
     className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon
        url='https://www.linkedin.com/in/saksham-hans-693077116/'
        fgColor='gray'
        bgColor='transparent'
        />
       <SocialIcon
        url='https://github.com/saksham28hans'
        fgColor='gray'
        bgColor='transparent'
        />
       {/* <SocialIcon
        url='https://leetcode.com/sak97hans/'
        fgColor='gray'
        bgColor='transparent'
        network='leetcode'
        /> */}
   <Link href="https://leetcode.com/sak97hans/"> 
     <Image src='/images/saksham.jpg' alt='Profile Picture' width={500} height={500} className='relative rounded-full mx-auto object-cover w-32 h-32'></Image>
   </Link>
     </motion.div>
     
     <motion.div
     initial = {{
        x:500,
        opacity : 0,
        scale: 0.5
     }}
     animate = {{
        x:0,
        opacity:1,
        scale : 1
     }}
     transition={{
        duration : 1.5
     }} 
     className='cursor-pointer'>
        <SocialIcon
        className='cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='transparent'
        url='#contact'
        />
        <Link href="#contact"> 
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
     </Link>
     </motion.div>
    </header>
  )
}

export default Header