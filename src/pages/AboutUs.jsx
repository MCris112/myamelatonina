import React from 'react';

import { Features, WhyUs, Footer } from '../components';
import { aboutusvars } from '../constants';

const AboutUs = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center items-center py-9 pt-[6rem]">
        <div className="w-1/2">
          <img src={aboutusvars.logo} alt="" className="w-full" />
        </div>

        <div className="w-full text-center">
          <h1 className="text-primary text-4xl font-bold mb-6">{aboutusvars.title}</h1>
          <hr className="border-t-[.6rem] border-accent w-60 mx-auto mb-9"/>

          <p>{ aboutusvars.text }</p>
        </div>
      </div>

      <div className="container flex flex-col justify-center items-center py-9 pb-[6rem]">
        <div className="w-full mb-6">
          <img src={aboutusvars.mission.img} alt="" className="w-full" />
        </div>

        <div className="w-full text-center">
          <h1 className="text-primary text-4xl font-bold mb-6">{ aboutusvars.mission.title }</h1>
          <hr className="border-t-[.6rem] border-accent w-60 mx-auto mb-9"/>

          <p>{ aboutusvars.mission.text }</p>
        </div>
      </div>

      <Features />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default AboutUs