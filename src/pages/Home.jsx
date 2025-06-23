import React, { useState } from 'react'
import Nav from '../components/Nav'
import cetagories from '../Cetagory'
import food_items from '../ItemSet'
import { GiChickenOven } from "react-icons/gi";
import { GiThreeLeaves } from "react-icons/gi";

import { ToastContainer, toast } from 'react-toastify';



function Home() {
  let [cetagory,setCetagory]=useState("All");
  let filter_food_items=food_items.filter((item,i)=>{
    if(cetagory ==="All"){
      return true;
    }else{
      return cetagory.toLowerCase()===item.food_category;
    }
  })

  let show=()=>{
    toast.success('Select item added');
  }









  return (
    <div className='bg-slate-300 w-full min-h-[100vh]'>
        <Nav/>
        <div className='flex flex-wrap justify-center items-center gap-[0.75rem] m-[0.5rem] md:gap-[1.25rem] md:m-[1rem]'>
          {cetagories.map((item,i)=>{
           return( 
            <div key={i} className='bg-white p-[0.6rem] md:p-[0.8rem] rounded-md shadow-md flex justify-center items-center flex-col gap-[3px] md:gap-1 hover:bg-green-200 hover:shadow-xl cursor-pointer transition-all duration-200' 
            onClick={()=>{setCetagory(item.name)}}>
              <div>
              {item.image}
              </div>
              <div className='text-[0.75rem] md:text-[1rem] md:font-semibold'>
              {item.name}
              </div>
            </div>
          )})}
        </div>

          

        <div className='w-[95%] md:w-[70%] mx-auto mt-[3rem] pb-[3rem] flex flex-wrap gap-[0.8rem] md:gap-[1.25rem] justify-center'>
            {
              filter_food_items.map((item,i)=>{
                return (
                  <div className='bg-white p-[0.6rem] md:p-[0.8rem] rounded-xl shadow-md flex flex-col items-center justify-center gap-1 border border-white hover:shadow-lg hover:border-green-600 transition-all duration-200' key={i}>
                    <div className='w-[8.75rem] h-[8.75rem] flex rounded-xl overflow-hidden'>
                      <img src={item.food_image} alt="" />
                    </div>
                    <div className='text-[0.85rem] font-medium md:font-bold'>
                      {item.food_name}
                    </div>
                    <div className='w-full flex justify-between text-green-700 text-[0.75rem] md:text-[0.85rem] font-medium p-[0.4rem]'>
                        <p>Rs {item.price}/-</p>
                        <p className='flex gap-[0.15rem] items-center'>{item.food_type !==  'veg' ? <GiChickenOven />:<GiThreeLeaves />}{item.food_type}</p>
                    </div>
                    <button type='submit' className='bg-green-300 hover:bg-green-500 transition-all duration-200 text-[0.75rem] md:text-[0.85rem] font-medium p-1 rounded-md w-full' onClick={show}>Add to Dish</button>
                  </div>
                )
              })
            }
        </div>
        <ToastContainer />
    </div>
    
  )
}

export default Home;