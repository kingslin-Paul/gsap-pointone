import { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function SectionLatest() {

    // useEffect(() => {
    //     gsap.fromTo(
    //       "#sectionLatest",
    //       { opacity: 0, y: 100 },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         duration: 1.3,
    //         ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: "#sectionLatest",
    //           start: "top 75%",
    //          end: "top 30%",
    //         scrub: 1,
    //         },
    //       }
    //     );
    //   }, []);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: "#sectionLatest",
            start: "top 75%",
            end: "top 30%",
            scrub: 1,
            },
        });

        tl.fromTo(
            "#sectionLatest",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        tl.fromTo(
            ".cardLatest",
            { opacity: 0, y: 50 },
            {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3,
            }
        );
        }, []);
    

  return (
    <div id='sectionLatest' className='h-[100vh] flex flex-col gap-6 lg:justify-between lg:flex-row mt-40 relative'>
        <span className='text-[#C4C4C4] text-2xl md:text-3xl font-semibold lg:sticky top-[40px] h-fit'>Latest</span>
        <div className='w-full lg:max-w-[54.2vw]'>
            <div className='cardLatest'>
                <div className='flex gap-2 items-center'>
                    <span className='px-3 py-1 bg-[#272727] text-[#c4c4c4] text-[12px] rounded-[32px]'>Events</span><span className='px-3 py-1 bg-[#272727] text-[#c4c4c4] text-[12px] rounded-[32px]'>D! UK</span> <span className='text-[12px] text-[#c4c4c4]'>24.04.2025, 03 PM:30</span>
                </div>
                <div className='flex justify-between gap-5'>
                <p className='text-[32px] leading-[1.2] flex-1'>SD4P Collective: How can Service Design drive meaningful sustainability impact</p>
                <div className='flex-1 flex flex-col gap-3'>
                    <p className='text-[18px]'>Recap: SD4P Collective working session – 28th March 2025</p>
                    <a className='hover:text-[#ff6340] underline text-[16px] cursor-pointer mt-5'>Read Story</a>
                </div>
                </div>
            </div>

            <div className='cardLatest mt-10'>
                <div className='flex gap-2 items-center'>
                    <span className='px-3 py-1 bg-[#272727] text-[#c4c4c4] text-[12px] rounded-[32px]'>Events</span><span className='px-3 py-1 bg-[#272727] text-[#c4c4c4] text-[12px] rounded-[32px]'>D! UK</span> <span className='text-[12px] text-[#c4c4c4]'>24.04.2025, 03 PM:30</span>
                </div>
                <div className='flex justify-between gap-5'>
                <p className='text-[32px] leading-[1.2] flex-1'>Designing Tomorrow: Speculative Thinking Shapes Our Present</p>
                <div className='flex-1 flex flex-col gap-3'>
                    <p className='text-[18px]'>Design Declares' November Event Challenges Perspectives on Sustainability and Innovation</p>
                    <a className='hover:text-[#ff6340] underline text-[16px] cursor-pointer mt-5'>Read Story</a>
                </div>
                </div>
            </div>

            <button className='px-6 py-4 rounded-[38px] mt-10 bg-[#E7E7E7] text-black text-[20px] leading-[0.95] font-semibold hover:bg-[#ff6340] w-fit'>See all the latest</button>
        </div>
    </div>
  )
}

export default SectionLatest