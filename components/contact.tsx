import React, { ReactElement } from 'react'
import {PhoneIcon,MapPinIcon, EnvelopIcon} from "@heroicons/react"
interface Props {
    
}

function contact({}: Props): ReactElement {
    return (
        <div className='realtive flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly h-screen relative mx-auto items-center'> 
           <h3 className='absolute top-24 tracking-[30px] text-gray-500 text-2xl'> Contact</h3>
           <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                    I have just got what you need.{" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk </span>
            </h4>
            <div>
            <div className='flex items-center spcae-x-5'>
              <PhoneIcon className=" text-[#F7AB0A] "/>
              <p>+91 628341547</p>
            </div>

            </div>
           </div>
        </div>
    )
}

export default contact
