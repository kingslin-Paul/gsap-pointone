import React, { useEffect, useRef, useState } from 'react'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SectionCounting() {

       const [count, setCount] = useState(0);
    const calledOnce = useRef(false);
     
    const dummyNames = [
  "Studio Alpha", "Design Hub", "Creative Minds", "Pixel Lab", "UX Works",
  "FutureForm", "Bright Studio", "Mindful Design", "Nova Agency", "VisionCraft",
  "IdeaSpark", "BoldType", "DesignCore", "InnoVision", "CreativeSync",
  "DesignLab", "GridWorks", "Path Studio", "Loop Design", "ThinkTank","Studio Alpha", "Design Hub", "Creative Minds", "Pixel Lab", "UX Works",
  "FutureForm", "Bright Studio", "Mindful Design", "Nova Agency", "VisionCraft",
  "IdeaSpark", "BoldType", "DesignCore", "InnoVision", "CreativeSync",
  "DesignLab", "GridWorks", "Path Studio", "Loop Design", "ThinkTank","Studio Alpha", "Design Hub", "Creative Minds", "Pixel Lab", "UX Works",
  "FutureForm", "Bright Studio", "Mindful Design", "Nova Agency", "VisionCraft",
  "IdeaSpark", "BoldType", "DesignCore", "InnoVision", "CreativeSync",
  "DesignLab", "GridWorks", "Path Studio", "Loop Design", "ThinkTank","Studio Alpha", "Design Hub", "Creative Minds", "Pixel Lab", "UX Works",
  "FutureForm", "Bright Studio", "Mindful Design", "Nova Agency", "VisionCraft",
  "IdeaSpark", "BoldType", "DesignCore", "InnoVision", "CreativeSync",
  "DesignLab", "GridWorks", "Path Studio", "Loop Design", "ThinkTank","Studio Alpha", "Design Hub", "Creative Minds", "Pixel Lab", "UX Works",
  "FutureForm", "Bright Studio", "Mindful Design", "Nova Agency", "VisionCraft",
  "IdeaSpark", "BoldType", "DesignCore", "InnoVision", "CreativeSync",
  "DesignLab", "GridWorks", "Path Studio", "Loop Design", "ThinkTank",
];


  const startCounting = () => {
    if (calledOnce.current) return;
    calledOnce.current = true;

    let i = 400;
    const interval = setInterval(() => {
      i++;
      setCount(i);
      if (i >= 514) {
        clearInterval(interval);
      }
    }, 5);
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#coutingSection",
      start: "top 70%",
      onEnter: () => startCounting(),
    });
  }, []);

  return (
    <div id='coutingSection' className='flex flex-col gap-10 mt-40'>
        <div className='flex flex-col gap-3'>
        <span className='text-[60px] text-[#C4C4C4] leading-[1]'>#<span>{count}</span></span>
        <span className='text-[24px] text-[#C4C4C4]'>Signatories and counting in <span className='px-3 py-1 bg-[#ff6340] text-black text-[12px] rounded-[32px]'>D! UK</span></span>
        </div>

        <section className="bg-black text-[#C4C4C4] px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-4">
          {dummyNames.map((name, idx) => (
            <a key={idx} href="#" className="hover:underline text-sm block">
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
        
    </div>
  )
}

export default SectionCounting