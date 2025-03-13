import React from 'react'
import { TbPointFilled } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import student from '../../../public/student.png'
import Student1 from '../../../public/Student1.png'
import googleMeet from '../../../public/GoogleMeet.png'
import gmail from '../../../public/Gmail.png'
import lamp from '../../../public/lamp.png'
import cs from '../../../public/CS.png'
import js from '../../../public/JS.png'
import Dtabases from '../../../public/Databases.png'

type Props = {}

const TopHomePart = (props: Props) => {
  return (
    <div className='flex justify-start items-start lg:px-[100px] h-screen lg:pt-[170px]'>
        <LeftPart />
        <RightPart />
        <GoogleMeet />
        <Gmail />
        <Lamp/>
        <CS />
        <JS />
        <Databases />
    </div>
  )
}

export default TopHomePart

const LeftPart=()=>{
    return <div className='w-2/3 '>
          <div className=' flex justify-start items-center gap-x-2 mb-2'>
            <p className='text-green-700 fond-black text-3xl'>E-Learning Platform</p>
          </div>
          <p className='mb-5 text-5xl font-bold w-full'>Powrful Courses 10,000 <span className='text-green-700'>Businesses </span>
          Worldwide</p>
          <p className='text-gray-400  text-md'>AY-COURSES platform which   offer several features for CS students </p>
          <p className='text-gray-400  text-md'>many Courses , Exams , Exercices in various CS fields</p>
          <p className='text-gray-400  text-md mb-[30px]'>Prgramming languages | Logic and mathematics | Databases | IA </p>
         <div className='flex justify-start items-center gap-x-[40px]'>
              <button className='rounded-lg px-4 py-2 text-white bg-green-700 text-xl cursor-pointer hover:bg-green-500 '>Get started !</button>
              <div className='flex justify-start items-center gap-x-3'>
                <div className=' px-4 py-4 rounded-full bg-orange-600'>
                <FaPlay className=' text-xl   text-white' />
                </div>
                <p className='font-semibold text-gray-800 text-xl'>How it work</p>
              </div>
         </div>
    </div>
}


const RightPart=()=>{
     return  <Image src={student} alt='' className='-translate-y-[130px] -translate-x-[ 80px]   ' />
     
}

const GoogleMeet=()=>{
    return <Image src={googleMeet} className='absolute top-[150px] right-[170px] w-[70px]  rounded-full' alt='' />
}

const Gmail=()=>{
    return <Image src={gmail} className='absolute top-[200px] right-[460px] w-[70px]  rounded-full' alt='' />
}

const Lamp=()=>{
    return <Image src={lamp} className='absolute top-[280px] right-[550px] w-[50px]  rounded-full' alt='' />
}
const CS=()=>{
    return <Image src={cs} className='absolute top-[120px] right-[600px] w-[80px]  rounded-full' alt='' />
}

const JS=()=>{
    return <Image src={js} className='absolute bottom-[50px] right-[600px] w-[50px]  rounded-full' alt='' />
}
const Databases=()=>{
    return <Image src={Dtabases} className='absolute bottom-[50px] right-[70px] w-[75px]  rounded-full' alt='' />
}