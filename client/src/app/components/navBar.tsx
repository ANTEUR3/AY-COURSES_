import Image from 'next/image';
import logo from '../../../public/Logo.png'
import { IoMdSearch } from "react-icons/io";
import Link from 'next/link';

export  const   NavBar=()=>{
 

    return <div className="w-full lg:px-[90px] flex justify-between  items-center fixed bg-white">

           <div className="flex justify-start items-center lg:gap-x-[30px]">
            <div className='flex justify-start items-center gap-x-[-10px]'>
            <Image src={logo} alt="" className=" lg:w-[68px]  lg:h-[68px]" />
            <p className='font-bold text-lg text-green-400'>AY-courses</p>


            </div>
              <div className="flex justify-start items-center lg:gap-x-[30px] font-semibold lg:text-lg ">
                 <Link href={"/"} className='cursor-pointer'>Home</Link>
                 <Link href={"/"} className='cursor-pointer'>About</Link>
                 <Link href={"/"} className='cursor-pointer'>Courses</Link>
              </div>

           </div>
           <div className="flex justify-end items-center lg:gap-x-[15px]">
              <IoMdSearch className='lg:w-[30px] lg:h-[30px] cursor-pointer' />
              <button className="px-3 py-2 rounded-full bg-orange-600 font-bold text-white cursor-pointer hover:bg-orange-500">Login</button>

           </div>
    </div>

}

export default NavBar;