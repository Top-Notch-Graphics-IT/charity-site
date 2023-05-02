import React from 'react';


export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 pb-0 mt-8">
      <div className="flex flex-wrap justify-between pb-6">
        <div className="w-full md:w-1/3 px-4 flex flex-col items-center">
          <h2 className="mb-4 text-uppercase font-bold">NAVIGATION</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">What we do</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Events</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 border-t border-white md:border-t-0 md:border-l px-4 mt-4 md:mt-0 flex flex-col items-center">
          <h2 className="mb-4 text-uppercase font-bold">SUPPORT</h2>
          <div className="flex-1 items-center">
            <a href="#" className="hover:underline">Donate</a>
          </div>
        </div>

        <div className="w-full md:w-1/3 border-t border-white md:border-t-0 md:border-l px-4 mt-4 md:mt-0 flex flex-col items-center">
  <h2 className="mb-4 text-uppercase font-bold">CONTACT US</h2>
  <ul className="flex gap-9">
    <li>
      <a href="#" className="hover:underline">
        <img src="/mail.svg" alt="Email Icon" />
      </a>
    </li>
    <li>
      <a href="#" className="hover:underline">
        <img src="/facebook.svg" alt="Facebook Icon" />
      </a>
    </li>
    <li>
      <a href="#" className="hover:underline">
        <img src="/instagram.svg" alt="Instagram Icon" />
      </a>
    </li>
    <li>
      <a href="#" className="hover:underline">
        <img src="./twitter.svg" alt="Twitter Icon" />
      </a>
    </li>
  </ul>
</div>

      </div>
      <div className="bg-gray py-4 text-center text-uppercase">
        <h2 className="text-black font-bold">
          EXTENDERS <span className="text-red-600">FOUNDATION</span> | COPYRIGHT {new Date().getFullYear()}
        </h2>
      </div>
    </footer>
  );
}
