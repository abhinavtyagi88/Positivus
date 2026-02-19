'use client'

import { Button } from '@/components/ui/button'

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    imgage:'https://positivus-roan.vercel.app/static/media/member2.464048de87c60162ce18.png',
    experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    imgage:'https://positivus-roan.vercel.app/static/media/member2.464048de87c60162ce18.png',
    experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    imgage:'https://positivus-roan.vercel.app/static/media/member2.464048de87c60162ce18.png',
    experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    imgage:'https://positivus-roan.vercel.app/static/media/member2.464048de87c60162ce18.png',
    experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    imgage:'https://positivus-roan.vercel.app/static/media/member2.464048de87c60162ce18.png',
    experience: '4+ years of experience in social media marketing. Creating and scheduling content, analyzing metrics, and building engagement'
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    imgage:'https://positivus-roan.vercel.app/static/media/member2.464048de87c60162ce18.png',
    experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries'
  }
]

export function Team() {
  return (
    <section className="py-10 px-4 sm:px-6 pb-20 lg:px-8 max-w-7xl mx-auto relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
          <h2 className="text-3xl font-semibold">
            <span className="bg-lime-400 px-4 py-1 rounded-md">
            Team
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl text-lg">
          Meet the skilled and experienced team behind our successful digital marketing strategies.
          </p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[32px] border border-black shadow-[0_6px_0_#000]"
            >
              <div className="flex items-start gap-4 mb-6">
                <img src={member.imgage} alt="" />
        
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600">
                    {member.role}
                  </p>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JdZfkwuQxVroCUvBiaQ4K6JrnRrbL-5RLQ&s" alt=""
                    className='h-8 bg-lime-400'
                />
              </div>
        
              <hr className="border-black mb-6" />
        
              <p className="text-gray-700 leading-relaxed">
                {member.experience}
              </p>
            </div>
          ))}
        </div>
        </div>
        <button className='absolute right-5 bottom-5 bg-zinc-900 p-2 rounded-[8px] text-white'>See all team</button>
    </section>
  )
}
