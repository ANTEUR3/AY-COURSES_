"use client"
import React, { ReactNode,useState } from 'react'
import NavItemContext from '../Context/NavItemsContext';

type Props = {}

const WrapComponent = ({children}: {children:ReactNode}) => {
    const [item,setItem]=useState<number>(0);
  return (
    <NavItemContext.Provider value={{item,setItem}}>
        {children}
    </NavItemContext.Provider>
  )
}

export default WrapComponent