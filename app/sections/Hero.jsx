import HeroText from "../components/HeroText";
import Navbar from "../components/Navbar";
import Image from "next/image";

import Pattern from '../assets/Pattern.png'
import HeroImage from '../assets/hero-image.png'
import Robot from '../assets/robot.png'


export default function Hero() {
  return (
    
    <section /* style={{ backgroundImage: `url(${HeroBg})` }} */ className='h-auto lg:h-screen py-5 lg:pb-0 lg:pt-10 px-4 md:px-8 lg:px-32 bg-[#F8F8FD]'>
        
        <div className='flex flex-col justify-between gap-12'>
          <Navbar />
        
          <main className='flex flex-col i lg:flex-row items-center lg:justify-between lg:gap-8'>
            <div className=''>
              <HeroText/>
            </div>

            <div className='hidden lg:block relative'>
              <Image className="h-full" src={ Pattern } alt="bg-pattern"/>
              

              <Image className='absolute bottom-0 right-0' src={HeroImage} alt='Man on the hero section' width={350} height={350} layout='intrinsic' />
            </div>
          
          <div>
            <Image className="lg:hidden mt-4" src={Robot} alt="mobile image"/>
            </div>
          </main>
        </div>
      </section>
    
  )
}