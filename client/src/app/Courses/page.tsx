"use client"
import React ,{ReactNode, useCallback, useContext, useEffect,useMemo,useState} from 'react'

import { getCourses } from '../getData'
import Image from 'next/image'
import logo from '../../../public/Logo.png'
import { FaSearch } from "react-icons/fa";
import svg from '../../../public/undraw_programming_65t2.svg'
import { courseType } from '../types'
import { Rating } from '../components/PopularCourses'
import { BiSolidLike } from "react-icons/bi";
import Link from 'next/link'
import  { CourseCategoryContext, useCategoryContext }from './Context'
import { useNavContext } from '../Context/NavItemsContext'
import NoData from './CoursesComponents/NoData'

type Props = {}

const page = (props: Props) => {

    const [courses,setCourses]=useState<courseType[]>();
    const [item,setItem]=useState<string>('all Courses');
    const context=useNavContext();

    useEffect(()=>{
        getCourses().then((courses)=>{
            setCourses(courses)
        })
        context.setItem(1);
       
    },[])
    useEffect(()=>{
        console.log(context.item)
    },[context])
   
   

  return (
    
    <div className='lg:pt-[80px] pt-[45px] px-[20px] lg:px-[90px]'>
        <div className=' w-full flex justify-center items-center lg:gap-x-3 pb-3 lg:pb-3'>
            <Image src={logo} alt='' className='w-[48px]  h-[48px] lg:w-[70px] lg:h-[70px]' />
            <h1 className='text-md lg:text-3xl font-medium lg:font-bold text-gray-800'>Available courses in <span className='text-green-600'>AY-COURSES</span></h1>
        </div>  
        <div className=' w-full  hidden  md:flex justify-center items-center lg:text-lg lg:font-semibold text-center font-medium'>
             Master software develepment with structured courses designed to makke you job-easy
        </div> 
        <CourseCategoryContext.Provider value={{item,setItem}}>
    
       <FilterBar >
        
                <CourseCategory  category={'all Courses'} />
                <CourseCategory  category={'backend courses'} />
                <CourseCategory  category={'frontend courses'} />
                <CourseCategory  category={'AI courses'} />
                <CourseCategory  category={'Flutter courses'} />
                
              
        </ FilterBar >

            <Courses courses={courses}/>
        </CourseCategoryContext.Provider>



        

    </div>
  )
}

export default page





const FilterBar=({children}:{children:ReactNode})=>{
    const context =useCategoryContext()

    useEffect(()=>{
        console.log(context.item)
    },[context.item])
    return <div className='mt-[20px] lg:mt-[30px] md:px-[20px] lg:px-0 '>
        <h1 className='font-semibold lg:text-2xl mb-[10px] lg:mb-[20px]'>Recomended Courses</h1>
        <div className='w-full hidden lg:flex justify-start items-center gap-x-4 '>
             {children}
        </div>
        <div className='w-full flex   lg:hidden justify-start items-center gap-x-4 '>
             <input className='px-[10px] py-[2px] border rounded-md' placeholder='search for courses' type="text" onChange={(e)=>{context.setItem(e.target.value)}} />
             <select  onChange={(e)=>{context.setItem(e.target.value)}} name="" id="" className='cursor-pointer border px-[20px] py-[2px]'>
                 <option   value="f" className='cursor-pointer '>all courses</option>
                 <option  value="Frontend" className='cursor-pointer '>Frontend</option>
                 <option  value="Backend" className='cursor-pointer '>Backend</option>
                 <option  value="AI" className='cursor-pointer '>AI</option>
                 <option  value="Full stack" className='cursor-pointer '>Full stack</option>
             </select>
        </div>
    </div>
    
}
const CourseCategory=({category}:{category:string})=>{
    const context=useCategoryContext();
  const checkCategory=useCallback(()=>{
       let cat=context.item.split(' ')[0].toLowerCase();
       if(cat ===''){
        cat='all'
       }
      if (category.toLocaleLowerCase().includes(cat) || cat.includes(category.toLocaleLowerCase()) ){
            return true
      }
      
  },[context.item])
    
    
    
     return <div className={`lg:px-[8px]  lg:py-[4px]   lg:text-md  cursor-pointer ${checkCategory() ? 'text-white bg-green-600':'text-green-600 bg-white border-green-600  border'}`} onClick={()=>{context.setItem(category)}}>
         <p>{category}</p>
    </div>

}

const Courses=({courses}:{courses:courseType[] | undefined})=>{
   
    const [filtredCourses,setFiltredCourses]=useState<courseType[]>();
    const context=useCategoryContext();
    useEffect(()=>{
        if(courses){
            setFiltredCourses(courses)
        }
    },[courses])
    useEffect(()=>{
      
    },[])
    useEffect(()=>{
        if(context.item ==="all Courses"){
            setFiltredCourses(courses);
        }
        else{
            const category=context.item.split(' ')[0].toLowerCase();
            const filtred=courses?.filter((course)=> course.title.toLowerCase().includes(category) || course.description.toLowerCase().includes(category))
            setFiltredCourses(filtred)
        }
        
    },[context.item])

    const displayCourses=useMemo(()=>{


        if( filtredCourses){
            if(filtredCourses.length>0){
                return filtredCourses.map((course:courseType,key):ReactNode=>{
                    return <div className="col-span-1 rounded-md lg:rounded-lg mb-4 lg:mb-10 w-[85%] lg:w-full mx-auto md:mx-0    " key={course.id} >
                        
                          <img src={course.image} alt='' className='w-full lg:w-full h-[150px] md:h-[200px] lg:h-[150px] rounded-md lg:rounded-none lg:rounded-tl-lg lg:rounded-tr-lg lg:mb-[7px]' />
                          <div className='w-full lg:px-[10px] lg:py-[5px] '>
                          <h1 className='font-semibold text-gray-500 lg:text-md lg:mb-2'>{course.title}</h1>
                          <div className="lg:w-full flex justify-between items-center mb-3 lg:mb-5">
                           <p className='lg:text-sm font-semibold text-gray-600'>{course.publisher.name}</p>
                               <div className='flex justify-end items-center gap-x-2'>
                                <Rating numberT={course.likes}>
                                    <BiSolidLike className='text-xl text-gray-600' />
                                    </Rating>
                                    <Rating numberT={course.views}>
                                    <BiSolidLike className='text-xl text-gray-600' />
                                    </Rating>
                               </div>
                          </div>
                          <Link href={`Courses/${course.id}?cat=${context.item}`} className='py-[0.5px] lg:py-[1px] bg-white border border-green-600 rounded-sm flex justify-center items-center w-[30%] lg:w-[70%] mx-auto px-[5px] lg:px-[10px]'>
                             <Image src={logo} alt='' className='w-[20px]  h-[20px] lg:w-[30px] lg:h-[30px]' />
                             <p className='text-md lg:text-lg font-medium lg:font-semibold text-green-600'>Brows </p>
                          </Link>
                          </div>
                    </div>
                }) 
            }else{
                return <NoData />
            }
            
        }
        
    },[filtredCourses])
    return <div className='lg:w-full lg:grid grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-[10px] lg:gap-[30px] md:px-[20px] lg:px-0 pt-[10px] lg:pt-[30px] '>
               {displayCourses}
    </div>
}