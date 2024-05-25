import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  let navLinks = [
    {name: 'About', link: '/'},
    {name: 'Features', link: '/'},
    {name: 'Contact', link: '/'},
  ];

  let [isOpen, setIsOpen] = useState(false);
  return (
    
    <>
        

<nav className='w-full fixed top-0 left-0'>
  <div className="px-7 md:px-10 py-4  md:flex justify-between items-center">
    {/* logo */}
    <div className="flex items-center cursor-pointere text-2xl gap-2">
      <img className='w-8 h-8' src={logo} alt="" />
      <span className='font-bold'>Shift Works</span>
    </div>
    {/* menu icon */}
    <div onClick={() => setIsOpen(!isOpen)} className='md:hidden cursor-pointer absolute right-8 top-6'>
      {isOpen ? <FaXmark className='w-7 h-7'/> : <GiHamburgerMenu  className="w-7 h-7" />}
    
    </div>
    {/* nav links here */}  
    <ul className={`md:flex  md:items-center absolute ml-8 md:ml-0 left-0 w-full transition-all duration-300 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
      {navLinks.map(navLink => (
        <li className='font-semibold my-7 md:my-0 md:ml-8'><a href="/">{navLink.name}</a></li>
      ))}
      <button className='bg-red-600 text-white py-1 px-4 rounded-full md:ml-8 md:static'>Login</button>
    </ul>
  </div>
</nav>

    </>
    
  )
}

export default Navbar
