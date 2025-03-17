import React from 'react'
import Image from 'next/image';
import logo from '../../../public/Logo.png'
import Link from 'next/link'
import { BsTwitterX ,BsGithub,BsInstagram } from "react-icons/bs";


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full  bg-gray-100 '>
        <div className='lg:px-[90px] flex  justify-between items-center lg:gap-y-[20px] '>
            <Image src={logo} alt='' className='lg:w-[90px] lg:h-[90px]'/>
            <FooterLinks/>
        <FooterContact/>

        </div>
        <div className='bg-gray-900 flex justify-center items-center lg:py-[3px] text-white font-bold lg:text-lg'>
            All Rights Reserved

        </div>
       
    </div>
  )
}

export default Footer

const FooterLinks=()=>{
    return <div className='flex justify-center items-center lg:gap-x-[25px]'>
       <Link className='lg:font-semibold lg:text-xl' href={'/'}>Home</Link>
       <Link className='lg:font-semibold lg:text-xl' href={'/Courses'}>Courses</Link>
       <Link className='lg:font-semibold lg:text-xl' href={'/'}>Exams</Link>
    </div>
}

const FooterContact=()=>{
    return <div className='flex justify-center items-center lg:gap-x-[15px]'>
        <BsTwitterX  className='lg:text-2xl text-black '/>
        <BsGithub  className='lg:text-2xl text-black '/>
        <BsInstagram  className='lg:text-2xl text-black '/>
    </div>
}