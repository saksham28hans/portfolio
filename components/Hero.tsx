import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackGroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {
  const[text, count] = useTypewriter({
    words: ["Hi ! My Name is Saksham Hans", "I am a Full-Stack Web Developer", "Welcome to my Portfolio"],
    loop : true,
    delaySpeed : 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackGroundCircles />
        <Image src='/images/saksham.jpg' alt='Profile Picture' width={500} height={500} className='relative rounded-full mx-auto object-cover w-32 h-32'></Image>
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-4 tracking-[15px]'>Full Stack Developer</h2>
        <h1 className='text-4xl  font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero