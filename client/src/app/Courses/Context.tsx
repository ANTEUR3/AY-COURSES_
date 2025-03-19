
import React ,{Dispatch, ReactNode, useContext, useState} from 'react'
import { createContext } from 'react';

type Props = {
  children: ReactNode;
}
export interface CourseCategoryProps{
  item:string,
  setItem:React.Dispatch<React.SetStateAction<string>>;
  
}
export const CourseCategoryContext=createContext<CourseCategoryProps | null>(null);


 
export const useCategoryContext=()=>{
  const context=useContext(CourseCategoryContext);
  if(!context){
    throw new Error ('useItemContext must be used within a ItemContextProvider')
}
return context
}
 interface CourseOptionsContextType{
    option:string,
    setOption:React.Dispatch<React.SetStateAction<string>>;
     
}
export const CourseOptionsContext=createContext<CourseOptionsContextType | null>(null);

export const useCourseOptionsContext=()=>{
  const context =useContext(CourseOptionsContext);
  if(!context){
    throw new Error ('No options')
  }
  return context
}


