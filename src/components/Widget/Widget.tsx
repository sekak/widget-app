import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { variantsLeft, variantsRight } from "../../motion"
import Card from "./Card"
import InfoUser from "./InfoUser"
import { FetchData } from "../../Data/FetchData"
import { dataProducts, dataUser } from "../../types"
import { Packages, personalImages, Services } from "../../data"

const randomImage: number = Math.floor(Math.random() * 6);

const Widget = () => {
  const [change, setChange] = useState<"Services" | "Packages">("Services")
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<dataUser | null>(null)
  const [currentData, setCurrentData] = useState<dataProducts[] | null >(Services)



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
    if(type === "Services")
    {
      setChange("Services")
      setCurrentData(Services)
    }else {
      setChange("Packages")
      setCurrentData(Packages)
    }
  };

  return (
    <div className='h-full sm:w-[400px] w-[100%] fixed bottom-0 right-0 rounded-[25px] overflow-hidden z-50 flex flex-col shdow-widget'>
      <section className="min-h-[50px] max-h-[50px] border-b-[2px]  border-gray-300 w-full">
        <span className="w-full h-full flex items-center justify-center text-[16px] text-gray-600 font-[400] Karla">Overview</span>
      </section>
      <div className="w-full flex flex-col p-6 h-full">
        <section className="flex  flex-col  gap-4 sm:mt-4">
          {/* info user */}
          {error ? <div>Somethig wrong!</div> : <InfoUser data={data}/>}
        </section>
        <section className="relative mt-6  h-full">
          <div className="flex flex-col gap-6 w-full h-full">
            <div className="flexCenterBetween w-full transition-all duration-1000 overflow-hidden">
              <div className='navWd' onClick={() => handleClick("Services")}>Services</div>
              <div className='navWd' onClick={() => handleClick("Packages")}>Packages</div>
              <div className='navWd borderWhite absolute top-[36px] w-full p-0'></div>
              <motion.div variants={change === "Services" ? variantsLeft : variantsRight} initial="moveFrom" animate="moveTo" className={`navWd borderBlackWd absolute top-[20px] w-[50%] `}></motion.div>
            </div>
            <div className="overflow-auto flex flex-col">
              {/* card */}
              {currentData?.map((item, i) => (
                <Card key={i} data={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Widget