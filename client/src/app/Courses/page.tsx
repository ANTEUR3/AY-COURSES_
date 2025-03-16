"use client"
import React ,{useEffect,useState} from 'react'
import { getCourses } from '../getData'
import Image from 'next/image'
import logo from '../../../public/Logo.png'
type Props = {}

const page = (props: Props) => {

    const [courses,setCourses]=useState();

    useEffect(()=>{
        getCourses().then((courses)=>{
            setCourses(courses)
        })
    },[])
    useEffect(()=>{
        if(courses){
            console.log(courses)
        }
    },[courses])

  return (
    <div className='lg:pt-[100px] '>
        <div className='w-full flex justify-center items-center lg:gap-x-3 lg:pb-4'>
            <Image src={logo} alt='' className='lg:w-[80px] lg:h-[80px]' />
            <h1 className='text-4xl font-bold text-gray-800'>Available courses in <span className='text-green-600'>AY-COURSES</span></h1>
        </div>

    </div>
  )
}

export default page