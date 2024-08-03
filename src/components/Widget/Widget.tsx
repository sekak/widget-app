import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { variantsLeft, variantsRight } from "../../motion"
import Card from "./Card"
import InfoUser from "./InfoUser"
import { FetchData } from "../../Data/FetchData"
import { dataProducts, dataUser } from "../../types"
import { personalImages } from "../../data"

const randomImage: number = Math.floor(Math.random() * 6);

const Widget = () => {
  const [change, setChange] = useState<"Services" | "Packages">("Services")
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<dataUser | null>(null)
  const [products, setProducts] = useState<dataProducts[] | null>(null)


  useEffect(() => {
    const DataUser = async () => {
      let random: number = Math.floor(Math.random() * 30)
      const data = await FetchData("https://dummyapi.online/api/users")
      const products = await FetchData("https://dummyapi.online/api/products")
      if (data.error || products.error) {
        setError(true)
        return
      }
      else {
        setData(data?.data[random])
        setProducts(products.data)
      }
    }
    DataUser()
  }, [])



  return (
    <div className='h-full sm:w-[400px] w-[100%] fixed bottom-0 right-0 rounded-[25px] overflow-hidden z-50 flex flex-col shdow-widget'>
      <section className="min-h-[50px] max-h-[50px] bg-white-bg w-full">
        <span className="w-full h-full flex items-center justify-center text-[14px] text-gray-600 font-[300] Karla">Overview</span>
      </section>
      <div className="w-full h-[calc(100%-50px)] flex flex-col justify-between p-6">
        <section className="flex-1 w-full h-full flex flex-col gap-8">
          <div className="w-full flex items-center gap-2">
            <img src={personalImages[0]} alt="img" className="w-[80px] h-[80px] rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="regular-18-karla-500">Ahmed sekak</span>
              <span className="regular-14-karla text-gray-500">this a little description</span>
            </div>
          </div>
          <p className="pWid text-gray-400  regular-16-karla-400 overflow-hidden text-ellipsis "> erferferferferferferferf erferfvv verferferferf erferferferferferferferferferf erferfvv verferferferf erferferferferferferferferferf erferfvv verferferferf erferferferferferferferferferf erferfvv verferferferf erferferferferferferferferferf erferfvv verferferferf erferferferferferferferferferf erferfvv verferferferf erferferferferferferferferferf erferfvv verferferferf erferf</p>
          <img src="./add-icon.png" alt="img1" className="w-[25px] -mt-[10px]" />
        </section>
        <section className="flex-1 w-full h-full relative mt-6 max-h-[50%]">
          <div className="flex flex-col gap-6 w-full h-full">
            <div className="flexCenterBetween w-full transition-all duration-1000 overflow-hidden">
              <div className='navWd ' onClick={() => setChange("Services")}>Services</div>
              <div className='navWd' onClick={() => setChange("Packages")}>Packages</div>
              <div className='navWd borderWhite absolute top-[41px] w-full p-0'></div>
              <motion.div variants={change === "Services" ? variantsLeft : variantsRight} initial="moveFrom" animate="moveTo" className={`navWd borderBlackWd absolute top-[25px] w-[50%]`}></motion.div>
            </div>
            <div className="overflow-auto w-full h-full ">
              {products?.map((product, i) => (
                <Card key={i} data={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Widget


// {!error ? <>
//   <section className="w-full h-[6%] flexCenterCenter relative borderWd">
//     <span className="regular-16-karla-400">Overview</span>
//   </section>
//   {/* info user */}
//   <section className="relative max-w-[90%] mx-auto flexCol mt-12 w-full h-[30%]">
//     <InfoUser name={data?.name} id={data?.id} email={data?.email} image={personalImages[randomImage]} />
//   </section>
//   {/* services */}
//   <section className="relative flexCol -mt-2 max-w-[90%] mx-auto w-full h-[64%]">
//     <div className="flexCenterBetween w-full transition-all duration-1000 overflow-hidden">
//       <div className='navWd ' onClick={() => setChange("Services")}>Services</div>
//       <div className='navWd' onClick={() => setChange("Packages")}>Packages</div>
//       <div className='navWd borderWhite absolute top-[41px] w-full p-0'></div>
//       <motion.div variants={change === "Services" ? variantsLeft : variantsRight} initial="moveFrom" animate="moveTo" className={`navWd borderBlackWd absolute top-[25px] w-[50%]`}></motion.div>
//     </div>
//     <div className="w-full h-[75%] my-10 gap-4 flexCol overflow-auto">
//       {/* cards */}
//       {products?.map((product, i) => (
//         <Card key={i} data={product} />
//       ))}
//     </div>
//   </section>
// </>
//   :
//   <span className='text-red-400 text-[30px] flex mt-8 justify-center'>Something wrong!</span>
// }