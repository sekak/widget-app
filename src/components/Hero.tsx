import ButtonWidget from './Widget/ButtonWidget'

const Hero = () => {
    return (
        <div className='w-screen relative z-[1]'>
            <div className='max-w-[1220px] mx-auto padding-container mt-[150px]'>
                <div className='flexCol md:flex-row  w-full gap-10'>
                    <div className='flexCol md:flex-1  md:gap-10 gap-4 Belleza transition-all'>
                        <h1 className='regular-36-belleza mt-10 text-[64px] font-bold lg:w-[70%] tracking-wide'>The <b className='text-green-600'>Lifestyle</b> Stylist</h1>
                        <p className='regular-14-karla mt-5 lg:w-[50%] text-gray-500 leading-6 text-justify mb-6'>I am a lifestyle stylist, and I help people to create a life they love. I offer a range of services to help you to live your best life. Contact me to find out more.</ p>
                        <button className='bg-gray-400 text-white lg:w-[30%] p-3 rounded-[20px] hover:bg-gray-500 text-white-bg'>read more</button>
                    </div>
                    <div className='flex-1 flex hover:blur-[3px]'>
                        <img alt='img-1' src='https://cdn.prod.website-files.com/64d22aba046af54defbd778f/650c7449c6871a61c54b01e3_img-hero.webp' className='lg:w-full lg:h-auto  bg-cover bg-center w-[100%] rounded-[20px]' />
                    </div>
                </div>
            </div>
            <div className='w-full h-full fixed lg:padding-container top-[1270px] right-2 cursor-pointer '>
                <ButtonWidget />
            </div>
        </div>
    )
}

export default Hero