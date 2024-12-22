import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4'>
        <motion.div 
          className='lg:col-span-2 my-4'
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7 }}
        >
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold pl-4'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p className='pl-4'>Sign up to our newsletter and stay up to date.</p>
        </motion.div>

        <motion.div 
          className='my-4'
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <motion.input
              className='p-3 flex w-full rounded-md text-black mr-2'
              type='email'
              placeholder='Enter Email'
              aria-label='Email'
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer hover:bg-green-600'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Notify Me
            </motion.button>
          </div>

          <p className='text-center'>
            We care about the protection of your data. Please read our{' '}
            <span className='text-green-500 cursor-pointer hover:underline'>
              Privacy Policy
            </span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
