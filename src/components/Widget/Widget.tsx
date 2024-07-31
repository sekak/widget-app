import { useContext, useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { variantsLeft, variantsRight, variantsUl, variantsWidget } from "../../motion"
import Card from "../Card"
import InfoUser from "./InfoUser"
import { CreateContext } from "../../context/Context"
import { FetchData } from "../../Data/FetchData"


type DATA = {
  id: number,
  name: string,
}
const Widget = () => {
  const [change, setChange] = useState<"Services" | "Packages">("Services")
  const { open, setOpen } = useContext(CreateContext)
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<DATA>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchData("https://dummyapi.online/api/users")
      if (data.error) {
        setError(true)
      }
      const randomNumber = Math.floor(Math.random() * 30)
      console.log(randomNumber)
      setData(data.data[randomNumber])
    }
    fetchData()
  }, [])
  console.log(data)


  return (
    <motion.div variants={variantsWidget} animate={open ? "open" : "closed"} className='navbar fixed sm:w-[400px] h-[80%] sm:bottom-[110px] sm:right-[50px] w-screen bottom-0 rounded-[20px] overflow-hidden z-50'>
      <section className="w-full h-[6%] flexCenterCenter relative borderWd">
        <span className="regular-16-karla-400">Overzicht</span>
        <div className="w-[20px] h-[20px] rounded-full bg-gray-300 absolute right-6  flexColCenterCenter cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="w-[10px] h-[2px] bg-gray-600 origin-left rotate-45 -translate-y-[2.5px] translate-x-[1px]"></div>
          <div className="w-[10px] h-[2px] bg-gray-600 origin-left -rotate-45 translate-y-[2.5px] translate-x-[1px]"></div>
        </div>
      </section>
      {/* info user */}
      <section className="relative max-w-[90%] mx-auto flexCol mt-12 w-full h-[30%]">
        <InfoUser />
      </section>
      {/* services */}
      <section className="relative flexCol -mt-2 max-w-[90%] mx-auto w-full h-[64%]">
        <div className="flexCenterBetween w-full transition-all duration-1000 overflow-hidden">
          <div className='navWd ' onClick={() => setChange("Services")}>Services</div>
          <div className='navWd' onClick={() => setChange("Packages")}>Packages</div>
          <div className='navWd borderWhite absolute top-[41px] w-full p-0'></div>
          <motion.div variants={change === "Services" ? variantsLeft : variantsRight} initial="moveFrom" animate="moveTo" className={`navWd borderBlackWd absolute top-[25px] w-[50%]`}></motion.div>
        </div>
        <div className="w-full h-[75%] my-10 gap-4 flexCol overflow-auto">
          {/* cards */}
          {Array(50).fill(1).map((_, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default Widget