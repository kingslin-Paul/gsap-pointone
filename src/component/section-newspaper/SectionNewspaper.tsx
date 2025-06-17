import { useEffect, useState } from 'react'
import CustomCheckbox from '../custom-checkbox/CustomCheckbox'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SectionNewspaper() {
         useEffect(() => {
          gsap.fromTo(
            "#sectionNewspaper",
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1.3,
              ease: "power3.out",
              scrollTrigger: {
                trigger: "#sectionNewspaper",
                start: "top 75%",
               end: "top 30%",
              scrub: 1,
              },
            }
          );
        }, []);

    const [agree2, setAgree2] = useState(false);
  return (
        <div id='sectionNewspaper' className='flex flex-col gap-6 justify-between lg:flex-row mt-20 relative'>
        <span className='text-[#C4C4C4] text-2xl md:text-3xl font-semibold lg:sticky top-[40px] h-fit'>The Design Declares Newsletter and Toolkit</span>
        <div className='w-full lg:max-w-[54.2vw] text-[#C4C4C4]'>
             <img
            src='/fitpeo-newspaper.jpg'
            alt='Design Declares Newspaper'
            className='w-full h-auto object-cover'
            />
            <p className='text-[20px] md:text-[24px] text-[#C4C4C4] leading-[1.2] mt-6'>Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.</p>
            <p className='text-[16px] md:text-[18px] text-[#C4C4C4] leading-[1.2] font-normal mt-6'>Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.</p>

            <div className='px-4 py-[5px] h-[53px] text-[#C4C4C4] mt-8 border border-[white]'>
                <label className='text-[18px] mr-2'>Email:<span className='text-[24px] relative'>*</span></label><input className='bg-transparent outline-none'/>
            </div>

                <div className='flex items-center gap-2 mt-8'>
                        <div className='shrink-0'>
                        <CustomCheckbox checked={agree2}  onChange={() =>  {setAgree2(prev => (!prev))}}/>
                        </div>
                        <p className='text-[12px]'>I would like to be added to the Design Declares! newsletter and receive further updates.</p>
                </div>

                <div className='hover:text-[#ff6340] underline text-[12px] cursor-pointer mt-8'>View our Privacy Policy</div>
                <button className='px-6 py-4 rounded-[38px] bg-[#E7E7E7] text-black text-[20px] leading-[0.95] font-semibold mt-8 hover:bg-[#ff6340] w-fit'>Subscribe</button>

        </div>
        </div>
  )
}

export default SectionNewspaper