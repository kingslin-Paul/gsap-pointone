import { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SectionActsEmergency() {

        useEffect(() => {
      gsap.fromTo(
        "#sectionActsEmergency",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#sectionActsEmergency",
            start: "top 75%",
           end: "top 30%",
          scrub: 1,
          },
        }
      );
    }, []);

    const listItems = [
  {
    number: "1",
    title: "Sound the Alarm",
    description:
      "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
  },
  {
    number: "2",
    title: "Start the Journey",
    description:
      "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
  },
  {
    number: "3",
    title: "Bring Clients with Us",
    description:
      "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
  },
  {
    number: "4",
    title: "Measure What We Make",
    description:
      "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
  },
  {
    number: "5",
    title: "Redefine ‘Good’",
    description:
      "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards",
  },
  {
    number: "6",
    title: "Educate, Accelerate",
    description:
      "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
  },
  {
    number: "7",
    title: "Design for Justice",
    description:
      "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
  },
  {
    number: "8",
    title: "Amplify Voices for Change",
    description:
      "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
  },
  
];

  return (
        <div id='sectionActsEmergency' className='flex flex-col gap-6 justify-between lg:flex-row mt-20 relative'>
        <span className='text-[#C4C4C4] text-2xl md:text-3xl font-semibold lg:sticky top-[40px] h-fit'>8 Acts of Emergency</span>
        <div className='w-full lg:max-w-[54.2vw] text-[#C4C4C4]'>
            <p className='text-[20px] md:text-[24px] text-[#C4C4C4]'>What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:</p>

            <div className='bg-[#e7e7e7] mt-16'>
                {listItems.map((item, index) => (
                    <div key={index}>
                    <div className='text-[56px] text-black flex border-y border-black font-medium leading-[1.1] tracking-[-0.025em]'>
                        <span className='p-2 size-[72px] flex items-center justify-center'>{item.number}</span>
                        <span className='p-2 border-l border-black'>{item.title}</span>
                    </div>
                    <p className='p-4 text-[18px] text-black font-medium'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
  )
}

export default SectionActsEmergency