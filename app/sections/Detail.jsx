import Link from "next/link"

export default function Detail() {
  return (
    <section className="bg-main text-white px-20 lg:px-52 py-12 flex flex-col gap-5 items-center my-14 relative">
      <h2 className="text-3xl font-bold text-center font-acme">Land your dream job faster with personalized support every step of the way.</h2>
      
      <p className="w-[80%] text-center">Never face the job search alone. Our app connects you with a dedicated mentor, personalizes your CV for success, and equips you with interview skills through realistic simulations and expert feedback. Land your dream job faster with all-in-one support.</p>

      <Link href='/' className="px-8 py-4 bg-white text-main rounded-md mt-4"> Get Started</Link>

      {/* Adding pseudo-elements for the angled edges */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 clip-top-left bg-main"></div>

      <div className="absolute bottom-0 right-0 w-full h-full -z-10 clip-bottom-right bg-main"></div>
    </section>
  )
}