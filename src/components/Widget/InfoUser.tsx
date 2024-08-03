import { FC, useEffect } from "react";
import { dataUser } from "../../types"

const InfoUser: FC<dataUser> = (data) => {
    return (
        <>
            <div className="flex items-center gap-3">
                <img src={data.image} alt="img-random" className="w-[85px] h-[85px] rounded-full bg-center bg-cover object-cover" />
                <div className="flexCol">
                    <span className="regular-18-karla-500">{data?.name}</span>
                    <span className="regular-14-karla text-gray-500">{data.email}</span>
                </div>
            </div>
            <p className="pWid text-gray-400 mt-7 regular-16-karla-400 overflow-hidden text-ellipsis ">ipsumlor emipsumlo emipsumlo emipsumlo emipsumlo emipsumlo  emipsumlo emipsumlo emipsumlo emipsumlo emipsumlo emipsumlo remipsu mlo remipsu mloremi psumlorem ipsu mloremipsum loremipsuml oremip sumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumipsum</p>
            <div className="w-[30px] h-[30px] rounded-full bg-gray-300 right-6  flexColCenterCenter mt-5">
                <div className="w-[10px] h-[2px] bg-gray-600 origin-left rotate-90  -translate-y-[3.5px] translate-x-[5px]"></div>
                <div className="w-[10px] h-[2px] bg-gray-600 origin-left -translate-y-[.4px]" ></div>
            </div>
        </>
    )
}

export default InfoUser