import { Link } from 'react-router-dom'
import Container from '../Container'
import logoImg from '../../../assets/images/househunter.png'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/' className='flex items-center'>
              <img
                className='hidden md:block'
                src={logoImg}
                alt='logo'
                width='50'
                height='50'
              />
              <h2 className='text-3xl font-bold'>House <span className='text-[#66B954]'>Hunter</span></h2>
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
