import React, { ReactElement } from 'react'
import {motion} from "framer-motion"
interface Props {
    
}

function experineceCard({}: Props): ReactElement {
    return (
<article className='flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img 
    initial={{opacity:0}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWD3vcZ-6k9jsPsOxJTv_Ro4ZD1L4kaeD01sL8BF3scR52kenoWojuI_7__eldS1FfHDE&usqp=CAU" alt="" />
    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Thandi</h4>
        <p className='font-blod text-2xl mt-1'>yeah boi</p>
        <div className='flex space-x-2 my-2'>
            <img className='h-10 w-10 rounded-full' src="https://media.istockphoto.com/id/470248962/photo/tea-plantations-sunset.jpg?s=612x612&w=0&k=20&c=xo98EQ7-n4_nKqvzy4204GErBr4W_iRplcTqzyhj_K0=" alt="" />
            <img className='h-10 w-10 rounded-full' src="https://media.istockphoto.com/id/470248962/photo/tea-plantations-sunset.jpg?s=612x612&w=0&k=20&c=xo98EQ7-n4_nKqvzy4204GErBr4W_iRplcTqzyhj_K0=" alt="" />
            <img className='h-10 w-10 rounded-full' src="https://media.istockphoto.com/id/470248962/photo/tea-plantations-sunset.jpg?s=612x612&w=0&k=20&c=xo98EQ7-n4_nKqvzy4204GErBr4W_iRplcTqzyhj_K0=" alt="" />
            <img className='h-10 w-10 rounded-full' src="https://media.istockphoto.com/id/470248962/photo/tea-plantations-sunset.jpg?s=612x612&w=0&k=20&c=xo98EQ7-n4_nKqvzy4204GErBr4W_iRplcTqzyhj_K0=" alt="" />
         {/*  */}
         {/*  */}
         {/*  */}
    </div>
    <p className='uppercase py-5 text-gray-500'>dates</p>
    <ul className='list-disc space-y ml-5 text-lg'>
        <li>pps</li>
        <li>pps</li>
        <li>pps</li>
        <li>pps</li>
        <li>pps</li>
    </ul>
    </div>
</article>
    )
}

export default experineceCard
