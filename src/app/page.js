import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Process from "@/components/dev/process";
import { Team } from "@/components/dev/team";
import Testimonials from "@/components/dev/Testimonials";
import ContactSection from "@/components/dev/Form";
import { Footer } from "@/components/dev/footer";




export default function Home() {
  return (
    <div className="font-play">

      {/* //Navbar Section*/}
      <div className=" sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <img src="./black-positivus-logo.jpg"/>
            </div>
            <span>Positivus</span>
          </Link>
          <div className="flex justify-between">
            <div className="hidden md:flex items-center gap-8 mr-3">
              <a href="#" className="text-sm hover:text-black-100 p-1 transition-colors">About us</a>
              <a href="#" className="text-sm hover:text-black-100 p-1 transition-colors">Services</a>
              <a href="#" className="text-sm hover:text-black-100 p-1 transition-colors">Use Cases</a>
              <a href="#" className="text-sm hover:text-black-100 p-1 transition-colors">Pricing</a>
              <a href="#" className="text-sm hover:text-black-100 p-1 transition-colors">Blog</a>
            </div>
            <Button
              variant="outline"
              className="rounded-xl border-2 border-zinc-700 px-6 py-2 text-sm bg-white hover:bg-gray-50"
            >
              Request a quote
            </Button>

          </div>
          
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Navigating the digital landscape for success
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Book a consultation
          </Button>
        </div>

        <div className="relative h-96 md:h-full flex items-center justify-center">
          <img src="./Hero-section.png"/>
        </div>
      </div>

      {/* Client logos */}
      <div className="mt-20 pt-12 border-t border-border">
        <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-center">
          <img src="./amazon-logo.png"/>
          <img src="./dribble.png"/>
          <img src="./Notion.png"/>
          <img src="Hubspot-logo.png"/>
          <img src="./Netflix.png"/>
          <img src="./amazon-logo.png"/>
          <img src="./zoom.png"/>
        </div>
      </div>
    </section>

    {/* servicess section */}
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
        <h2 className="text-3xl font-semibold">
          <span className="bg-lime-400 px-4 py-1 rounded-md">
          Services
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 auto-rows-fr">

        <img src="search-service.png"/>

        <img src="https://positivus-roan.vercel.app/static/media/Card2.75ea3e4cc85005681d8e.png"/>
        <img src="https://positivus-roan.vercel.app/static/media/Card3.713008f01c4901f7f868.png"/>
        <img src="https://positivus-roan.vercel.app/static/media/Card4.1980b0143b4407c5d681.png"/>
        <img src="https://positivus-roan.vercel.app/static/media/Card5.dade142e9c9e293234cd.png"/>
        <img src="https://positivus-roan.vercel.app/static/media/Card6.a2ff902b60accc964c63.png"/>

      </div>
    </section>




    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#f7f7f5] border border-gray-200 rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Let's make things happen
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>

          <a
            href="#"
            className="inline-block bg-black text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-lg transition"
          >
            Get your free proposal
          </a>
        </div>

        <div className="hidden lg:flex justify-end">
          <img
            src="https://positivus-roan.vercel.app/static/media/Card7.5bcc05f326136c9cd86a.png"
            className="w-72 h-72 object-contain"
            alt="Marketing illustration"
          />
        </div>

      </div>
    </section>



    {/* Case Studies */}

    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
        <h2 className="text-3xl font-semibold">
          <span className="bg-lime-400 px-4 py-1 rounded-md">
            Case Studies
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      {/* DARK CONTAINER */}
      <div className="bg-black text-white rounded-[40px] p-12">

        <div className="grid md:grid-cols-3 gap-12">

          {/* ITEM 1 */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a href="#" className="text-lime-400 font-medium">
              Learn more ↗
            </a>
          </div>

          {/* ITEM 2 */}
          <div className=" border-t border-gray-700 pt-8 
                            md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <a href="#" className="text-lime-400 font-medium">
              Learn more ↗
            </a>
          </div>


          {/* ITEM 3 */}
          <div className=" border-t border-gray-700 pt-8
                            md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <a href="#" className="text-lime-400 font-medium">
              Learn more ↗
            </a>
          </div>

        </div>
      </div>
    </section>
    <Process/>
    <Team/>
    <Testimonials/>
    <ContactSection/>
    <Footer/>
  </div>
  );
}
