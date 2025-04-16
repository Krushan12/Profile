import React from 'react'
import '../app/globals.css'
import { MeteorDemo } from './magicui/meteors'
import { Spotlight } from './ui/spotlight'
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter'

const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen w-full px-4 md:px-16 lg:px-72 py-24 md:py-36 overflow-hidden bg-black text-white">
      
      {/* Spotlight Background */}
      <div className="absolute inset-0 -z-10">
        <Spotlight className="top-16 left-10 md:left-32 md:top-20 h-screen" fill="white" />
      </div>

      {/* Meteor Name Animation */}
      <div className="flex flex-col items-center justify-center mb-10">
        <MeteorDemo />
      </div>

      {/* Bio Section */}
      <section className="text-center px-4 py-8">
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          A passionate full-stack developer and Materials Engineering undergraduate at IIT Gandhinagar, building impactful apps with React, Node.js, and MongoDB.
        </p>
      </section>

      {/* Typewriter Effect */}
      <div className="mt-12">
        <TypewriterEffectSmoothDemo />
      </div>
    </div>
  )
}

export default Hero
