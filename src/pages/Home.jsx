import React from 'react'
import Nav from '../components/Nav'
import cetagories from '../Cetagory'
import food_items from '../ItemSet'
function Home() {
  return (
    <div className='bg-slate-300 w-full min-h-[100vh]'>
        <Nav/>
        <div className='flex flex-wrap justify-center items-center gap-[1.25rem] m-[1rem]'>
          {cetagories.map((item,i)=>{
           return( 
            <div key={i} className='bg-white p-[0.8rem] rounded-md shadow-md flex justify-center items-center flex-col gap-1 hover:bg-green-200 hover:shadow-xl cursor-pointer transition-all duration-200'>
              <div>
              {item.image}
              </div>
              <div className='font-bold'>
              {item.name}
              </div>
            </div>
          )})}
        </div>
        <div>
            {
              food_items.map((item,i)=>{
                return (
                  <div>
                    <div className='w-[7rem] h-[9.5rem]'>
                      <img src={item.food_image} alt="" />
                    </div>
                    <div>
                      {item.food_name}
                    </div>
                  </div>
                )
              })
            }
        </div>
    </div>
    
  )
}

export default Home;