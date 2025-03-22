"use client";
import React, { ReactNode, useEffect, useState, useMemo, use } from "react";
import { FaPhone } from "react-icons/fa";
import { getCourses } from "@/app/getData";
import { courseType } from "../../types";
import { CourseOptionsContext, useCourseOptionsContext } from "../Context";
import Link from "next/link";
import { Rating } from '../../components/PopularCourses'
import Image from "next/image";
import logo from '../../../../public/Logo.png'
import {BiSolidLike} from "react-icons/bi";

type Props = {};

const CourseDeatails = ({
  params,
  searchParams,
}: {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<{ cat: string }>;
}) => {
  const { courseId } = use(params);
  const { cat } = use(searchParams);
  const [course, setCourse] = useState<courseType | null>(null);
  const [similarCourses, setSimilarCourses] = useState<courseType[] | []>([]);

  useEffect(() => {
    getCourses().then((courses) => {
      const CN = courses.find((c: courseType) => c.id.toString() === courseId);
      setCourse(CN);
    });
  }, []);

  useEffect(() => {
    if (course) {
      getCourses().then((courses) => {
        const courseWSearchWord = course.searchWords;
       // console.log(courseWSearchWord)
        const d:courseType[]=[];
        courses.map((c: courseType, key: any) => {
          const courseWords=c.searchWords;
         // console.log(courseWords)
          courseWSearchWord.map((csw,key) => {
           // console.log('--',csw)
            courseWords.map((cw)=>{
               // console.log(cw)
                if(cw.toLocaleLowerCase() === csw.toLocaleLowerCase() && !d.find((course)=>course.id === c.id )){
                    d.push(c)
                   
                }
            })
            
          });
          
        });
        setSimilarCourses(d)
      });
    }

  }, [course]);

  useEffect(()=>{
    if(similarCourses){
        console.log(similarCourses)
    }
  },[similarCourses])
  
  const [option, setOption] = useState<string>("Description");

  return (
    <div className="lg:pt-[80px] lg:px-[100px]">
      {course ? (
        <div>
          <Path>
            <PathItem name="Course Details" color="green" />
            <PathItem name={cat} color="green" />
            {course ? <PathItem name={course?.title} color="gray" /> : ""}
          </Path>
          <img
            src={`${course.image}`}
            alt=""
            className="lg:h-[170px] lg:w-[60%] mt-5 rounded-lg"
          />
          <CourseOptionsContext value={{ option, setOption }}>
            <CourseOptions>
              <OptionItem name="Description" />
              <OptionItem name="Course content" />
              <OptionItem name="Teacher" />
              <OptionItem name="Similar courses" />
            </CourseOptions>
            <CourseDetailsBody>
              <CourseDescription course={course} />
              <CourseContent course={course} />
              <Teacher course={course} />
              <SimilarCourses similarCourses={similarCourses} cat={cat} />
            </CourseDetailsBody>
          </CourseOptionsContext>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CourseDeatails;

const Path = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-start items-center lg:gap-4 ">{children}</div>
  );
};

const PathItem = ({ name, color }: { name: string; color: string }) => {
  return (
    <h1 className={`font-semibold lg:text-lg text-${color}-600`}>{name}</h1>
  );
};

const CourseOptions = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:w-full flex justify-start items-center lg:gap-x-4 lg:font-semibold lg:text-lg text-gray-500 lg:mt-3">
      {children}
    </div>
  );
};
const OptionItem = ({ name }: { name: string }) => {
  const context = useCourseOptionsContext();
  return (
    <h2
      className={`${
        context.option === name ? "text-gray-950" : ""
      } cursor-pointer hover:text-gray-700`}
      onClick={() => {
        context.setOption(name);
      }}
    >
      {name}
    </h2>
  );
};

const CourseDetailsBody = ({ children }: { children: ReactNode }) => {
  return <div className="lg:w-full lg:pt-7">{children}</div>;
};

