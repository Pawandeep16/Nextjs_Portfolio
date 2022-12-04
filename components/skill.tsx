import { motion} from 'framer-motion'
import React, { ReactElement } from 'react'

interface Props {
    directionleft?:boolean;
}

function skill({directionleft}: Props): ReactElement {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img initial={{x:directionleft? -200 : 200,
            opacity:0}}
            transition={{duration:1}}
            whileInView={{opacity:1,x:0}}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png'/>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full '>
                    <p className='text-3xl font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </div>
    )
}

export default skill
