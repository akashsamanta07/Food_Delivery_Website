import React from 'react'
import { GiChickenOven } from "react-icons/gi";
import { GiThreeLeaves } from "react-icons/gi";

import { ToastContainer, toast } from 'react-toastify';

function Card({prop}) {
    let {id,food_name,food_cetagory,food_type,food_quantity,food_image,price,itemlist,setItemlist}=prop;
    
    let show=()=>{
        let tem = itemlist;
        let object={
            id:id,
            food_name:food_name,
            food_quantity:food_quantity,
            food_image:food_image,
            food_price:price
        }
        let t=0;
        tem.forEach(obj => {
            if(obj.id===id){
                t=1;
            }
        });
        if(t===0){
            tem.push(object);
        }
        setItemlist(tem);
        toast.success('Select item added');
    }

  return (
    <div className='bg-white p-[0.6rem] md:p-[0.8rem] rounded-xl shadow-md flex flex-col items-center justify-center gap-1 border border-white hover:shadow-lg hover:border-green-600 transition-all duration-200'>
        <div className='w-[8.75rem] h-[8.75rem] flex rounded-xl overflow-hidden'>
            <img src={food_image} alt="" />
        </div>
        <div className='text-[0.85rem] font-medium md:font-bold'>
            {food_name}
        </div>
        <div className='w-full flex justify-between text-green-700 text-[0.75rem] md:text-[0.85rem] font-medium p-[0.4rem]'>
            <p>Rs {price}/-</p>
            <p className='flex gap-[0.15rem] items-center'>{food_type !==  'veg' ? <GiChickenOven />:<GiThreeLeaves />}{food_type}</p>
        </div>
       
        <button type='submit' className='bg-green-300 hover:bg-green-500 transition-all duration-200 text-[0.75rem] md:text-[0.85rem] font-medium p-1 rounded-md w-full' onClick={show}>Add to Dish</button>
        <ToastContainer />
    </div>
  )
}

export default Card;