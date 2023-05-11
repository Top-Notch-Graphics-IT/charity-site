import React from "react";

export default function BoardMembers({ member }) {
  return (
    <div className="bg-white m-3 p-2 flex flex-col lg:flex-row items-center justify-center gap-8 rounded-sm">
      <img src={member.image} alt="Event Image" className="h-[200px]" />
      <div className="flex flex-col justify-center items-center">
        <h4 className="font-bold text-md">{member.title}</h4>
        <h2 className="font-bold text-red-600 text-xl">{member.name}</h2>
        <p className="leading-2 text-center md:justify-start">{member.text}</p>

        {/* social media icons */}
        <ul className="flex p-4 gap-4 ">
          <li>
            <a href="#">
              <img src="/icons/gmail.png" alt="Email Icon" className=" h-8 w-8"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icons/facebook-logo.png" alt="Facebook Icon" className="h-8 w-8"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icons/instagram.png" alt="Instagram Icon" className="h-8 w-8" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icons/twitter.png" alt="Twitter Icon" className="h-8 w-8" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
