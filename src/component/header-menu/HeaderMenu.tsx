import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function HeaderMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
     const closeMenu = () => setIsOpen(false);

  return (
    <>
          {/* {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )} */}

      <div className={`flex flex-col transition-all duration-500 z-50 overflow-hidden mt-40 bg-[#C4C4C4] ${isOpen ? 'w-[416px]' : 'w-[208px]'}`}>
        <div className='h-[48px] text-[24px] font-normal hover:bg-[#ff6340] border-b-[0.5px] border-[black] flex items-center justify-between cursor-pointer'>
        <span className='px-4 text-black'>Menu</span>
        <div onClick={toggleMenu} className='border-l border-black size-[47px] flex justify-center items-center'>
        <span  className={`text-black  place-content-center text-center ${!isOpen ? '!rotate-[134deg]' : 'rotate-0'}`}>✕</span>
        </div>
        </div>
        <div className={`flex flex-col transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[500px] py-2' : 'max-h-0 py-0'}`}>
            <Link to="/" onClick={closeMenu} className='h-[48px] px-4 text-black text-[24px] font-normal hover:underline place-content-center cursor-pointer'>Home</Link>
            {/* <Link to="/about" onClick={closeMenu} className='h-[48px] px-4 text-black text-[24px] font-normal hover:underline place-content-center cursor-pointer'>About</Link> */}
            <Link to="/contact" onClick={closeMenu} className='h-[48px] px-4 text-black text-[24px] font-normal hover:underline place-content-center cursor-pointer'>Contact</Link>

        </div>
        <div className='h-[48px] px-4 text-black text-[24px] font-normal border-t-[0.5px] border-[black] hover:bg-[#ff6340] flex items-center justify-start cursor-pointer'>
            Declare Now
        </div>
    </div>

    </>
    
  )
}

export default HeaderMenu