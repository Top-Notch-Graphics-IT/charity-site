import Image from "next/image";
import React from "react";
import { boardMembers, allMembers, values } from "@/data/events";
import BoardMembers from "@/components/BoardMembers";
import AllMembers from "@/components/AllMembers";
import CoreValue from "@/components/CoreValue";

export default function About() {
  return (
    <div className="mt-20 bg-gray">
      <div className="bg-custom flex flex-col items-center justify-center md:items-end md:justify-center ">
        <div className="md:mr-8  md:text-4xl text-3xl flex flex-col font-bold text-white items-center">
          <h1 className=" font-bold text-white">ABOUT THE {" "}</h1>

          <h1 className="md:ml-0 ml-20"><span className="text-red-600">EXTENDERS </span> FOUNDATION
          </h1>
        </div>
      </div>
      <section className="px-4 py-6 md:px-8 lg:py-12">
        <p className="text-sm md:text-base max-w-screen-md mx-auto">
          Lorem ipsum dolor sit amet. Ea enim magni in dolore necessitatibus et
          deleniti impedit non quasi sunt est eveniet quasi. Sit quia voluptates
          eos voluptatum quia id voluptas beatae id maiores veniam rem natus
          placeat et exercitationem assumenda ut reiciendis consequatur. Ut
          placeat corporis qui temporibus voluptatem qui corrupti sint ex veniam
          excepturi. Qui minus dolor a dicta necessitatibus et aperiam molestiae
          eum maxime molestiae et sapiente voluptatem qui deleniti explicabo.
          Qui fuga doloribus At quae quia et enim quibusdam eum nobis delectus
          et dolorum quia. Et veniam quaerat sit asperiores internos At eius
          porro ut explicabo architecto aut recusandae impedit aut quos quia qui
          cupiditate dignissimos. Et atque rerum est nobis recusandae eos saepe
          voluptatibus aut sequi debitis eos velit delectus et molestiae nihil
          quo debitis suscipit?
        </p>
      </section>
      <div className="mt-4 p-2 box-border">
        <Image
          src="/IMG_1617.jpg"
          width={500}
          height={300}
          className="w-full h-[450px] max-w-full object-cover rounded-sm"
        />
      </div>

      <div className="max-w-4xl mx-auto md:flex mt-4">
        <div className="flex flex-col items-center ">
          <h1 className="font-bold text-2xl  mt-8">OUR MISSION</h1>
          <div className="h-1 w-16 md:ml-30 mb-[10px] bg-red-600"></div>
          <p className="text-md leading-5 w-4/5 mt-8 md:mt-20 text-center">
            Lorem Ipsum Lorem Ipsum Loren IPsum Loren Ipsum Lorem Ipsum Lorem
            Ipsum Loren IPsum Loren Ipsum Lorem Ipsum Lorem Ipsum Loren IPsum
            Loren Ipsum Lorem Ipsum Lorem Ipsum Loren IPsum Loren Ipsum
          </p>
        </div>
        <Image
          src="/IMG_1628.jpg"
          width={500}
          height={200}
          className="h-[350px] rounded-md mr-10 mt-4 md:mt-0"
        />
      </div>

      <div className="gap-12 mt-8 bg-white p-2">
        <div className="flex flex-col md:flex-row justify-center items-center lg:ml-56">
          <Image
            src="/IMG_1628.jpg"
            width={500}
            height={200}
            className="h-[350px] rounded-md  md:mt-4 mb-4"
          />
          <div className="md:ml-12 flex flex-col items-center">
            <h1 className="font-bold text-2xl  mt:mt-8">OUR VISSION</h1>
            <div className="h-1 w-16 md:ml-30 mb-[10px] bg-red-600"></div>

            <p className="text-md text-center leading-5 md:w-2/3 mt-8 md:mt-20">
              Lorem Ipsum Lorem Ipsum Loren IPsum Loren Ipsum Lorem Ipsum Lorem
              Ipsum Loren IPsum Loren Ipsum Lorem Ipsum Lorem Ipsum Loren IPsum
              Loren Ipsum Lorem Ipsum Lorem Ipsum Loren IPsum Loren Ipsum
            </p>
          </div>
        </div>
      </div>

      {/* core values */}
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mt-8"> OUR CORE VALUES</h1>
          <div className="h-1 w-16  mb-[10px] bg-red-600"></div>
        </div>
        <div className="md:flex gap-8 md:mt-16 max-w-6xl mx-auto">
          {values.map((value)=>(
            <div key={value.id}>
              <CoreValue value={value}/>
            </div>
          )

          )}
        </div>
      </div>

      <div className="mt-8 p-2 box-border">
        <Image
          src="/IMG_7369.jpg"
          width={500}
          height={300}
          className="w-full h-[450px] max-w-full object-cover rounded-sm"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mt-8"> OUR TEAM</h1>
          <div className="h-1 w-16  mb-[10px] bg-red-600"></div>
          <div className="mt-8 flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold">OUR BOARD</h3>

            <div className="grid sm:grid-col md:grid-cols-2 max-w-6xl">
              {boardMembers.map((member) => (
                <div key={member.id} className="">
                  <BoardMembers member={member} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center md:mb-12">
            <h3 className="text-xl font-semibold mb-4">OUR MEMBERS</h3>

            <div className="md:flex gap-8">
              {allMembers.map((memba) => (
                <div key={memba.id} className="">
                  <AllMembers memba={memba} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
