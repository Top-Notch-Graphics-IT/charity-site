import Image from "next/image";
import React from "react";

export default function MidsectionHome() {
  return (
    <div>
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
      <section className="section-two px-4 py-6 md:px-8 lg:py-12">
        <p className="text-sm md:text-base max-w-screen-md mx-auto">
          Extenders Foundation is a Community Based Organization (CBO) whose
          mission is to improve the living conditions of orphans and the less
          privileged in the community. Our mission is to empower these groups of
          people through assistance, education and advocacy. Extenders
          Foundation has been in operation since 2014, helping the vulnerable in
          the community. Our committed team of volunteers and well-wishers put
          in a lot of effort to fulfill the group’s mission.
        </p>
      </section>

      <section className="relative h-screen">
        <img
          src="/assets/bg-image2.png"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-left ml-16">
          <div className="w-1/3 flex flex-col">
            <h2 className="text-white font-bold text-1xl md:text-2xl lg:text-3xl text-left px-6 mx-2">
              SUPPORT A CHILD'S LIFE <span className="text-red-600">TODAY</span>
            </h2>
            <p className="text-white px-6 my-6 mx-3">
              Thousands of children in Kenya go to sleep without a single meal.
              By supporting these children, we can give them a better chance at
              a brighter future and break the cycle of poverty and hunger.
            </p>
            <button className="bg-red-500 hover:bg-red-300 text-white px-3 py-2 rounded-md w-24 mx-9 my-6">
              DONATE
            </button>
          </div>
        </div>
      </section>

      <section className=" mt-4">
        <div className="md:flex gap-8 max-w-6xl mx-auto p-3">
          <div className="md:mt-16 md:basis-1/2 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-3xl font-bold">WHO WE ARE</h2>

            <h2 className="text-lg font-semibold mt-2">OUR IMPACT</h2>
            <p className="text-md leading-5 mt-4 w-5/6">
              Since our founding in 2014, we have visited over 20 children&#39;s
              homes and provided access to basic needs such as food, clothing,
              shelter and education. Our organization has been working hard to
              promote awareness in the community regarding social issues,
              encourage talent and reduce poverty and hunger. Ipsum
            </p>
            <p className="text-md mt-3 leading-5 w-5/6">
              At Extenders Foundation, we believe that everyone deserves to live
              a healthy and fulfilling life. We strive to create a welcoming and
              inclusive environment where everyone feels valued and supported.
            </p>
            <p className="text-md mt-3 leading-5 w-5/6">
              In all our endeavors, we are devoted to openness and
              accountability. We value community input and regularly assess our
              programs to make sure they are fulfilling the needs of the people
              we serve.
            </p>

            <button className="bg-red-400 px-4 py-2 mt-4 mb-4 md:mb-0 rounded-sm hover:bg-red-500">
              Read More
            </button>
          </div>
          <Image
            src="/img1.jpg"
            width={500}
            height={200}
            className="h-[500px] md:mt-4 basis-1/2 rounded-md"
          />
        </div>

        <div className="mt-6 p-2 box-border">
          <Image
            src="/img2.jpg"
            width={500}
            height={300}
            className="w-full h-[350px] max-w-full object-cover rounded-sm"
          />
        </div>
      </section>
    </div>
  );
}