const CourseDescription = ({ course }: { course: courseType }) => {
  const context = useCourseOptionsContext();

  return (
    <div
      className={`lg:w-full lg:pl-[5px] lg:pb-4 ${
        context.option === "Description" ? "" : "hidden"
      }`}
    >
      <h1 className="text-xl font-semibold text-gray-950">
        Course Description
      </h1>
      <div className="lg:pt-[10px] lg:text-md text-gray-800">
        {course.description}
      </div>
    </div>
  );
};

const CourseContent = ({ course }: { course: courseType }) => {
  const context = useCourseOptionsContext();

  const dispalyChildren = useMemo(() => {
    return course.content.map((c: string, key) => {
      return <CourseContentItem content={c} key={key} />;
    });
  }, [course]);
  return (
    <div
      className={`lg:w-full lg:pl-[5px] ${
        context.option === "Course content" ? "" : "hidden"
      }`}
    >
      <h1 className="text-xl font-semibold text-gray-950 lg:mb-5">
        Course Content
      </h1>
      <div className="lg:w-full flex justify-tart items-center lg:gap-x-4">
        {dispalyChildren}
      </div>
    </div>
  );
};
const CourseContentItem = ({ content }: { content: string }) => {
  return (
    <div className="lg:px-[10px] lg:py-[5px] rounded-lg bg-gray-400 hover:bg-green-600 hover:text-white  cursor-pointer ">
      <h1>{content}</h1>
    </div>
  );
};

const Teacher = ({ course }: { course: courseType }) => {
  const TeacherLeftSide = () => {
    return (
      <div className="flex flex-col justify-between items-center lg:gap-y-[20px]  h-full ">
        <img
          className="lg:w-[90px] lg:h-[90px] rounded-full lg:m-2"
          src={course.publisher.image}
        />
        <Phone />
      </div>
    );
  };
  const TeacherRightSide = () => {
    return (
      <div className="lg:w-[50%] h-full flex flex-col justify-between items-start">
        <h1 className=" lg:text-lg font-bold text-gray-950">
          {course.publisher.name}
        </h1>
        <h1 className="">{course.publisher.description}</h1>
      </div>
    );
  };
  const Phone = () => {
    return (
      <div className="w-full flex justify-start items-center lg:gap-x-3">
        <FaPhone className="lg:text-md font-semibold" />
        <p className="lg:text-md font-semibold">{course.publisher.phone}</p>
      </div>
    );
  };
  const context = useCourseOptionsContext();

  return (
    <div
      className={`lg:w-full  ${context.option === "Teacher" ? "" : "hidden"} `}
    >
      <h1 className="text-xl font-semibold  lg:mb-8 text-red-800">
        Publisher informations
      </h1>
      <div className="lg:w-full flex justify-start items-start gap-x-[30px]   ">
        <TeacherLeftSide />
        <TeacherRightSide />
      </div>
    </div>
  );
};

const SimilarCourses = ({
  similarCourses,cat
}: {
  similarCourses: courseType[],cat:string;
}) => {
  const context = useCourseOptionsContext();
   console.log(similarCourses)
  const displaSimilarCourses=useMemo(()=>{
    return  similarCourses.map((course:courseType,key):ReactNode=>{
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
              <Link href={`${course.id}?cat=${cat}`} className=' lg:py-[1px] bg-white border border-green-600 lg:rounded-sm flex justify-center items-center  lg:w-[70%] mx-auto lg:px-[10px]'>
                 <Image src={logo} alt='' className='lg:w-[30px] lg:h-[30px]' />
                 <p className='lg:text-lg font-semibold text-green-600'>Brows </p>
              </Link>
              </div>
        </div>
    }) 
  },[similarCourses])

  return (
    <div
      className={`${context.option === "Similar courses" ? "" : "hidden"} `}
    >
        <h1 className="text-xl font-semibold  lg:mb-8 text-red-800">Similar courses</h1>
        <div className="lg:w-full  grid grid-cols-4 lg:gap-[18px]">
          {displaSimilarCourses}
      </div>
    </div>
  );
};
