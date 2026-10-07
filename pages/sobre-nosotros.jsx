import React from 'react';
import Image from "next/legacy/image";

import { Navbar, Features, WhyUs, Footer, HeadComponent } from '../components';
import { aboutusvars, sitevars } from '../constants';

const AboutUs = () => {
  return (
    <div>
      <HeadComponent page="Sobre Nosotros" description="Somos una empresa importadora de melatonina americana. Estamos comprometidos a mejorar la salud y esperanza de vida aprovechando los beneficios que ofrece la propia naturaleza." keywords="suplementos para dormir, melatonina, natrol, medicina, no puedo dormir, antibioticos, medicina a delivery, todo el peru" />

      <Navbar />

      <section className="section">
        <div className="container grid items-center gap-12 sm:grid-cols-2 md:gap-20">
          <div className="text-center sm:text-start">
            <span className="mx-auto mb-5 block h-[3px] w-12 bg-accent sm:mx-0" />
            <h1 className="heading text-ink md:text-5xl">{aboutusvars.title}</h1>
            <p className="lead mx-auto mt-6 max-w-xl sm:mx-0">{aboutusvars.text}</p>
          </div>

          <div className="flex justify-center rounded-sm bg-ink p-12 md:p-16">
            <div className="w-full max-w-[240px]">
              <Image src={aboutusvars.logo} alt={sitevars.site_name} />
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-surface/60">
        <div className="container grid items-center gap-12 sm:grid-cols-2 md:gap-20">
          <div className="overflow-hidden rounded-sm">
            <Image src={aboutusvars.mission.img} alt={aboutusvars.mission.title} layout="responsive" className="object-cover" />
          </div>

          <div className="text-center sm:text-start">
            <span className="mx-auto mb-5 block h-[3px] w-12 bg-accent sm:mx-0" />
            <h2 className="heading text-ink">{aboutusvars.mission.title}</h2>
            <p className="lead mx-auto mt-6 max-w-xl sm:mx-0">{aboutusvars.mission.text}</p>
          </div>
        </div>
      </section>

      <Features />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default AboutUs
