import React, { ReactElement } from 'react'
import {motion} from "framer-motion"

interface Props {
    
}

function about({}: Props): ReactElement {
    return (
        <div className='flex flex-col relative text-center items-center md:text-left h-screen  max-w-7xl px-10 justify-evenly mx-auto mobile  '>
            <h3 className='abosulate top-24 uppercase tracking-[20px] text-white text-2xl '>About</h3>
            <motion.img
            initial={{
                x:-200,
                opacity:0,
               
            }}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{
                duration:1.2
            }}
        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='pawan'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] mobile  '
        />
        <div className='space-y-10 px-0  md:px-10 '>
            <h4 className='text-4xl font-semibold text-center md:text-2xl '> 
                  Here is <span className='underline decoration-[#f7AB0A]'>little</span> background
            </h4>
            <p className='text-base'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

</p>
        </div>
        </div>
        
    )
}

export default about
