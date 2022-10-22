import React from 'react';
import Image from "next/image";

import { Navbar, Features, WhyUs, Footer } from '../components';
import { aboutusvars } from '../constants';

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div className="container flex flex-col justify-center items-center py-9 pt-[6rem] sm:flex-row sm:gap-3">
        <div className="w-1/2">
          <Image src={aboutusvars.logo} alt="" className="w-full" />
        </div>

        <div className="w-full text-center sm:order-first sm:text-start">
          <h1 className="text-primary text-4xl font-bold mb-6 sm:text-[3rem] sm:pb-3">{aboutusvars.title}</h1>
          <hr className="block border-t-[.6rem] border-accent w-60 mx-auto mb-9 sm:ml-0 sm:py-3 sm:mb-0"/>

          <p className="w-full sm:max-w-[600px]">{ aboutusvars.text }</p>
        </div>
      </div>

      <div className="container flex flex-col justify-center items-center py-9 pb-[6rem] sm:flex-row sm:gap-3">
        <div className="w-full mb-6">
          <Image src={aboutusvars.mission.img} alt="" className="w-full" />
        </div>

        <div className="w-full text-center sm:text-end">
          <h1 className="text-primary text-4xl font-bold mb-6">{ aboutusvars.mission.title }</h1>
          <hr className="border-t-[.6rem] border-accent w-60 mx-auto mb-9 sm:mr-0 sm:py-3 sm:mb-0"/>

          <p className="w-full sm:max-w-[600px]">{ aboutusvars.mission.text }</p>
        </div>
      </div>

      <Features />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default AboutUs