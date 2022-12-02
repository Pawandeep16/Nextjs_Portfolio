import React from 'react'
import {motion} from "framer-motion"
type Props = {}

export default function backgroundCircle({}: Props) {
  return (
    <motion.div initial = {{
        opacity:0,
    }}
    animate={{
        scale:[1,3,5,3,1,1],
        opacity:[0.1,0.3,0.2,0.1,1],
        borderRadius:["20%","20%","50%","80%","100%"]
    }}
    transition={{
        duration:5
    }} 
    className='realtive flex justify-center items-center mt-20 '> 
    <div className='absolute border border-white-900 rounded-full h-[200px] w-[200px] mt-52 animate-ping '/>
    <div className='absolute border border-white-900 rounded-full h-[300px] w-[300px] mt-52 '/>
    <div className='absolute border border-white-900 rounded-full h-[500px] w-[500px] mt-52 '/>
    <div className='absolute border border-red-900 rounded-full opacity-20 h-[600px] w-[600px] mt-52 animate-pulse '/>
    <div className='absolute border border-white-900 rounded-full h-[800px] w-[800px] mt-52 '/>
    </motion.div>
    
  )
}