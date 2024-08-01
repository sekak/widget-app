import { useContext } from 'react'
import { CreateContext } from '../../context/Context'
import { motion } from 'framer-motion'
import { variantsButton } from '../../motion'

const ButtonWidget = () => {
    const { open, setOpen } = useContext(CreateContext)
    
    return (
        <div className='w-screen h-screen relative cursor-pointer' onClick={()=>setOpen(!open)} >
            <div className='bg-gray-400 hover:scale-105 lg:w-auto w-[50px] h-[50px] lg:h-auto lg:p-4 rounded-full absolute right-12 bottom-[50px] flexCenterCenter gap-4' >
                <motion.img src="./Vector.png" alt="arrow" className='w-[20px] h-[20px] border-white-bg' variants={variantsButton} animate={open ? "open" : "closed"}/>
                <span className='regular-14-karla text-white-bg hidden lg:flex border-l-2 px-2'>
                    Book me
                </span>
            </div>
        </div>
    )
}

export default ButtonWidget