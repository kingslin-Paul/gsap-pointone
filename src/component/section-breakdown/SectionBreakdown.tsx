import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function SectionBreakdown() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
    gsap.fromTo(
      "#sectionBreakdown",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#sectionBreakdown",
          start: "top 75%",
         end: "top 30%",
        scrub: 1,
        },
      }
    );
  }, []);




    const accordionData = [
    {
      title: 'The Role of Design',
      content: [
        "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
        "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it."
      ]
    },
    {
      title: 'Declared',
      content: [
        "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
        "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it.",
        "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
        "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it."
      ]
    },
    {
      title: 'Dream Big',
      content: [
        "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
        "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it."
      ]
    }
  ];

  return (
    <div id='sectionBreakdown' className='flex flex-col gap-6 justify-between lg:flex-row mt-5 relative'>
        <span className='text-[#C4C4C4] text-2xl md:text-3xl font-semibold lg:sticky top-[40px] h-fit'>This is Breakdown</span>
        <div className='w-full lg:max-w-[54.2vw] text-[#C4C4C4]'>
            <p className='text-[56px] font-medium leading-[1.1] tracking-[-0.025em]'>The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...</p>
            
            <div className='mt-8 flex flex-col gap-6'>
    
                 <div className="space-y-4">
                    {accordionData.map((item, index) => (
                        <div
                        key={index}
                        className={`transition-all duration-500 ease-in-out overflow-hidden border-t border-[#C4C4C4] ${
                            openIndex === index ? 'max-h-[1000px]' : 'max-h-[77px]'
                        }`}
                        >
                        <div
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="accordian-header py-5 flex justify-between items-center cursor-pointer"
                        >
                            <span className="text-[20px] md:text-[24px] text-[#C4C4C4]">{item.title}</span>
                            <span
                            className={`transition-transform duration-300 ${
                                openIndex === index ? 'rotate-180' : ''
                            }`}
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 stroke-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                            </svg>
                            </span>
                        </div>

                        <div className="accordian-content text-[16px] lg:text-[18px] flex flex-wrap gap-4 w-full justify-between items-start px-1 pb-4">
                            {item.content.map((para, i) => (
                            <p key={i} className="w-full md:w-[48%]">{para}</p>
                            ))}
                        </div>
                        </div>
                    ))}
                    </div>

                    <button className='px-6 py-4 rounded-[38px] bg-[#E7E7E7] text-black text-[20px] leading-[0.95] font-semibold hover:bg-[#ff6340] w-fit'>View our D! Intro Video</button>
            </div>
           
        </div>
    </div>
  )
}

export default SectionBreakdown