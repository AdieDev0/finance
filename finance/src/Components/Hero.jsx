import React from 'react'
import { ReactTyped } from "react-typed"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div 
      className='text-white' 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        
        <motion.p 
          className='text-green-500 font-bold p-2'
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 1 }}
        >
          GROWING WITH DATA ANALYTICS
        </motion.p>

        <motion.h1 
          className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.3, duration: 1 }}
        >
          Grow with data.
        </motion.h1>
        
        <div className='flex justify-center items-center'>
          <motion.p 
            className='md:text-4xl sm:text-4xl text-xl font-bold py-4'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            Fast, flexible financing for
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 1 }}
          >
            <ReactTyped 
              className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' 
              strings={['BTB', 'BTC', 'SASS']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </motion.div>
        </div>

        <motion.p 
          className='md:text-2xl text-xl font-bold text-gray-500'
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8, duration: 1 }}
        >
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS platform.
        </motion.p>

        <motion.button 
          className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer hover:bg-green-600'
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ delay: 1, duration: 0.5 }}
        >
          Get Started
        </motion.button>

      </div>
    </motion.div>
  )
}

export default Hero
