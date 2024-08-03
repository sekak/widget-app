import { useEffect, useState } from "react"
import Card from "./Card"
import InfoUser from "./InfoUser"
import { FetchData } from "../../Data/FetchData"
import { dataProducts, dataUser } from "../../types"

const Widget = () => {
  const [change, setChange] = useState<"Services" | "Packages">("Services")
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<dataUser | null>(null)
  const [products, setProducts] = useState<dataProducts[] | null>(null)

  useEffect(() => {
    const DataUser = async () => {
      const randomNumber: number = Math.floor(Math.random() * 30)
      const data = await FetchData("https://dummyapi.online/api/users")
      const products = await FetchData("https://dummyapi.online/api/products")
      if (data.error || products.error) {
        setError(true)
        return
      }
      else {
        setData(data?.data[randomNumber])
        setProducts(products.data)
      }
    }
    DataUser()
  }, [])



  return (
    <div className='widget h-full'>
      {!error ? <>
        <section className="w-full h-[6%] flexCenterCenter relative borderWd">
          <span className="regular-16-karla-400">Overzicht</span>
        </section>
        {/* info user */}
        <section className="relative max-w-[90%] mx-auto flexCol mt-12 w-full h-[30%]">
          <InfoUser name={data?.name} id={data?.id} email={data?.email} />
        </section>
        {/* services */}
        <section className="relative flexCol -mt-2 max-w-[90%] mx-auto w-full h-[64%]">
          <div className="flexCenterBetween w-full transition-all duration-1000 overflow-hidden">
            <div className='navWd ' onClick={() => setChange("Services")}>Services</div>
            <div className='navWd' onClick={() => setChange("Packages")}>Packages</div>
            <div className='navWd borderWhite absolute top-[41px] w-full p-0'></div>
            <div className={`navWd borderBlackWd absolute top-[25px] w-[50%]`}></div>
          </div>
          <div className="w-full h-[75%] my-10 gap-4 flexCol overflow-auto">
            {/* cards */}
            {products?.map((product, i) => (
              <Card key={i} data={product} />
            ))}
          </div>
        </section>
      </>
        :
        <span className='text-red-400 text-[30px] flex mt-8 justify-center'>Something wrong!</span>
      }
    </div>
  )
}

export default Widget