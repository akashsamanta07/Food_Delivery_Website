import React from 'react'
import { ImCross } from "react-icons/im";


function Order({prop}){
  let {order,setOrder} = prop;
  console.log(order)
  return (
    <div className={`w-[80vw] md:w-[40vw] h-[100vh] bg-white absolute top-[0] ${order === 1 ? "right-[0]" : "right-[-80vw] md:right-[-40vw]"} transition-all duration-200`}>
      <div className='p-[2rem] flex justify-between items-center text-green-500'>
          <p className='text-[1.2rem]'>Order Items</p>
          <ImCross onClick={()=>{setOrder(0)}}/>
      </div>
    </div>
  )
}

export default Order;