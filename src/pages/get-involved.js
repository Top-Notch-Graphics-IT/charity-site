import CustomHead from '@/components/CustomHead'
import React from 'react'

export default function Involved() {
  return (
    <div className='mt-32'>
     <CustomHead />
     <section className="relative h-screen ">
        <img
          src="/assets/bg-image.png"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-left ml-16">
          <h2 className="text-white font-bold text-1xl md:text-2xl lg:text-3xl text-left px-6 w-[200px] mx-2">
            WELCOME TO THE <span className="text-red-600">EXTENDERS </span>
            FOUNDATION
          </h2>
        </div>
      </section>
    </div>
  )
}
