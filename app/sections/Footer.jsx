import { Facebook, Instagram, LinkedIn, Twitter } from "../assets/svg";
import Image from "next/image";
import Link from "next/link";

import Enforca from '@/app/assets/enforca-white.png'

const footerLinks = [
  {
    title: 'About',
    links: ['Company', 'Terms', 'Privacy Policy']
  },

  {
    title: 'Resources',
    links: ['How it works', 'Features', 'Contact Us', 'Pricing']
  },

  {
    title: 'Contact',
    links: [
      'Nigeria: Ajao estate Lagos',
      'United kingdom: 2nd Floor College House 17 King Edwards Road Ruislip London',
      'United states: Delaware, United statesHelp Center'
    ]
  }
];

const socials = [
  {
    icon: <Facebook/>,
  },
  {
    icon: <Twitter/>,
  },
  {
    icon: <LinkedIn/>,
  },
  {
    icon: <Instagram/>,
  }
]
  
export default function Footer() {


  return (
    <footer className='text-white'>
      <section className='flex flex-col md:flex-row justify-between gap-10 lg:gap-20'>
        <div className='flex flex-col gap-10'>
          <Image src={Enforca} alt='brand logo' width={120} height={100} />
          
          <p>
            Enforca is a job listing website that allows you to find and apply for jobs in your area.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {footerLinks.map((link) => (
            <div key={link} className='flex flex-col gap-5'>
              <h3 className='text-lg font-bold'>{link.title}</h3>
              <ul className="flex flex-col gap-2">
                {link.links.map((item) => (
                  <li key={item}>
                    <Link href='/' className='font-light text-sm'>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className='my-10 border-gray-500'/>

      <section className='flex flex-col md:flex-row justify-between items-center'>
        <div>
          <p>
            &copy; {new Date().getFullYear()} Enforca. All rights reserved.
          </p>
        </div>

        <div className='flex gap-4'>
          {socials.map((item) => (
            <div key={item}>{ item.icon }</div>
          ))}
        </div>
      </section>
    </footer>
  )
}
