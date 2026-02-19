'use client'

import { useState } from 'react'
// import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    author: 'John Smith',
    company: 'Marketing Director at XYZ Corp'
  },
  {
    text: 'Working with Positivus has transformed our digital marketing strategy. Their expertise in SEO and content creation has helped us reach a much wider audience. The team is dedicated, communicative, and delivers results consistently.',
    author: 'Sarah Johnson',
    company: 'CEO at Tech Innovations'
  },
  {
    text: 'The professionalism and expertise of the Positivus team is outstanding. They understood our business goals perfectly and implemented strategies that generated immediate results. We look forward to continuing our partnership.',
    author: 'Michael Chen',
    company: 'Founder at Digital Solutions'
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
        <h2 className="text-3xl font-semibold">
          <span className="bg-lime-400 px-4 py-1 rounded-md">
          Testimonials
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl text-lg">
        Hear from Our Satisfied Clients: Read Our Testimonials
        to Learn More about Our Digital Marketing Services
        </p>
      </div>

        <div className="relative bg-black rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-primary-foreground/10">
          <div className="max-w-4xl mx-auto">
            {/* Testimonial content */}
            <div className="min-h-48 flex items-center justify-center">
              <p className="text-xl text-primary-foreground text-center mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>
            </div>

            {/* Author */}
            <div className="text-center">
              <p className="font-bold text-primary-foreground text-lg">
                {testimonials[current].author}
              </p>
              <p className="text-primary-foreground/60 text-sm">
                {testimonials[current].company}
              </p>
            </div>

            {/* Navigation dots and arrows */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary-foreground" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === current ? 'bg-accent' : 'bg-primary-foreground/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
