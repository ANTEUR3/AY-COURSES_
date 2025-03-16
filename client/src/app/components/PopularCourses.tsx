import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "../../../public/Logo.png";
import { BiSolidLike } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

export type course = {
  id: number;
  title: string;
  description: string;
  likes: number;
  views: number;
  publisher: string;
  image: StaticImageData;
};

const PopularCourses = ({ children }: Props) => {
  return (
    <div className="w-full px-[20%] lg:pb-5">
      <div className="w-full flex justify-center items-center gap-x-3 pb-4">
        <Image src={logo} alt="" className="w-[80px]  " />
        <h1 className="text-4xl font-bold text-gray-800  ">
          Popular courses in <span className="text-green-600"> AY-SCHOOL</span>
        </h1>
      </div>
      <div className="w-full grid grid-cols-3 gap-5 ">{children}</div>
    </div>
  );
};

export default PopularCourses;

export const PopularCoursesCard = ({ course }: { course: course }) => {
    return  <div className="relative lg:px-[10px] lg:py-[10px] border-2 border-gray-600 rounded-xl flex items-center flex-col lg:pb-[100px] lg:mb-5">
    <Image src={course.image} alt="" className="lg:mb-3 rounded-xl lg:h-[200px] lg:w-[80%]"/>
    <p className="text-gray-600 lg:text-md lg:mb-3  ">{course.description}</p>
    <div className=" w-full absolute bottom-2">
    <div className="flex flex-col justify-start items-center gap-x-3 pb-2 ">
       <FaUserCircle className="text-green-600 text-2xl" />
       <p className="font-semibold text-gray-800">{course.publisher}</p>
    </div>
    <div className="w-full flex justify-start items-center gap-x-3 px-5">
        <Rating numberT={course.likes}>
          <BiSolidLike className="text-xl text-gray-600"/>
        </Rating>

        <Rating numberT={course.views}>
          <IoEyeOutline className="text-xl text-gray-600"/>
        </Rating>
        <Link href={'/'} className="rounded-lg    bg-white text-green-600 font-semibold flex justify-start items-center gap-x-1 border text-sm pr-4 hover:translate-x-[8px] duration-100">
        <Image src={logo} alt="" className="w-[40px] h-[35px] " />

        View
    </Link>
    </div>
    
    </div>
   
       
      
  </div>
  
};

const Rating = (props: { children: ReactNode; numberT: number }) => {
  return (
    <div className=" flex justify-end items-center gap-x-1">
      {props.children}
      <p className="text-gray-600">{props.numberT}</p>
    </div>
  );
};
