import React from 'react'
import { motion } from 'framer-motion'
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialSkype } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'> 
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7 }}
        >
            <h1 className='w-full text-3xl font-bold text-green-500'>Hello, I'm Adrian</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quae sunt, tempora deleniti aut, 
                inventore, nihil quidem eius odit dicta dolor magni! Ipsum molestiae necessitatibus autem fuga, quisquam quia animi.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }}
                >
                  <TiSocialInstagram size={30} className='hover:scale-110 duration-300' />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }}
                >
                  <SlSocialSkype size={30} className='hover:scale-110 duration-300' />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }}
                >
                  <TiSocialLinkedin size={30} className='hover:scale-110 duration-300' />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }}
                >
                  <SiGithub size={30} className='hover:scale-110 duration-300' />
                </motion.div>
            </div>
        </motion.div>

        <motion.div 
          className='lg:col-span-2 flex justify-between' 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
        >
            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insight</li>
                </ul>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </motion.div>

            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.2 }}>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insight</li>
                </ul>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Footer
