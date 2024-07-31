import React from 'react'
import { motion } from 'framer-motion'
import { cardVariants } from '../motion'

type CardProps = {
    data: {} | any | null
}
const Card = ({ data }: CardProps) => {
    return (

        <motion.div variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            <div className="px-3 py-3 flex relative rounded-lg border border-gray-300 m-1">
                <div className="flexCenter gap-3">
                    <img src="https://t4.ftcdn.net/jpg/08/04/35/67/360_F_804356715_mpkH5P704pCe6MJ5tAGvjymNt4PFLPze.jpg" alt="" className="w-[40%] rounded-lg bg-cover bg-center" />
                    <div className="flexCol w-[50%] gap-[1px]">
                        <span className="regular-14-karla font-bold">Kenninsamking</span>
                        <p className="text-[12px] text-gray-500 font-normal text-ellipsis pWidCard w-full overflow-hidden">Vesdrv of eeming adivgerstadivger stadivgerst </p>
                    </div>
                </div>
                <div className="flex items-start justify-end w-full">
                    <span>$80</span>
                </div>
                <div className="absolute -right-[1px] -bottom-[1.4px]">
                    <div className="w-[40px] h-[40px] border border-gray-300 roundedWg flexCenterCenter" >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 24 14 A 2 2 0 0 0 24 18 A 2 2 0 0 0 24 14 z M 23.976562 20.978516 A 1.50015 1.50015 0 0 0 22.5 22.5 L 22.5 33.5 A 1.50015 1.50015 0 1 0 25.5 33.5 L 25.5 22.5 A 1.50015 1.50015 0 0 0 23.976562 20.978516 z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Card