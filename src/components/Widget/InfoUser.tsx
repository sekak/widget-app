import React from 'react'

const InfoUser = () => {
    return (
        <div>
            <div className="flex items-center gap-3">
                <img src="https://t4.ftcdn.net/jpg/08/04/35/67/360_F_804356715_mpkH5P704pCe6MJ5tAGvjymNt4PFLPze.jpg" alt="" className="rounded-full w-[70px] h-[70px] bg-cover bg-center" />
                <div className="flexCol">
                    <span className="regular-18-karla-500">Anouskchka</span>
                    <span className="regular-14-karla text-gray-500">De Leesftye</span>
                </div>
            </div>
            <p className="pWid text-gray-400 mt-7 regular-16-karla-400 overflow-hidden text-ellipsis ">ipsumlor emipsumlo emipsumlo emipsumlo emipsumlo emipsumlo  emipsumlo emipsumlo emipsumlo emipsumlo emipsumlo emipsumlo remipsu mlo remipsu mloremi psumlorem ipsu mloremipsum loremipsuml oremip sumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumipsum</p>
            <div className="w-[30px] h-[30px] rounded-full bg-gray-300 right-6  flexColCenterCenter mt-5">
                <div className="w-[10px] h-[2px] bg-gray-600 origin-left rotate-90  -translate-y-[3.5px] translate-x-[5px]"></div>
                <div className="w-[10px] h-[2px] bg-gray-600 origin-left -translate-y-[.4px]" ></div>
            </div>
        </div>
    )
}

export default InfoUser