import HeroText from "../components/HeroText";
import Navbar from "../components/Navbar";
import Image from "next/image";

import Pattern from '../assets/Pattern.png'
import HeroImage from '../assets/hero-image.png'
import HeroBg from '../assets/hero-bg.png'


export default function Hero() {
  return (
    
    <section /* style={{ backgroundImage: `url(${HeroBg})` }} */ className='lg:h-screen py-5 lg:py-10 px-4 md:px-8 lg:px-32 bg-[#F8F8FD]'>
        
        <div className='flex flex-col gap-12'>
          <Navbar />
        
          <main className='lg:flex lg:items-center lg:justify-between lg:gap-8'>
            <div className='lg:w-1/2'>
              <HeroText/>
            </div>

            <div className='hidden lg:block w-1/2'>
              <Image className='ml-5' src={HeroImage} alt='Man on the hero section' width={400} height={400} layout='intrinsic'/>
            </div>
          </main>
        </div>
      </section>
    
  )
}