"use client"
import Image from 'next/image';
import logo from '../../../public/Logo.png'
import { IoMdSearch } from "react-icons/io";
import Link from 'next/link';
import { ReactNode, useContext } from 'react';
import  {  useNavContext } from '../Context/NavItemsContext';
import { LuMenu } from "react-icons/lu";

export  const   NavBar=({children}:{children:ReactNode})=>{
 
    return <div className="w-full lg:px-[90px] px-[10px] flex justify-between  items-center fixed bg-white z-10">

           <div className="flex justify-start items-center lg:gap-x-[30px]">
            <div className='flex justify-start items-center gap-x-[-10px]'>
            <Image src={logo} alt="" className=" lg:w-[68px]  lg:h-[68px] w-[48px]  h-[48px]" />
            <p className='font-bold text-lg text-green-600'>AY-courses</p>


            </div>
              <div className="hidden lg:flex justify-start items-center lg:gap-x-[30px] font-semibold lg:text-lg ">
                
                  {children}
                
              </div>

           </div>
           <div className="flex justify-end items-center gap-x-[10px] lg:gap-x-[15px]">
              <IoMdSearch className='w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] cursor-pointer' />
              <button className="lg:px-3 lg:py-2 px-2 py-1 rounded-full bg-green-600 text-sm lg:text-lg lg:font-bold text-white cursor-pointer hover:bg-orange-500">Login</button>
              <LuMenu className='lg:hidden text-lg cursor-pointer' />

           </div>
    </div>

}

export default NavBar;

export const NavItem=({href,name,index}:{href:string,name:string,index:number})=> {
   const context=useNavContext();

   return <Link onClick={()=>{context.setItem(index)}} href={href} className={`cursor-pointer ${index == context.item ?'text-green-600':'text-black'} `}>
      {name}
   </Link>

}