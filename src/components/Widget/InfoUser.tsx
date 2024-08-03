import { FC } from "react";
import { dataUser } from "../../types"
import { personalImages } from "../../data";

const InfoUser:FC<dataUser | any>= (data) => {
    console.log(data)
    return (
        <>
         <div className="w-full flex items-center gap-2">
            <img src={data?.image} alt="img" className="w-[80px] h-[80px] rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="regular-18-karla-500">{data?.data?.name}</span>
              <span className="regular-14-karla text-gray-500">{data?.data?.email}</span>
            </div>
          </div>
          <p className="pWid text-gray-500  regular-16-karla-400 overflow-hidden text-ellipsis "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
          <img src="./add-icon.png" alt="img1" className="w-[25px] h-[25px] -mt-[5px] cursor-pointer"/>
        </>
    )
}

export default InfoUser