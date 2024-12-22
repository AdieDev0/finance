import React from 'react'
import { motion } from 'framer-motion'
import laptop from '../assets/laptop.png'

const Analytics = () => {
  return (
    <motion.div 
      className='w-full bg-white py-16 px-4' 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 size'>
        <motion.img 
          className='w-[500px] mx-auto my-4 size-full' 
          src={laptop} 
          alt="/" 
          initial={{ x: -200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        />
        <div className='flex flex-col justify-center'>
          <motion.p 
            className='text-green-500 font-bold pt-6'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            DATA ANALYTICS DASHBOARD
          </motion.p>
          
          <motion.h1 
            className='md:text-4xl sm:text-3xl text-2xl font-bold py-2' 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.7, duration: 1 }}
          >
            Manage Data Analytics Centrally
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus atque est odio maxime. Maiores facere excepturi provident quae in, cum pariatur? Non amet, 
            alias cumque distinctio fugiat rerum reiciendis dolorem!
          </motion.p>

          <motion.button 
            className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-green-500 cursor-pointer hover:bg-gray-900'
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default Analytics
