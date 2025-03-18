"use client"
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