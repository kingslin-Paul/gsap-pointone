import React, { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function SectionDonate() {

      useEffect(() => {
      gsap.fromTo(
        "#sectionDonate",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#sectionDonate",
            start: "top 75%",
           end: "top 30%",
          scrub: 1,
          },
        }
      );
    }, []);
  return (
    <div id='sectionDonate' className='h-[90vh] flex flex-col gap-6 lg:justify-between lg:flex-row mt-40 relative'>
        <span className='text-[#C4C4C4] text-2xl md:text-3xl font-semibold lg:sticky top-[40px] h-fit'>Donate to D!</span>
        <div className='w-full lg:max-w-[54.2vw] text-[#C4C4C4]'>
            <p className='text-[20px] md:text-[24px] text-[#C4C4C4]'>Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.</p>
            
            <div className='flex gap-2 items-center mt-10'>
                    <button className='px-6 py-4 rounded-[38px] bg-[#E7E7E7] text-black text-[20px] leading-[0.95] font-semibold hover:bg-[#ff6340] w-fit'>Donate £10</button>
                    <button className='px-6 py-4 rounded-[38px] bg-[#E7E7E7] text-black text-[20px] leading-[0.95] font-semibold hover:bg-[#ff6340] w-fit'>Donate £20</button>
                    <button className='px-6 py-4 rounded-[38px] bg-[#E7E7E7] text-black text-[20px] leading-[0.95] font-semibold hover:bg-[#ff6340] w-fit'>Donate £50</button>
            </div>
        </div>
    </div>
  )
}

export default SectionDonate