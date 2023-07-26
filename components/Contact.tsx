import React from 'react'
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}
type Inputs = {
  name:string;
  email:string;
  subject:string;
  message:string;
}
const Contact = (props: Props) => {
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:saksham28hans@gmail.com?subject=  ${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message}`;
      }
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
    className='flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-[100vh] justify-evenly mx-auto items-center'>
        <h3 className='uppercase text-gray-500 tracking-[20px] max-[450px]:tracking-[10px] text-xl absolute top-20'>Contact</h3>
        <div className='flex flex-col space-y-10 max-[450px]:space-y-5 mt-10'>
            {/* <h4 className='text-3xl font-semibold text-center max-[450px]:text-base'>
                I have got just what you need. Let's Talk
            </h4> */}
            <div className='space-y-10 max-[450px]:space-y-5'>
                <div className='flex items-center space-x-5 max-[450px]:space-x-3 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse max-[450px]:h-4 max-[450px]:w-4' />
                    <p className='text-2xl max-[450px]:text-lg'>+91 9871614317</p>
                </div>
                <div className='flex items-center space-x-5 max-[450px]:space-x-3 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse max-[450px]:h-4 max-[450px]:w-4' />
                    <p className='text-2xl max-[450px]:text-lg'>saksham28hans@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 max-[450px]:space-x-3 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse max-[450px]:h-4 max-[450px]:w-4' />
                    <p className='text-2xl max-[450px]:text-lg'>New Delhi, India</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex flex-col space-y-2 md:flex-row md:space-x-3 md:space-y-0'>
                    <input {...register("name")} placeholder='Name' className='contactInput' type="text" />
                    <input {...register("email")} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register("subject")} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register("message")} placeholder='Message' className='contactInput' />
                    <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg max-[450px]:h-12 max-[450px]:py-2 '>Submit</button>
                </form>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact