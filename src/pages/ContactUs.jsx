import React from 'react'
import { Features, WhyUs, Footer } from '../components';

const ContactUs = () => {
  return (
    <div>
      <div className="container py-9 pt-[3rem]">
        <div className="text-center">
          <h1 className="text-primary text-4xl font-bold mb-6">Envianos un mensaje</h1>
          <hr className="border-t-[.6rem] border-accent w-60 mx-auto mb-9"/>
        </div>


        <form action="">
          <input type="text" /><input type="text" /><input type="text" />
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs