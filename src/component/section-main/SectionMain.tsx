import React from 'react'
import { useEffect } from "react";
import gsap from "gsap";
import HeaderMenu from '../header-menu/HeaderMenu';

function SectionMain() {

        useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo("#d", { opacity: 0 }, { opacity: 1, duration: 0.3,delay:0.8})

      .to("#excl", { opacity: 1, duration: 0.3 }, "+=0.2")

      .to(["#d", "#excl"], {
        y: -200,
        duration: 0.4,
        ease: "power2.out",
      })

    .fromTo(
      "#design .line",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.3,
      }
    ).fromTo(["#designDetails", "#headerMenuSticky"],
        { y: 60, opacity: 0 },{
        y:30,
        opacity:1,
        duration:0.3
    });
  }, []);
  return (
    <>
    <div
      id="page1"
      className="h-[100vh] text-white flex flex-col lg:flex-row lg:justify-between font-bold relative gap-6"
    >
        <div>
      {/* D! */}
        <div className="absolute top-[-20px] overflow-hidden flex items-center justify-center">
        <div className='overflow-hidden text-[#C4C4C4] text-[60px] md:text-[120px] lg:text-[140px]'>
            <span id="d" className="inline-block">
            D
            </span>
            <span id="excl" className="inline-block opacity-0">
            !
            </span>
        </div>
        </div>

            {/* DESIGN,DECLARES,UK */}
        <div id="design" className="flex flex-col justify-center space-y-2">
        <div className="overflow-hidden">
            <div className="line text-[#C4C4C4] text-[60px] md:text-[120px] lg:text-[140px] leading-none">DESIGN</div>
        </div>
        <div className="overflow-hidden">
            <div className="line text-[#C4C4C4] text-[60px] md:text-[120px] lg:text-[140px]  leading-none">DECLARES</div>
        </div>
        <div className="overflow-hidden">
            <div className="line text-[60px] md:text-[120px] lg:text-[140px] text-[#ff6340] leading-none">UK</div>
        </div>
        </div>
        </div>

        <div className='max-w-[32rem] text-lg '>
            <p id='designDetails' className='text-[#C4C4C4] opacity-0'>Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.</p>
        </div>

    </div>
    </>
  )
}

export default SectionMain
