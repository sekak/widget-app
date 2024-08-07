import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { variantsLeft, variantsRight } from "../../motion"
import Card from "./Card"
import InfoUser from "./InfoUser"
import { FetchData } from "../../Data/FetchData"
import { dataProducts, dataUser } from "../../types"
import {  Services, personalImages } from "../../data"

const randomImage: number = Math.floor(Math.random() * 6);

const Widget = () => {
  const [change, setChange] = useState<"Services" | "Packages">("Services")
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<dataUser | null>(null)
  // const [currentData, setCurrentData] = useState<dataProducts[] | null>(Services)



  useEffect(() => {
    const DataUser = async () => {
      let random: number = Math.floor(Math.random() * 30)
      const data = await FetchData("https://dummyapi.online/api/users")
      if (data.error) {
        setError(true)
        return
      }
      else
        setData(data?.data[random])
    }
    DataUser()
  }, [])

  const handleClick = (type: string) => {
    if (type === "Services") {
      setChange("Services")
    } else {
      setChange("Packages")
    }
  };
 
  return (
    <div className='h-full sm:w-[400px] w-[100%] fixed bottom-0 right-0 rounded-[25px] overflow-hidden z-50 flex flex-col shdow-widget'>
      <section className="min-h-[50px] max-h-[50px] border-b-[2px]  border-gray-300 w-full relative">
        <span className="w-full h-full flex items-center justify-center text-[16px] text-gray-600 font-[400] Karla">Overview</span>
      </section>
      <div className="w-full flex flex-col p-6 h-full">
        <section className="h-[190px]">
          {/* info user */}
          {error ? <div>Somethig wrong!</div> : <InfoUser data={data} image={personalImages[randomImage]} />}
        </section>
          <div className="flexCenterBetween w-full overflow-hidden">
            <div className={`navWd mb-4 border-b-2 ${change !== "Services" ? 'text-gray-500' :'border-gray-800'}`} onClick={() => handleClick("Services")}>Services</div>
            <div className={`navWd mb-4 border-b-2 ${change !== "Packages" ? 'text-gray-500': 'border-gray-800'}`} onClick={() => handleClick("Packages")}>Packages</div>
          </div>
        <section className="relative mt-6 fixHeight">
          <div className="flex flex-col gap-6 w-full h-full">
            <div className="overflow-auto flex flex-col" >
              {/* card */}
              {Services?.filter((it)=> it.type === change).map((item, i) => (
                <Card key={i} data={item}/>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Widget