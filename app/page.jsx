import Hero from "./sections/Hero";
import Company from "./sections/Company";
import FeaturedJob from "./sections/FeaturedJob";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <main className='px-4 md:px-8 lg:px-32 py-12'>
        <Company />
        <FeaturedJob />
      </main>

      <main className='bg-main px-4 md:px-8 lg:px-32 py-12'>
        <Footer />
      </main>
    </>
  );
}
