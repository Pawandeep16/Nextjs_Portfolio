import React, { ReactElement } from 'react';
import {SocialIcon} from "react-social-icons";
import { motion } from "framer-motion"
type Props = { }

export default function Header({}: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-8xl mx-auto z-20 xl:items-center overflow-hidden'> 
            <motion.div initial ={{
                x:-500,
                opacity:0,
                scale:0.5,
            }}
            animate ={{
                x:0,
                opacity:1,
            scale:1,
                    }}
                    transition ={{
                        duration:1.5,
                    }}
            className="flex flex-row items-center">
            <SocialIcon network="youtube" url='https://www.youtube.com/' style={{ height: 50, width: 50 }} fgColor="white" bgColor='transparent'/>
            <SocialIcon network="twitter" style={{ height: 50, width: 50 }} fgColor="white" bgColor='transparent'/>
            <SocialIcon network="instagram" style={{ height: 50, width: 50 }} fgColor="white" bgColor='transparent'/>
            <SocialIcon network="linkedin" style={{ height: 50, width: 50 }} fgColor="white" bgColor='transparent'/>
            </motion.div>

            <motion.div
            initial ={{
                x:500,
                opacity:0,
                scale:0.5,
            }}
            animate ={{
                x:0,
                opacity:1,
            scale:1,
                    }}
                    transition ={{
                        duration:1.5,
                    }}
                     className="flex items-center text-blue-900 cursor-pointer">
            <SocialIcon network="email" style={{ height: 50, width: 50 }} fgColor="white" bgColor='transparent'/>
            <p className="uppercase hidden md:inline-flex text-sm text-white text-bold ">Stay in Touch</p>
        
            </motion.div>
            
        </header>
        
    )
} 
