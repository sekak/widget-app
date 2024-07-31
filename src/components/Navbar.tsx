import MenuButton from './MenuButton'


const Navbar = () => {

  return (
    <nav className='w-screen h-[55px] top-[15px] padding-container z-20 fixed'>
      <div className='flexCenterBetween navMoves px-5 py-5 rounded-[15px] mx-auto max-w-[1200px] w- h-full  relative'>
        <div className='flexCenter gap-3 text-gray-gray cursor-pointer'>
          <img src='https://cdn.prod.website-files.com/64d22aba046af54defbd778f/650c783f8e97e87bbcff18d7_dl-icon-large.png' alt='logo' className='w-[30px] h-[41px]' />
          <span className='regular-16-belleza'>The Lifestyle Stylist</span>
        </div>
        <div className=''>
          <MenuButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar