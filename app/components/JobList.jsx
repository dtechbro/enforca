import Logo1 from '@/app/assets/dropbox.png'
import Logo2 from '@/app/assets/BlinkList.png'
import Image from 'next/image'
import { Dot } from '../assets/svg'
import Link from 'next/link'

export default function JobList() {

  const jobList = [
    {
      id: 1,
      title: 'Product Designer',
      detail: 'Dropbox is lookiing for a product designer to help the team ....',
      logo: Logo1,
      company: 'Dropbox',
      location: 'San Francisco, US',
      type: 'Full-time',
      category: 'Design',
    },

    {
      id: 2,
      title: 'Software Engineer',
      detail: 'BlinkList is looking for a senior software engineer to work ....',
      logo: Logo2,
      company: 'Blink',
      location: 'Granada, Spain',
      type: 'Full-time',
      category: 'Engineering',
    },

    {
      id: 3,
      title: 'Data Scientist',
      detail: 'Dropbox is lookiing for a data scientist to help the team ....',
      logo: Logo1,
      company: 'Dropbox',
      location: 'San Francisco, US',
      type: 'Full-time',
      category: 'Engineering',
    },

    {
      id: 4,
      title: 'Visual Designer',
      detail: 'Dropbox is lookiing for a Visual designer to help the team ....',
      logo: Logo2,
      company: 'BlinkList',
      location: 'Riyadh, Saudi',
      type: 'Full-time',
      category: 'Design',
    },
  ]

  return (
    <main className='grid lg:grid-cols-4 gap-5 lg:gap-8'>
      {jobList.map((job) => (
        <Link href='/' key={job} className='border-2 border-gray-200 rounded-lg p-4'>
          <div className='flex items-center justify-between gap-2'>
            <Image src={job.logo} alt={`hiring company's logo`} width={50} height={50}/>

            <p className='text-sm border border-main rounded-md px-2 py-1'>{ job.type }</p>
          </div>

          <div>
            <h2 className='text-lg font-bold' w>{job.title}</h2>
            
            <div className='flex items-center gap-2'>
              <p>{job.company}</p>
              <Dot />
              <p>{job.location }</p>
            </div>
          </div>

          <div>
            <p className='text-sm text-[#7C8493] pt-3'>{ job.detail }</p>
          </div>

          {/* <div>
            <p className='text-sm bg-main rounded-md px-2 py-1'>{ job.category}</p>
          </div> */}
        </Link>
      ))}
    </main>
  )
} 