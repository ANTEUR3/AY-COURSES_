"use client"

import React, { ReactNode } from "react";
import learn from "../../../public/Learn.jpg"
import exam from "../../../public/Exam.png"
import logo from '../../../public/Logo.png'
import apply from '../../../public/apply.jpg'
import competition from '../../../public/boyCompetition.jpg'

import Image from "next/image";
type props={
    children:ReactNode
}

const Roadmap=({children}:props)=>{
return <div className="lg:pb-5">
            <div className="w-full flex justify-center items-center gap-x-3 pb-4  "> 
                <Image src={logo} alt="" className="w-[80px] border-2 " />
                <h1 className="text-4xl font-bold text-gray-800  ">Your roadmap in <span className="text-green-600"> AY-SCHOOL</span></h1>
                </div>

    
     <div className="w-full grid grid-cols-2 lg:gap-4 lg:px-[20%]">
        {children}
     </div>

</div>



}

export default Roadmap;

export const Learn=()=>{
    return <div className="col-span-1 relative lg:py-1 gap-y-2 pl-3 lg:rounded-lg border-2 border-gray-500 shadow-lg lg:pb-4">
              <h1 className="lg:text-xl font-bold mx-auto">Learn </h1>
              <p className="lg:font-semibold text-md text-gray-500 lg:w-[72%]">Many courses are offer in our platform to enhance your knowledge in the computer sciences modules</p>
              <Image src={learn} alt="" className="absolute w-[100px] bottom-2 right-2 rounded-lg" />
    </div>
}

export const Exams=()=>{
    return <div className="col-span-1 relative lg:py-1 gap-y-2 pl-3 lg:rounded-lg border-2 border-gray-500 shadow-lg lg:pb-4">
    <h1 className="lg:text-xl font-bold mx-auto">Exams </h1>
    <p className="lg:font-semibold text-md text-gray-500 lg:w-[70%] z-3"> Take exercices , Exams in various CS modules and help consolidate you knewledge</p>
    <Image src={exam} alt="" className="absolute w-[120px] h-[105px] bottom-2 right-2 rounded-lg " />
</div>
}

export const Apply=()=>{
    return <div className="col-span-1 relative lg:py-1 gap-y-2 pl-3 lg:rounded-lg border-2 border-gray-500 shadow-lg lg:pb-4">
    <h1 className="lg:text-xl font-bold mx-auto">Application </h1>
    <p className="lg:font-semibold text-md text-gray-500 lg:w-[65%] z-3">Apply what you have learned in our Platform .  websites and mobile application developing , IA agents ,data analyse ..</p>
    <Image src={apply} alt="" className="absolute w-[120px] h-[110px] bottom-4 right-2 rounded-lg " />
</div>
}

export const Competition=()=>{
    return <div className="col-span-1 relative lg:py-1 gap-y-2 pl-3 lg:rounded-lg border-2 border-gray-500 shadow-lg lg:pb-4">
    <h1 className="lg:text-xl font-bold mx-auto">Competition </h1>
    <p className="lg:font-semibold text-md text-gray-500 lg:w-[65%] z-3">Compete with others by participating in contests with defferent platform members  </p>
    <Image src={competition} alt="" className="absolute w-[120px] h-[110px] bottom-4 right-2 rounded-lg " />
</div>
}