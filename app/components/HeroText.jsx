import '../global.css'

export default function HeroText() {
  return (
    <main className='flex flex-col items-start gap-4 px-2'>
      <h1 className='text-2xl lg:text-4xl font-acme font-bold '>First AI job application and support platform.</h1>

      <p className='text-sm lg:text-lg '>Learn your dream job with personalized preparation and expert guidance aided with our AI-powered job processing platform</p>

      <button className='bg-main text-white mt-5 px-8 py-2 rounded-md text-sm lg:text-lg'>Get Started</button>
    </main>
  )
}