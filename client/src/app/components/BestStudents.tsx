import React, { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image';
import logo from '../../../public/Logo.png'
import { FaCalendarAlt } from "react-icons/fa";

type Props = {
    children:ReactNode
}

export type student ={
    id:number,
    name:string,
    job:string,
    points : number,
    bio:string,
    company:string,
    date:Date,
    image:StaticImageData
}

function BestStudents({children}: Props) {
    return (
        <div className="w-full px-[20%] lg:pb-5">
          <div className="w-full flex justify-center items-center gap-x-3 pb-4">
            <Image src={logo} alt="" className="w-[80px]  " />
            <h1 className="text-4xl font-bold text-gray-800  ">
             Best students in  <span className="text-green-600"> AY-Courses</span>
            </h1>
          </div>
          <div className="w-full grid grid-cols-3 gap-5 ">{children}</div>
        </div>
      );
}

export default BestStudents

export const StudentCard=({student}:{student:student})=>{
    return <div className=' pb-10'>
        <Image src={student.image} alt='' className='lg:w-full lg:h-[200px]' />
        <div className='lg:w-full lg:px-[8px] flex justify-between items-center'>
            <div className='flex justify-start items-center'>
             <Image src={logo} alt=''  className='w-[50px] h-[50px] rounded-full' />
             <p className='text-gray-600'>{student.name}</p>

            </div>
            <h2 className='font-bold text-green-600 lg:text-xl'>{student.points}</h2>

              
        </div>
        <div className='flex flex-col justify-start items-center gap-y-2 lg:px-[8px]'>
            <h1 className='lg:text-xl font-bold'>{student.job}</h1>
            <p className='text-gray-600 '>{student.bio}</p>
        </div>
        <div className="absolute lg:px-[8px] flex justify-between items-center pt-3">
              <DateJoin dateJ={student.date} >
                 <FaCalendarAlt className='lg:text-lg text-green-600' />
              </DateJoin>
        </div>
    </div>
}

const DateJoin=({children,dateJ}:{children:ReactNode,dateJ:Date})=>{
    return <div className='flex justify-start items-center lg:gap-x-[2px]'>
         {children}
         

    </div>
}