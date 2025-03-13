import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "../../../public/Logo.png";
import { BiSolidLike } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

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
    return  <div className="relative lg:px-[10px] lg:py-[10px] border-2 border-gray-600 rounded-xl flex items-center flex-col lg:pb-[30px]">
    <Image src={course.image} alt="" className="lg:mb-3 rounded-xl lg:h-[200px] lg:w-[80%]"/>
    <p className="text-gray-900 lg:text-md lg:mb-3 ">{course.description}</p>
    <div className="w-full flex justify-between items-center absolute bottom-3 lg:px-[10px]">
      <FaUserCircle className="text-blue-700 text-2xl" />
      <div className="flex justify-end items-center gap-x-3 ">
        <Rating numberT={course.likes}>
          <BiSolidLike className="text-xl text-gray-600"/>
        </Rating>

        <Rating numberT={course.views}>
          <BiSolidLike className="text-xl text-gray-600"/>
        </Rating>
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
