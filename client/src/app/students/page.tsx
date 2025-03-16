"use client"
import React,{useEffect,useState} from 'react'
import { getCourses } from '../getData'
type Props = {}

const page = (props: Props) => {
    const [couses, setCourses] = useState([]);

    useEffect(()=>{
        const std=getCourses().then((courses)=>{
            setCourses(courses);
        });  
    })

    
  return (
    <div className='pt-[200px]'>page</div>
  )
}

export default page