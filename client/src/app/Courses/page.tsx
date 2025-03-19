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
    
    <div className='lg:pt-[80px] lg:px-[90px]'>
        <div className=' w-full flex justify-start items-center lg:gap-x-3 lg:pb-4'>
            <Image src={logo} alt='' className='lg:w-[70px] lg:h-[70px]' />
            <h1 className='text-3xl font-bold text-gray-800'>Available courses in <span className='text-green-600'>AY-COURSES</span></h1>
        </div>  
        <CourseCategoryContext.Provider value={{item,setItem}}>
       <SearchBar/>
    

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

const SearchBar=()=>{
    
    return <div 
            className='lg:px-[20px] lg:py-[30px] lg:h-[200px] lg:rounded-lg bg-gray-100 flex justify-between items-start relative'>
            <SearchBarRightPart />
            <SearchBarLeftPart /> 
          </div>
}

const SearchBarRightPart=()=>{
    const context=useCategoryContext()
    return <div className='lg:w-[45%] '>
        <h1 className='lg:font-semibold lg:text-xl lg:mb-[20px]'>What do you want to learn today ?</h1>
         <div className='lg:w-full relative bg-white lg:py-1 rounded-lg flex justify-start items-center lg:px-[10px] border border-gray-300'>
            <input placeholder='Searsh for an courses category ' onChange={(e)=>{context.setItem(e.target.value)}}  type="text" name="" id=""  className='w-[90%] lg:py-1 lg:px-2 border-transparent '/>
             <div className='absolute right-1 px-2 py-2 top-[50%] -translate-y-[50%] bg-green-600  rounded-lg '>
             <FaSearch className='lg:text-xl text-white ' />
             </div>
         </div>
         <div className='lg:w-full flex justify-start items-center gap-x-4 lg:mt-[20px]'>
            <p className='font-semibold'>Suggetions </p>
            <p className='text-green-600 font-semibold'>AY-COURSES</p>
            <p className='text-green-600 font-semibold'>AY-COURSES</p>
         </div>
    </div>
}

const SearchBarLeftPart=()=>{
    return <Image src={svg} alt='' className='lg:w-[250px] lg:h-[250px] lg:absolute  lg:right-[100px] lg:top-[50%] lg:-translate-y-[50%]'/>
        
    
}

const FilterBar=({children}:{children:ReactNode})=>{
    return <div className='lg:mt-[30px]'>
        <h1 className='font-semibold lg:text-xl lg:mb-[20px]'>Recomended Courses</h1>
        <div className='w-full flex justify-start items-center gap-x-4'>
             {children}
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
    
    
    
     return <div className={`lg:px-[8px]  lg:py-[2px]   lg:text-md  cursor-pointer ${checkCategory() ? 'text-white bg-green-600':'text-green-600 bg-white border-green-600  border'}`} onClick={()=>{context.setItem(category)}}>
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
                    return <div className="col-span-1 lg:rounded-lg mb-10   " key={course.id} >
                          <img src={course.image} alt='' className='lg:w-full lg:h-[150px] lg:rounded-tl-lg lg:rounded-tr-lg lg:mb-[7px]' />
                          <div className='w-full lg:px-[10px] lg:py-[5px] '>
                          <h1 className='font-semibold text-gray-500 lg:text-md lg:mb-2'>{course.title}</h1>
                          <div className="lg:w-full flex justify-between items-center lg:mb-5">
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
                          <Link href={`Courses/${course.id}?cat=${context.item}`} className=' lg:py-[1px] bg-white border border-green-600 lg:rounded-sm flex justify-center items-center  lg:w-[70%] mx-auto lg:px-[10px]'>
                             <Image src={logo} alt='' className='lg:w-[30px] lg:h-[30px]' />
                             <p className='lg:text-lg font-semibold text-green-600'>Brows </p>
                          </Link>
                          </div>
                    </div>
                }) 
            }else{
                return <NoData />
            }
            
        }
        
    },[filtredCourses])
    return <div className='lg:w-full lg:grid lg:grid-cols-4 lg:gap-[30px] lg:pt-[30px] '>
               {displayCourses}
    </div>
}