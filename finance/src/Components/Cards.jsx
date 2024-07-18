import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send Up To 2 GB</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer hover:bg-green-600'>Start Trial</button>
            </div>

            <div className='bg-gray-100 w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Couple User</h2>
                <p className='text-center text-4xl font-bold'>$279</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2 TB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send Up To 2 GB</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-green-500 cursor-pointer hover:bg-gray-900'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center text-4xl font-bold'>$419</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>6 TB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send Up To 2 GB</p>
                </div>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black cursor-pointer hover:bg-green-600'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
