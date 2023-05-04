import React from "react";

export default function Contactus() {
  return (
    <div className="mt-20 bg-gray pb-4">
      <div className="bg-contact-background flex flex-col relative">
        <div className="absolute w-full h-full bg-black opacity-70">
          <div className="flex flex-col mt-28 items-center">
            <h1 className="font-bold text-white text-4xl">GET IN TOUCH</h1>
            <div className="h-1 mt-2 w-16 mb-[10px] bg-red-600"></div>
          </div>

          <div className="md:flex justify-around text-white mt-12">
            <div className="flex flex-col items-center">
              <img src="/location22.png" alt="address" class="h-12" />
              <h3 className="mt-4 font-bold text-lg">ADDRESS</h3>
              <h4 className="mt-3 text-md">CBD OFFICE</h4>
              <p>3rd floor, highrise building</p>
              <p>Mama Ngina Street</p>

              <h4 className="mt-4 font-semibold">KISUMU OFFICE</h4>
              <p>3rd floor, highrise building</p>
              <p>Mama Ngina Street</p>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <img src="ringing.png" alt="location" class="h-12" />
              <h3 className="mt-4 font-bold text-lg">PHONE</h3>
              <h4 className="mt-3 text-md">CBD OFFICE</h4>
              <p>+254700 000 000</p>
              <p>+254700 000 000</p>

              <h4 className="mt-4 font-semibold">KISUMU OFFICE</h4>
              <p>+254700 000 000</p>
              <p>+254700 000 000</p>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <img src="email1.png" alt="mail" class="h-12" />
              <h3 className="mt-4 font-bold text-lg">EMAIL</h3>
              <h4 className="mt-3 text-md">ENQUIRIES</h4>
              <p>enquiry@charity.com</p>
              <h4 className="mt-4 font-semibold">EMPLOYMENT OPPORTUNITY</h4>
              <p className="mt-4">enquiry@charity.com</p>
            </div>
          </div>
        </div>
      </div>

      <section className="lg:flex justify-around md:mt-8 max-w-6xl mx-auto p-2">
        <div className="basis-1/2 flex flex-col items-center  md:items-start">
          <h1 className="font-bold text-lg">MESSAGE US</h1>
          <p className="mt-4 ">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>
        <form className="flex flex-col basis-1/2 mt-4 md:mt-0">
          <label className="mb-2 text-gray-700">
            NAME
            <input
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              placeholder="Full Name"
            />
          </label>
          <label className="mb-2 text-gray-700">
            EMAIL
            <input
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="email"
              placeholder="Email Address"
            />
          </label>
          <label className="mb-2 text-gray-700">
            COMMENT OR MESSAGE
            <textarea
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows={5}
              cols={25}
            />
          </label>
          <button type="submit" className="bg-red-700 text-white text-sm uppercase px-2 w-24 rounded-md py-3">Submit</button>
        </form>
      </section>
    </div>
  );
}
