import { useContext } from 'react'
import { CreateContext } from '../../context/Context'
import { motion } from 'framer-motion'

const ButtonWidget = () => {
    const { open, setOpen } = useContext(CreateContext)
    console.log(open)
    const variants = {
        open: {
            rotate: 360,
            transition:{
                duration: 1
            }
        },
        closed: {
            rotate: 0,
            transition:{
                duration: 1
            }
        }
    }
    return (
        <div className='w-full relative' onClick={()=>setOpen(!open)} >
            <div className='bg-gray-400 hover:scale-105 lg:w-auto w-[50px] h-[50px] lg:h-auto lg:p-4 rounded-full absolute right-2 bottom-10 flexCenterCenter gap-4' >
                <motion.img src="./Vector.png" alt="arrow" className='w-[20px] h-[20px] border-white-bg' variants={variants} animate={open ? "open" : "closed"}/>
                <span className='regular-14-karla text-white-bg hidden lg:flex border-l-2 px-2'>
                    Book me
                </span>
            </div>
        </div>
    )
}

export default ButtonWidget