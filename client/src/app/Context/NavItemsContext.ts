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

 const  NavItemContext =createContext<NavItemContextType | null>(null);


export const useNavContext=()=>{
    const context=useContext(NavItemContext);
    if(!context){
        throw new Error ('value musnt be null')
    }
    return context
}

export default NavItemContext;