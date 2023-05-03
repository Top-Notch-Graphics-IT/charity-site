import CustomHead from '@/components/CustomHead';
import React from 'react';
import { upcomingEvents, pastEvents } from '@/data/events';

export default function Events() {
  return (
    <div className='mt-20'>
      <CustomHead />
      <section className='flex flex-col mx-auto max-w-900'>
        <div className="flex flex-col">
          <h2 className="text-black-600 mb-4 md:mb-0 md:mr-8 text-center font-bold">
            UPCOMING <span className="text-red-600">EVENTS</span>
          </h2>
          <div className="h-0.5 w-8 mx-auto mb-[20px] bg-red-600"></div>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap justify-between px-5'>
          {upcomingEvents.map((event) => (
            <div key={event.id} className='mb-8 md:mb-0 w-full md:w-1/3'>
              <img src={event.image} alt='Event Image' className='mb-4 mx-0' />
              <h4 className='text-red-600'>{event.date}</h4>
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className='flex flex-col mx-auto max-w-900 pt-8'>
        <div className="flex flex-col">
          <h2 className="text-black-600 mb-4 md:mb-0 md:mr-8 text-center font-bold">
            PAST <span className="text-red-600">EVENTS</span>
          </h2>
          <div className="h-0.5 w-8 mx-auto mb-[20px] bg-red-600"></div>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap justify-between'>
          {pastEvents.map((event) => (
            <div key={event.id} className='mb-8 md:mb-0 w-full md:w-1/3 px-auto'>
              <img src={event.image} alt='Event Image' className='mb-4 mx-4' />
              <h4 className='text-red-600'>{event.date}</h4>
              <h3>{event.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
