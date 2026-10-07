import React, { useState } from "react";
import { HiOutlinePhone, HiOutlineMail, HiOutlineIdentification, HiArrowRight } from "react-icons/hi";

import { Navbar, Footer, HeadComponent } from "../components";
import { sitevars } from "../constants";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name} – ${form.email}`);
    window.location.href = `mailto:${sitevars.email}?subject=${subject}&body=${body}`;
  };

  const details = [
    { icon: HiOutlinePhone, title: "Télefono", value: sitevars.phone, href: `https://wa.me/${sitevars.phone_url}` },
    { icon: HiOutlineMail, title: "Nuestro Correo", value: sitevars.email, href: `mailto:${sitevars.email}` },
    { icon: HiOutlineIdentification, title: "Ruc", value: sitevars.ruc.number, extra: sitevars.ruc.name },
  ];

  return (
    <div>
      <HeadComponent page="Contáctanos" description="Somos una empresa importadora de melatonina americana. Estamos comprometidos a mejorar la salud y esperanza de vida aprovechando los beneficios que ofrece la propia naturaleza." keywords="suplementos para dormir, melatonina, natrol, medicina, no puedo dormir, antibioticos, medicina a delivery, todo el peru" />

      <Navbar />

      <section className="section">
        <div className="container grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <span className="mb-5 block h-[3px] w-12 bg-accent" />
            <h1 className="heading text-ink md:text-5xl">Envianos un mensaje</h1>
            <p className="lead mt-5 max-w-md">
              Somos una empresa importadora de melatonina americana. Te respondemos a la brevedad.
            </p>

            <dl className="mt-10 border-t border-line">
              {details.map(({ icon: Icon, title, value, href, extra }) => (
                <div key={title} className="flex items-start gap-4 border-b border-line py-5">
                  <Icon size={22} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <dt className="text-sm text-muted">{title}</dt>
                    <dd className="mt-0.5 font-semibold text-ink">
                      {href ? (
                        <a href={href} className="transition-colors hover:text-primary">{value}</a>
                      ) : (
                        value
                      )}
                    </dd>
                    {extra ? <dd className="text-sm text-muted">{extra}</dd> : null}
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-sm border border-line bg-surface/60 p-6 sm:p-10"
          >
            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              Nombre
              <input name="name" type="text" required value={form.name} onChange={update} placeholder="Su Nombre" className="field font-normal" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              Correo
              <input name="email" type="email" required value={form.email} onChange={update} placeholder="Su correo" className="field font-normal" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              Mensaje
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={update}
                placeholder="Escriba su Mensaje"
                className="field h-auto py-3 font-normal"
              ></textarea>
            </label>
            <button type="submit" className="btn-dark mt-2 w-full sm:w-auto sm:self-start">
              Enviar Mensaje <HiArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
