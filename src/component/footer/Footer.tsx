import React, { useEffect, useRef, useState } from 'react'
import CustomCheckbox from '../custom-checkbox/CustomCheckbox'

function Footer() {

    const [agree2, setAgree2] = useState(false);
    const footerRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
    const updateHeight = () => {
      const footer = footerRef.current;
      const dynamic = document.getElementById('dynamicHeight');
      if (footer && dynamic) {
        dynamic.style.height = `${footer.offsetHeight}px`;
      }
    };

    updateHeight(); // set on mount
    window.addEventListener('resize', updateHeight); // update on resize

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);
    
  return (
    <div id='dynamicHeight'>
    <div ref={footerRef} className='footer fixed bottom-0 z-0 bg-[#ff6340] px-6 py-12 flex flex-col lg:flex-row justify-start gap-5 md:gap-10'>
        <div className=''>
            <span className='text-[70px] text-black font-bold uppercase leading-[0.8] tracking-[0]'>Design <br />Declares</span>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='text-[18px] text-black hover:underline cursor-pointer'>Contact</span>
                    <span className='text-[18px] text-black hover:underline cursor-pointer'>Instagram</span>
                    <span className='text-[18px] text-black hover:underline cursor-pointer'>LinkedIn</span>
                    <span className='text-[18px] text-black hover:underline cursor-pointer'>Privacy Policy</span>
                </div>
                <div className='flex-1'>
                    <span className='text-[18px] font-bold text-black'>Sign up to the D! Newsletter</span>
                    <div className='px-4 py-[5px] h-[53px] text-black mt-8 border border-black'>
                        <label className='text-[18px] mr-2'>Email:<span className='text-[24px] relative'>*</span></label><input className='bg-transparent outline-none'/>
                    </div>
                
                <div className='flex justify-between items-center'>
                    <div>
                    <div className='flex items-center gap-2 mt-8'>
                            <div className='shrink-0'>
                            <CustomCheckbox checked={agree2} type='footer' onChange={() =>  {setAgree2(prev => (!prev))}}/>
                            </div>
                            <p className='text-[12px] text-black'>I would like to be added to the Design Declares! newsletter and receive further updates.</p>
                    </div>
                    <div className='hover:text-white text-black underline text-[12px] cursor-pointer mt-6'>View our Privacy Policy</div>
                    </div>
                <button className='px-6 py-4 h-fit rounded-[38px] bg-white hover:text-white text-black text-[20px] leading-[0.95] font-semibold hover:bg-black w-fit'>Subscribe</button>
                </div>
                
                

                </div>
            </div>
            <div>
                <p className='text-[12px] text-black'>This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand. <span className='underline'>Learn more about our carbon footprint.</span></p>
                <p className='text-[12px] text-black mt-4'>Empowered by Driftime®</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer