"use client";

import { useState } from "react";

export default function ContactSection() {
  const [option, setOption] = useState("hi");

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
        <h2 className="text-3xl font-semibold">
          <span className="bg-lime-400 px-4 py-1 rounded-md">
          Contact Us
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl text-lg">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="max-w-6xl mx-auto bg-[#f3f3f3] rounded-[40px] p-12 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <div className="flex items-center gap-10 mb-10">
              {["hi", "quote"].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer">
                  <div
                    onClick={() => setOption(item)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      option === item ? "border-lime-400" : "border-gray-400"
                    }`}
                  >
                    {option === item && (
                      <div className="w-3 h-3 bg-lime-400 rounded-full" />
                    )}
                  </div>
                  <span className="text-lg">
                    {item === "hi" ? "Say Hi" : "Get a Quote"}
                  </span>
                </label>
              ))}
            </div>

            <form className="space-y-8">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-2xl border border-black px-6 py-4 bg-white outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-2xl border border-black px-6 py-4 bg-white outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full rounded-2xl border border-black px-6 py-4 bg-white outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-5 rounded-2xl font-medium text-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="hidden lg:block ">
            <img className="absolute right-0" src="https://positivus-roan.vercel.app/static/media/contactImg.046e637f4f143977a4c7.png" alt="" />
          </div>

        </div>
      </div>
    </section>
  );
}
