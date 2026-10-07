import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

import { Navbar, Footer, HeadComponent } from "../components";

const NoFound404 = () => {
  return (
    <>
      <HeadComponent page="Página no encontrada" description="" keywords="" />
      <Navbar />

      <section className="section">
        <div className="container flex min-h-[40vh] flex-col items-center justify-center text-center">
          <p className="font-serif text-7xl font-semibold text-primary md:text-8xl">404</p>
          <h1 className="mt-4 text-xl font-semibold text-ink">No se ha encontrado resultados</h1>
          <Link href="/" className="btn-dark mt-8">
            <HiArrowLeft size={18} /> Volver al inicio
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default NoFound404
