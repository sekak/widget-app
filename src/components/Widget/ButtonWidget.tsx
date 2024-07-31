
const ButtonWidget = () => {
    return (
        <div className='w-full relative'>
            <div className='bg-gray-400 hover:scale-105 transition-all lg:w-auto w-[50px] h-[50px] lg:h-auto lg:p-4 rounded-full absolute right-2 bottom-10 flexCenterCenter gap-4'>
                <img src="./Vector.png" alt="arrow" className='w-[35px] h-[20px] px-2 lg:border-r-2 border-white-bg' />
                <span className='regular-14-karla text-white-bg hidden lg:flex'>
                    Book me
                </span>
            </div>
        </div>
    )
}

export default ButtonWidget