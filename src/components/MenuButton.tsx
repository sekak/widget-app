import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { variants, variantsUl } from '../motion'



const MenuButton = () => {
    const [open, setOpen] = useState<Boolean>(false)

    window.addEventListener('resize', (e) => {
        if (window.innerWidth > 1024) {
            setOpen(false)
        }
    })
 
    return (
        <div className=' z-30' >
            <ul className='lg:flex gap-10 regular-14-karla hidden '>
                <li className='borderBlack'>About me</li>
                <li className='borderBlack'>Inspiration</li>
                <li className='borderBlack'>Blog</li>
                <li className='borderBlack'>Services & Rates</li>
                <li className='borderBlack'>Contact</li>
            </ul>
            <div className='menu flex flex-col gap-[4.5px] lg:hidden cursor-pointer' onClick={() => setOpen(prev => !prev)}>
                <div className={`w-[20px] h-[2.5px] bg-black rounded-md ease-in-out duration-500 ${open && 'rotate-45 origin-left'}`}></div>
                <div className={`w-[20px] h-[2.5px] bg-black rounded-md ease-in-out duration-500 ${open && 'opacity-0'}`}></div>
                <div className={`w-[20px] h-[2.5px] bg-black rounded-md ease-in-out duration-500 ${open && '-rotate-45 origin-left'}`}></div>
            </div>
            <motion.div className='rounded-[20px] w-full absolute left-0 top-20 navbar' variants={variants} animate={!open ? 'closed' : 'open'}>
                <motion.ul className='flex flex-col gap-5 regular-14-karla p-6' variants={variantsUl} animate={open ? 'open' : 'closed'}> 
                    <motion.li className='borderBlack' variants={variantsUl} >About me</motion.li>
                    <motion.li className='borderBlack' variants={variantsUl} >Inspiration</motion.li>
                    <motion.li className='borderBlack' variants={variantsUl} >Blog</motion.li>
                    <motion.li className='borderBlack' variants={variantsUl} >Services & Rates</motion.li>
                    <motion.li className='borderBlack' variants={variantsUl} >Contact</motion.li>
                </motion.ul>
            </motion.div>

        </div >
    )
}

export default MenuButton