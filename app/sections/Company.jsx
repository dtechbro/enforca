import Image from "next/image"

import Logo1 from '@/app/assets/logo-1.png'
import Logo2 from '@/app/assets/logo-2.png'
import Logo3 from '@/app/assets/logo-3.png'
import Logo4 from '@/app/assets/logo-4.png'
import Logo5 from '@/app/assets/logo-5.png'

const companyLogo = [Logo1, Logo2, Logo3, Logo4, Logo5]

export default function Company() {
  return (
    <main className='py-20 flex flex-col gap-8'>
      <h3 className='text-2xl font-bold'>Companies we helped grow</h3>

      <section className='flex flex-wrap items-center justify-between gap-4'>
        {companyLogo.map((logo) => (
          <Image className='w-50 h-50 object-contain' src={logo} alt='company logo' key={logo} width={100} height={100}/>
        ))}
      </section>
    </main>
  )
}