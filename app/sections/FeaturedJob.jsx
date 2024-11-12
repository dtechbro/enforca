import Image from "next/image"
import Link from "next/link"
import JobList from "../components/JobList"

export default function FeaturedJob() {
  return (
    <section className='flex flex-col gap-4 py-10'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold'>Featured Jobs</h3>

        <Link href='/' className='text-main'>Show all jobs</Link>
      </div>

      <main>
        <JobList />
      </main>
    </section>
  )
} 
