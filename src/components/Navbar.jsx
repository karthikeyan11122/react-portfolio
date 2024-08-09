import logo from '../assets/logo.png'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

export const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6' >
    <div className='flex flex-shrink-0 items-center'>
      <img className='mx-2 w-10' src={logo} alt="" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href='https://www.linkedin.com/in/karthikeyan-kk-237219264' target='_blank' rel="noopener noreferrer">
        <FaLinkedin className='cursor-pointer hover:text-blue-400' />
      </a>
      <a href='https://github.com/karthikeyan11122' target='_blank' rel="noopener noreferrer">
        <FaGithub className='cursor-pointer hover:text-[#fff]' />
      </a>
      <a href='https://www.facebook.com/karthikeyan.appu.7' target='_blank' rel="noopener noreferrer" >
        <FaFacebook className='cursor-pointer hover:text-blue-900' />
      </a>
      <a href=''>
        <FaInstagram className='cursor-pointer hover:text-pink-600' />
      </a>
    </div>
  </nav>
}
