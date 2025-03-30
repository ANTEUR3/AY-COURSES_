import React from 'react'
import Image from 'next/image';
import logo from '../../../public/Logo.png'
import Link from 'next/link'
import { BsTwitterX ,BsGithub,BsInstagram } from "react-icons/bs";


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full  bg-gray-100 '>
        <div className='lg:px-[90px] px-[10px] flex  justify-between items-center  lg:gap-y-[20px]  '>
            <Image src={logo} alt='' className='w-[48px] h-[48px] lg:w-[90px] lg:h-[90px]'/>
            <FooterLinks/>
        <FooterContact/>

        </div>
        <div className='bg-gray-900 flex justify-center items-center lg:py-[3px] py-[2px] text-white font-bold lg:text-lg mt-5'>
            All Rights Reserved

        </div>
       
    </div>
  )
}

export default Footer

const FooterLinks=()=>{
    return <div className='flex justify-center items-center lg:gap-x-[25px] gap-x-[15px]'>
       <Link className='font-medium lg:font-semibold lg:text-xl text-md' href={'/'}>Home</Link>
       <Link className='font-medium lg:font-semibold lg:text-xl text-md' href={'/Courses'}>Courses</Link>
       <Link className='font-medium lg:font-semibold lg:text-xl text-md' href={'/'}>Exams</Link>
    </div>
}

const FooterContact=()=>{
    return <div className='flex justify-center items-center lg:gap-x-[15px] gap-x-[10px]'>
        <BsTwitterX  className='lg:text-2xl text-lg text-black '/>
        <BsGithub  className='lg:text-2xl text-lg text-black '/>
        <BsInstagram  className='lg:text-2xl text-lg text-black '/>
    </div>
}