import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold pl-4'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p className='pl-4'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black mr-2'
              type='email'
              placeholder='Enter Email'
              aria-label='Email'
            />
            <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer hover:bg-green-600'>
              Notify Me
            </button>
          </div>
          <p className='text-center'>
            We care about the protection of your data. Please read our{' '}
            <span className='text-green-500 cursor-pointer hover:underline'>
              Privacy Policy
            </span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
