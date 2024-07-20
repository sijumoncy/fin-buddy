'use client';
import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col w-full ">
      <div className="flex flex-col overflow-hidden w-full border-2">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                Get Rid Of Your Finance Headaches <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary">
                  Your Personal Finance Partner
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={'/dashboard.png'} // TODO: use webp later
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

export default Hero;
