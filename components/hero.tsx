import Link from 'next/link'
import React, { ReactElement } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Backgroundcircle from "../components/backgroundCircle"

interface Props {
    
}

function hero({}: Props): ReactElement {
    const[text,count]= useTypewriter({
        words:[
            "Hello there, This is Pawandeep Thandi" , "Illustrator","Web Developer"
        ],
        loop:true,
        delaySpeed:2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center text-white overflow-hidden overflow-x-hidden ' >
            <Backgroundcircle />
            <img className = "relative rounded-full h-32 w-32 mx-auto object-cover " src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            <div className='z-20'>
            <h2 className = "text-sm uppercase text-white-500 pb-2 tracking-[15px]">Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/> 
                </h1>
            <div className='mt-5 '>
                <Link href ="#about">
                    <button className='herobuttonClass' >About </button>
                </Link>
                <Link href ="#experience"><button className='herobuttonClass'>Experience</button></Link>
                <Link href ="#skills"><button className='herobuttonClass'>Skills</button></Link>
                <Link href ="#projects"><button className='herobuttonClass'>Projects</button></Link>
            </div>  
            </div>  
                
        </div>
    )
}

export default hero
