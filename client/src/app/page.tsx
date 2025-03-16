"use client"

import Image from "next/image";
import NavBar from "./components/navBar";
import TopHomePart from "./components/topHomePart";
import Roadmap from "./components/Roadmap";
import {Learn  , Exams ,Apply,Competition } from "./components/Roadmap";
import Features  from "./components/Features";
import { useMemo } from "react";
import { features, PopularCourses_ } from "./Data";
import { FeaturesCard } from "./components/Features";
import PopularCourses from './components/PopularCourses';
import { PopularCoursesCard } from "./components/PopularCourses";
import { StudentCard } from "./components/BestStudents";
import BestStudents from "./components/BestStudents";
import { student } from "./components/BestStudents";
import {BestStudents_} from './Data'
import { useEffect } from "react";
import { getCourses } from "./getData";

export default function Home() {

 

  const displayCards=useMemo(()=>{
    return features.map((feature,key)=>{
          return <FeaturesCard feature={feature} key={feature.id}/>
    })
  },[features])

  const displayPopularCourses=useMemo(()=>{
    return PopularCourses_.map((course,key)=>{
          return <PopularCoursesCard course={course} key={course.id}/>
    })
  },[PopularCourses_])

  const displayBestStudents=useMemo(()=>{
    return BestStudents_.map((student,key)=>{
          return <StudentCard student={student} key={student.id}/>
    })
  },[BestStudents_])

 
  useEffect(()=>{
   const data=getCourses()
   console.log(data)
   
  },[])

  return (
    <div className=" ">
        <TopHomePart />
        

        <Roadmap>
           <Learn />
           <Exams />
           <Apply />
           <Competition />
        </Roadmap>

        <Features>
          {displayCards}
        </Features>

        <PopularCourses >
            {displayPopularCourses}
        </PopularCourses>
        
        <BestStudents >
          {displayBestStudents}
        </BestStudents>
        
    </div>
  );
}
