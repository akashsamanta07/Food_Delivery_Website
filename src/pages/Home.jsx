import React, { useState,useEffect } from 'react';
import Nav from '../components/Nav';
import cetagories from '../Cetagory';
import food_items from '../ItemSet';
import Card from '../Card';
import Order from '../Order';

import { MdMoodBad } from "react-icons/md";







function Home() {
  const [cetagory,setCetagory]=useState("All");
  // let [searchWord,setSearchWord]=useState("");
  const [searchWord,setSearchWord]=useState(()=>{
    const save=localStorage.getItem("prev_value");
    return save !== null ? JSON.parse(save):"";
  });
  useEffect(()=>{
    localStorage.setItem("prev_value",JSON.stringify(searchWord));
  },[searchWord]);

  const [order,setOrder]=useState(0)

  let navchange={
    searchWord,
    setSearchWord,
    setOrder,
  };
  let bucket={
    order,
    setOrder
  }
 

  let tem_food_items=food_items.filter((item,i)=>{
    if(cetagory ==="All"){
      return true;
    }else{
      return cetagory.toLowerCase()===item.food_category;
    }
  })
  let filter_food_items=tem_food_items.filter((item)=>{
    return item.food_name.toLowerCase().includes(searchWord.toLowerCase());
  })
  return (
    <div className='bg-slate-300 w-full min-h-[100vh]'>
        <Nav prop={navchange} />

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
              filter_food_items.length !==0 ?
                  filter_food_items.map((item,i)=>{
                    let itemset={
                      id:item.id,
                      food_name:item.food_name,
                      food_type:item.food_type,
                       food_quantity :item.food_quantity,
                        food_image:item.food_image,
                         price:item.price,
                  }
                    return (
                      <Card 
                        prop={itemset}
                      key={i}/>
                    )
                  })
              :
              <div className='text-green-600 flex flex-col items-center p-4 md:text-[2rem]'>
                  <MdMoodBad className='w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] text-green-600'/>
                  <p>no dish found</p>
              </div>
            }
        </div>

          <Order prop={bucket}/>
        
    </div>
    
  )
}

export default Home;