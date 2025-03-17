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

const ItemContext = ({children}: Props) => {
  const [item,setItem]=useState<string >('Home');
  return (
    <CourseCategoryContext.Provider value={{item,setItem}}>
      {children}
    </CourseCategoryContext.Provider>
  )
}

export default ItemContext

export const useItemContext=()=>{
  const context=useContext(CourseCategoryContext);
  if(!context){
    throw new Error ('useItemContext must be used within a ItemContextProvider')
}
return context
}