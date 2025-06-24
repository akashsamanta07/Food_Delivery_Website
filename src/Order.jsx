import React,{useContext, useEffect, useState} from 'react'
import { ImCross } from "react-icons/im";
import { data } from './context/UserContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from 'react-toastify';



function Order({prop}){
  let {order,setOrder} = prop;
  let item=useContext(data);
  let {itemlist,setItemlist}=item;

  let [total,setTotal]=useState(0);

  
  useEffect(()=>{
    let t=0;
    itemlist.forEach((value)=>{
      t=t+value.food_quantity*value.food_price;
    });
    setTotal(t);
  },[itemlist])

  const fndelete=(id)=>{
    let tem=[...itemlist];
    tem=tem.filter((value)=>{
      return value.id !==id;
    });
    setItemlist([...tem]);
    toast.warning("Remove Item");
  };
   const fncalculate=()=>{
    let t=0;
    itemlist.forEach((value)=>{
      t=t+value.food_quantity*value.food_price;
    });
    setTotal(t);
      
   }
  const fnremove=(id)=>{
    let tem=[...itemlist];
    tem.forEach((value)=>{
      if(value.id===id){
        value.food_quantity -= 1;
        toast.success("Remove Quantity");
        if(value.food_quantity===0){
          toast.warning("Remove Item");
            tem=tem.filter((value)=>{
              return value.id !==id;
            });
        }
      }
    })
    setItemlist([...tem]);
    fncalculate();
  }
  const fnadd=(id)=>{
    let tem=[...itemlist];
    tem.forEach((value)=>{
      if(value.id===id){
        value.food_quantity += 1;
        }
    });
    setItemlist([...tem]);
    toast.success("Add Quantity");
    fncalculate();
  }
  const finish=()=>{
    if(itemlist.length >0){
      toast.success("Placed order Successfully");
    }else{
      toast.warning("No Item Selected");
    }
    setItemlist([]);
    setOrder(0);
  }

  return (
    <div className={`w-[90vw]  md:w-[50vw] text-center p-[1rem] md:p-[3rem]  bg-white absolute top-[10px]  ${order === 1 ? "right-[10px]" : "right-[-90vw] md:right-[-50vw]"} transition-all duration-200 rounded-lg shadow-black border-2 border-stone-200`}>
      <div className='pb-[2rem] flex justify-between items-center text-green-500'>
          <p className='text-[1.2rem]'>Order Items</p>
          <ImCross onClick={()=>{setOrder(0)}}/>
      </div>
      <div>
          <hr className='border-2 rounded-lg'/>
      </div>
      <div>{
        itemlist.map((value,i)=>{
          return (
            <div key={i} className='p-[0.6rem] md:p-[0.8rem] my-[1rem] shadow-xl flex justify-between items-center rounded-xl'>
              <div className='w-[5.5rem] h-[3.5rem] md:w-[6rem] md:h-[4rem] rounded-xl overflow-hidden'><img src={value.food_image} alt="" className='h-full w-full' /></div>
              <div className='flex flex-col items-center gap-[0.6rem]'>
                <p className='font-semibold'> {value.food_name}</p>
                <div className='flex justify-center items-center gap-2 border-[3px] border-green-600 rounded-xl font-semibold text-green-600'>
                  <button type='submit' className='p-[0.4rem] pl-[0.6rem] ' onClick={()=>{fnremove(value.id)}}>-</button>
                  <p className='p-[0.4rem] px-[0.7rem] bg-slate-300 '>{value.food_quantity}</p>
                  <button type='submit' className='p-[0.4rem] pr-[0.6rem] ' onClick={()=>{fnadd(value.id)}}>+</button>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-[0.7rem]'>
                <p className='text-green-600'>Rs {value.food_price}/-</p>
                <div className='cursor-pointer' onClick={()=>{fndelete(value.id)}}><RiDeleteBin6Line className='text-red-600'/></div>
              </div>
            </div>
          )
        })
      }
      </div>
      {
        itemlist.length > 0? 
        <div>
                <hr className='border-2 rounded-lg'/>
        </div>:
        <div></div>
      }
      <div className='p-[1.8rem]'>
        <div className='flex justify-between font-bold'>
            <p>Subtotal</p>
            <p className='text-green-600'>Rs {total}/-</p>
        </div>
        <div className='flex justify-between font-bold'>
            <p>Delivery Free</p>
            <p className='text-green-600'>Rs {itemlist.length > 0 ? "20":"0"}/-</p>
        </div>
        <div className='flex justify-between font-bold'>
            <p>Taxes</p>
            <p className='text-green-600'>Rs {itemlist.length > 0 ? "8.49":"0"}/-</p>
        </div>
      </div>
      <div>
            <hr className='border-2 rounded-lg'/>
      </div>
      <div className='flex justify-between font-bold text-[1.1rem] p-[1.8rem]'>
            <p>Totals</p>
            <p className='text-green-600'>Rs {itemlist.length > 0 ? Math.round(total+20+8.49):"0"}/-</p>
        </div>
        <div className=' font-bold text-[1.1rem] p-[1.8rem]'>
            <button type='submit' className={`w-full text-white ${itemlist.length >0 ?"bg-green-600 hover:bg-green-800 ": "bg-red-600 hover:bg-red-900"} shadow-xl p-[0.6rem] rounded-xl`} onClick={finish}>Place Order</button>
        </div>
    </div>
  )
}

export default Order;