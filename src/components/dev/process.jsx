'use client'

import { useState } from 'react'
// import { Card } from '@/components/ui/card'
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'

const processes = [
  {
    number: '01',
    title: 'Consultation',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    description: 'We analyze market trends, competitor strategies, and your unique value proposition to develop a comprehensive marketing strategy that aligns with your business goals.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our team executes the strategy across all chosen channels, optimizing campaigns, creating content, and managing your online presence to deliver measurable results.'
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    description: 'We continuously monitor performance metrics, analyze data, and make data-driven adjustments to improve campaign effectiveness and maximize your return on investment.'
  }
]

export default function Process() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-6xl ">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
        <h2 className="text-3xl font-semibold">
          <span className="bg-lime-400 px-4 py-1 rounded-md">
          Our Working Process
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl text-lg">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
        

      <div className="space-y-6">
        {processes.map((process, index) => {
            const isOpen = expanded === index;
          
            return (
              <div
                key={index}
                className={`
                  rounded-[32px] border border-black
                  shadow-[0_8px_0_0_#000]
                  transition-all overflow-hidden
                  ${isOpen ? "bg-lime-300" : "bg-white"}
                `}
              >
                <button
                  onClick={() => setExpanded(isOpen ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <span className="text-3xl font-bold">
                      {process.number}
                    </span>
                    <span className="text-2xl font-bold">
                      {process.title}
                    </span>
                  </div>
                  <div className='rounded-full'>
                  {isOpen ? (
                    <Minus className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white" />
                  ) : (
                    <Plus className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white" />
                  )}
                  </div>
                  
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-black">
                    <p className="leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
