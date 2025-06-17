import { useEffect, useState } from 'react'
import CustomCheckbox from '../custom-checkbox/CustomCheckbox';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SectionDeclareEmergency() {

            useEffect(() => {
          gsap.fromTo(
            "#decalreEmergencyNow",
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1.3,
              ease: "power3.out",
              scrollTrigger: {
                trigger: "#decalreEmergencyNow",
                start: "top 75%",
               end: "top 30%",
              scrub: 1,
              },
            }
          );
        }, []);

    const [business, setBusiness] = useState(false);
    const [individual, setIndividual] = useState(false);
    const [publicInd, setPublicInd] = useState(false);
    const [team, setTeam] = useState(false);
    const [agree1, setAgree1] = useState(false);
    const [agree2, setAgree2] = useState(false);

  return (
        <div id='decalreEmergencyNow' className='flex flex-col gap-6 justify-between lg:flex-row mt-40 relative'>
        <span className='text-[#C4C4C4] text-2xl md:text-3xl font-semibold lg:sticky top-[40px] h-fit'>Declare Emergency Now</span>
        <div className='w-full lg:max-w-[54.2vw] text-[#C4C4C4]'>
            <p className='text-[20px] md:text-[24px] text-[#C4C4C4]'>Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.</p>
            <div className='p-10 border flex flex-col gap-7 border-white mt-10'>
                <span className='text-[56px] text-white flex font-medium leading-[1.1] tracking-[-0.025em]'>I am Declaring <br/> Emergency</span>
                <div className='flex flex-wrap gap-4'>
                    <label className='cursor-pointer flex gap-2 text-[18px] items-center' onClick={()=>{
                        setBusiness(true);
                        setIndividual(false);
                        setPublicInd(false);
                        setTeam(false);}}>
                    <CustomCheckbox checked={business}  onChange={() => {}}/> As a business
                    </label>

                    <label className='cursor-pointer flex gap-2 text-[18px] items-center' onClick={()=>{ setBusiness(false);
  setIndividual(true);
  setPublicInd(false);
  setTeam(false);}}>
                    <CustomCheckbox checked={individual}  onChange={() => {}}/> As an individual
                    </label>

                    <label className='cursor-pointer flex gap-2 text-[18px] items-center' onClick={()=>{setBusiness(false);
  setIndividual(false);
  setPublicInd(true);
  setTeam(false);}}>
                    <CustomCheckbox checked={publicInd}  onChange={() => {}}/> As a public institution
                    </label>

                    <label className='cursor-pointer flex gap-2 text-[18px] items-center' onClick={()=>{  setBusiness(false);
  setIndividual(false);
  setPublicInd(false);
  setTeam(true);}}>
                    <CustomCheckbox checked={team}  onChange={() => {}}/> As a team or department
                    </label>

                </div>
                <div className='border border-white'>
                    {
                        (business || individual || publicInd || team) && (
                        <div className='px-4 py-[5px] h-[53px] text-[#C4C4C4] border-b border-[white]'>
                        <label className='text-[18px] mr-2'>
                            {business && "Business Name:"}
                            {individual && "Individual Name:"}
                            {publicInd && "Institution Name:"}
                            {team && "Business Name:"}
                        <span className='text-[24px] relative'>*</span></label><input className='bg-transparent outline-none'/>
                        </div>)
                    }
                    
                    {
                        team && <div className='px-4 py-[5px] h-[53px] text-[#C4C4C4] border-b border-[white]'>
                                    <label className='text-[18px] mr-2'>Team Name:<span className='text-[24px] relative'>*</span></label><input className='bg-transparent outline-none'/>
                                </div>
                    }
                    
                    <div className='px-4 py-[5px] h-[53px] text-[#C4C4C4] border-b border-[white]'>
                        <label className='text-[18px] mr-2'>Website:<span className='text-[24px] relative'>*</span></label><input className='bg-transparent outline-none'/>
                    </div>
                    <div className='px-4 py-[5px] h-[53px] flex text-[#C4C4C4] border-b border-[white]'>
                        <label className='text-[18px] mr-2'>Country:<span className='text-[24px] relative'>*</span></label>
                        <select className='bg-transparent w-full outline-none text-white text-[18px]'>
                        <option className='bg-black text-white' value="india">India</option>
                        <option className='bg-black text-white' value="america">America</option>
                        <option className='bg-black text-white' value="france">France</option>Discipline
                        </select>
                    </div>
                    <div className='px-4 py-[5px] h-[53px] flex text-[#C4C4C4] border-b border-[white]'>
                        <label className='text-[18px] mr-2'>Discipline:<span className='text-[24px] relative'>*</span></label>
                        <select className='bg-transparent w-full outline-none text-white text-[18px]'>
                        <option className='bg-black text-white' value="digital">Digital Design</option>
                        <option className='bg-black text-white' value="service">Service Design</option>
                        <option className='bg-black text-white' value="product">Product Design</option>
                        </select>
                    </div>
                    <div className='px-4 py-[5px] text-[#C4C4C4] border-b border-[white]'>
                        <textarea className='w-full bg-transparent outline-none text-[20px] placeholder:text-[20px] placeholder:text-[#C4C4C4] text-[#C4C4C4]' rows={8} placeholder='Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares.' />
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <div className='shrink-0'>
                        <CustomCheckbox checked={agree1}  onChange={() => {setAgree1(prev => (!prev))}}/>
                        </div>
                    <p className='text-[12px]'>I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='shrink-0'>
                        <CustomCheckbox checked={agree2}  onChange={() =>  {setAgree2(prev => (!prev))}}/>
                        </div>
                        <p className='text-[12px]'>I would like to be added to the Design Declares! newsletter and receive further updates.</p>
                    </div>
                </div>

                <a className='hover:text-[#ff6340] underline text-[12px] cursor-pointer'>View our Privacy Policy</a>

                <button className='px-6 py-4 rounded-[38px] bg-[#E7E7E7] text-black text-[20px] leading-[0.95] font-semibold hover:bg-[#ff6340] w-fit'>Declare Emergency Now</button>
                
            </div>
        </div>
        </div>
  )
}

export default SectionDeclareEmergency