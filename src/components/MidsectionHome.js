import React from 'react';


export default function MidsectionHome() {
  return (
    <div>
  <section className="relative h-screen">
      <img src="/assets/bg-image.png" alt="" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-left">
        <h2 className="text-white font-bold text-1xl md:text-2xl lg:text-3xl text-left px-6 w-20 mx-2">
          WELCOME TO THE <span className="text-red-600">EXTENDERS</span> FOUNDATION
        </h2>
      </div>
    </section>
    <section className='section-two px-4 py-6 md:px-8 lg:py-12'>
  <p className='text-sm md:text-base max-w-screen-md mx-auto'>
  Lorem ipsum dolor sit amet. Ea enim magni in dolore necessitatibus et deleniti impedit non quasi sunt est eveniet quasi. Sit quia voluptates eos voluptatum quia id voluptas beatae id maiores veniam rem natus placeat et exercitationem assumenda ut reiciendis consequatur. Ut placeat corporis qui temporibus voluptatem qui corrupti sint ex veniam excepturi.

  Qui minus dolor a dicta necessitatibus et aperiam molestiae eum maxime molestiae et sapiente voluptatem qui deleniti explicabo. Qui fuga doloribus At quae quia et enim quibusdam eum nobis delectus et dolorum quia. Et veniam quaerat sit asperiores internos At eius porro ut explicabo architecto aut recusandae impedit aut quos quia qui cupiditate dignissimos. Et atque rerum est nobis recusandae eos saepe voluptatibus aut sequi debitis eos velit delectus et molestiae nihil quo debitis suscipit?
  </p>
</section>

<section className="relative h-screen">
  <img src="/assets/bg-image2.png" alt="" className="object-cover w-full h-full" />
  <div className="absolute inset-0 flex items-center justify-left">
    <div className="w-1/3 flex flex-col">
      <h2 className="text-white font-bold text-1xl md:text-2xl lg:text-3xl text-left px-6 mx-2">
        SUPPORT A CHILD'S LIFE <span className="text-red-600">TODAY</span>
      </h2>
      <p className="text-white px-6 my-6 mx-3">
        Est recusandae magni ut ipsa officia 33 amet eveniet aut optio nulla in maxime reprehenderit ut atque dolore. At illum sint sit enim minima sed eligendi aliquid. Rem reprehenderit magnam non
      </p>
      <button className="bg-red-500 hover:bg-red-300 text-white px-3 py-2 rounded-md w-20 mx-9 my-6">
        DONATE
      </button>
    </div>
  </div>
</section>
</div>
  )
}