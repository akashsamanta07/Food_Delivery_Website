import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";




function Nav() {
  return (
    <div>
        <div className='w-full h-[6.25rem] flex justify-between items-center px-6 '>
            <div className='w-[3.75rem] h-[3.75rem] bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer' >
                <IoFastFood className='w-[1.8rem] h-[1.8rem] text-green-600'/>
            </div>
            <form action="" className='w-[60%] h-[3.75rem] bg-white flex items-center px-[20px] gap-5 rounded-md shadow-md'>
                <div>
                    <FaSearch className='text-green-600 w-[1.25rem] h-[1.25rem cursor-pointer'/>
                </div>
                <div className='w-[100%]'>
                    <label htmlFor="search"></label>
                    <input type="text" id="search" placeholder='Search Items...' className='w-[100%] outline-none text-[1.25rem]'/>
                </div>
            </form>
            <div className='w-[3.75rem] h-[3.75rem] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer'>
                <span className='absolute top-0 right-[0.3rem] text-green-600 font-bold'>0</span>
                <LuShoppingBag className='w-[30px] h-[30px] text-green-600'/>
            </div>
        </div>
    </div>
  )
}

export default Nav;