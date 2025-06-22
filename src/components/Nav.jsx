import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";




function Nav() {
  return (
    <div>
        <div className='w-full h-[5rem] flex justify-between items-center px-[0.6rem] md:px-8 md:h-[6.25rem]'>
            <div className='w-[2.2rem] h-[2.2rem] md:w-[3.75rem] md:h-[3.75rem] bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer' >
                <IoFastFood className='w-[1.2rem] h-[1.2rem] md:w-[1.8rem] md:h-[1.8rem] text-green-600'/>
            </div>
            <form action="" className='w-[60%] h-[2.2rem] md:h-[3.75rem] bg-white flex flex-row-reverse items-center px-[20px] gap-3 rounded-md shadow-md'>
                <div>
                    <FaSearch className='text-green-600 md:w-[1.25rem] md:h-[1.25rem] cursor-pointer'/>
                </div>
                <div className='w-[100%]'>
                    <label htmlFor="search"></label>
                    <input type="text" id="search" placeholder='Search Items...' className='w-[100%] outline-none md:text-[1.25rem]'/>
                </div>
            </form>
            <div className='w-[2.2rem] h-[2.2rem] md:w-[3.75rem] md:h-[3.75rem] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer'>
                <span className='absolute top-0 right-[0.1rem] md:right-[0.3rem] text-[0.6rem] md:text-[1rem] text-green-600 font-medium md:font-bold'>0</span>
                <LuShoppingBag className='w-[1.2rem] h-[1.2rem] md:w-[1.8rem] md:h-[1.8rem] text-green-600'/>
            </div>
        </div>
    </div>
  )
}

export default Nav;