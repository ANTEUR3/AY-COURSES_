"use client"

import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/Logo.png'
import ProjectsIdeas from './ProjectsComponents/ProjectsIdeas'
import {getProjectsIdeas} from '../getData'
import {ProjectIdea} from '../types'
import { useNavContext } from '../Context/NavItemsContext'

type Props = {}

const page = (props: Props) => {
    const [ideas,setIdeas]=useState<[]| ProjectIdea[]>([]);
    const context=useNavContext();

    useEffect(()=>{
        context.setItem(3)
        getProjectsIdeas().then((ideas)=>{
             setIdeas(ideas)
        })
    },[])
  return (
    <div className='lg:pt-[80px] pt-[45px] px-[20px] lg:px-[90px]'>
        <div className=' w-full flex justify-center items-center lg:gap-x-3 pb-3 lg:pb-3'>
                    <Image src={logo} alt='' className='w-[48px]  h-[48px] lg:w-[70px] lg:h-[70px]' />
                    <h1 className='text-md lg:text-3xl font-medium lg:font-bold text-gray-800'>Projects ideas for application in <span className='text-green-600'>AY-COURSES</span></h1>
        </div>  
        <div className=' w-full  hidden  md:flex justify-center items-center lg:text-lg lg:font-semibold text-center font-medium'>
            Get great projects ideas to implement  enhance your knowledge of software development       
         </div>
         <ProjectsIdeas  ideas={ideas} />
    </div>
  )
}

export default page