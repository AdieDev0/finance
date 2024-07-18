import React from 'react'
import laptop from '../assets/laptop.png'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 size'>
        <img className='w-[500px] mx-auto my-4 size-full' src={laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-green-500 font-bold pt-6'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ducimus atque est odio maxime. Maiores facere excepturi provident quae in, cum pariatur? Non amet, 
                    alias cumque distinctio fugiat rerum reiciendis dolorem!</p>

                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-green-500 cursor-pointer hover:bg-gray-900' >Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics