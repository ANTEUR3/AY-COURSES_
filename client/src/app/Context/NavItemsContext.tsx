"use client"
import React, { ReactNode ,useState,useContext} from 'react'
import { createContext } from 'react';

type Props = {
    children:ReactNode
}

export interface NavItemContextType{
    item:number,
    setItem:React.Dispatch<React.SetStateAction<number>>;
}

export const  NavItemContext =createContext<NavItemContextType | null>(null);
const NavContext = ({children}: Props) => {

    const [item,setItem]=useState<number >(0);
  return (
    <NavItemContext.Provider value={{item,setItem}}>
        {children}
        </NavItemContext.Provider>
  )
}

export default NavContext


export const useNavContext=()=>{
    const context=useContext(NavItemContext);
    if(!context){
        throw new Error ('value musnt be null')
    }
    return context
}