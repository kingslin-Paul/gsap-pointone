import { useEffect, useState } from 'react'
import CustomCheckbox from '../component/custom-checkbox/CustomCheckbox'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ContactPage() {
    const [agree1, setAgree1] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      "#decalreEmergencyNow",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay:0.5,
        ease: "power3.out",
      }
    );
  }, []);

    
  return (
    <>
    <div><span className='text-[70px] font-semibold'>D!</span></div>
    <div id='decalreEmergencyNow' className='flex flex-col gap-6 justify-between lg:flex-row mt-10 relative'>
        <span className='text-[#C4C4C4] text-2xl md:text-3xl font-semibold lg:sticky top-[40px] h-fit'>Contact</span>
        <div className='w-full lg:max-w-[54.2vw] text-[#C4C4C4]'>
            <div className='p-10 border flex flex-col gap-7 border-white mt-10'>
                <span className='text-[56px] text-white flex font-medium leading-[1.1] tracking-[-0.025em]'>Send Us A Message</span>

                <div className='border border-white'>
                    <div className='px-4 py-[5px] h-[53px] text-[#C4C4C4] border-b border-[white]'>
                    <label className='text-[18px] mr-2'>
                        Name
                    <span className='text-[24px] relative'>*</span></label><input className='bg-transparent outline-none'/>
                    </div>
                                        
                    <div className='px-4 py-[5px] h-[53px] text-[#C4C4C4] border-b border-[white]'>
                        <label className='text-[18px] mr-2'>Email:<span className='text-[24px] relative'>*</span></label><input className='bg-transparent outline-none'/>
                    </div>
                    <div className='px-4 py-[5px] h-[53px] flex text-[#C4C4C4] border-b border-[white]'>
                        <label className='text-[18px] mr-2 text-nowrap'>Team to contact:<span className='text-[24px] relative'>*</span></label>
                        <select className='bg-transparent w-full outline-none text-white text-[18px]'>
                        <option className='bg-black text-white' value="india">D! India</option>
                        <option className='bg-black text-white' value="america">D! America</option>
                        <option className='bg-black text-white' value="france">D! France</option>Discipline
                        </select>
                    </div>
                    <div className='px-4 py-[5px] h-[53px] flex text-[#C4C4C4] border-b border-[white]'>
                        <label className='text-[18px] mr-2 text-nowrap'>Enquiry type:<span className='text-[24px] relative'>*</span></label>
                        <select className='bg-transparent w-full outline-none text-white text-[18px]'>
                        <option className='bg-black text-white' value="option1">Contribute to the toolkit</option>
                        <option className='bg-black text-white' value="option2">Volunteer my time</option>
                        <option className='bg-black text-white' value="option3">Set up a new chapter</option>
                        </select>
                    </div>
                    <div className='px-4 py-[5px] text-[#C4C4C4] border-b border-[white]'>
                        <textarea className='w-full bg-transparent outline-none text-[20px] placeholder:text-[20px] placeholder:text-[#C4C4C4] text-[#C4C4C4]' rows={8} placeholder='Please write your message here.' />
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <div className='shrink-0'>
                        <CustomCheckbox checked={agree1}  onChange={() => {setAgree1(prev => (!prev))}}/>
                        </div>
                    <p className='text-[12px]'>I would like to be added to the Design Declares! newsletter and receive further updates.</p>
                    </div>
                </div>

                <a className='hover:text-[#ff6340] underline text-[12px] cursor-pointer'>View our Privacy Policy</a>

                <button className='px-6 py-4 rounded-[38px] bg-[#E7E7E7] text-black text-[20px] leading-[0.95] font-semibold hover:bg-[#ff6340] w-fit'>Send Message</button>
                
            </div>
        </div>
        </div>
    </>
      
  )
}

export default ContactPage