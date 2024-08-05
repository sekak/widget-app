import { FC } from "react";
import { dataUser } from "../../types"

const InfoUser:FC<dataUser | any>= (data) => {
    return (
        <div className="flex flex-col gap-3">
         <div className="w-full flex items-center gap-2">
            <img src={data?.image} alt="img" className="sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="sm:regular-18-karla-500 text-[16px] ">{data?.data?.name}</span>
              <span className="sm:regular-14-karla text-[10px] text-gray-500">{data?.data?.email}</span>
            </div>
          </div>
          <p className="pWid text-gray-500 sm:regular-16-karla-400 text-[14px] Karla overflow-hidden text-ellipsis "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
          <img src="./add-icon.png" alt="img1" className="sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]  cursor-pointer"/>
        </div>
    )
}

export default InfoUser