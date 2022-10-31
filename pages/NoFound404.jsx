import { Navbar, Footer, } from "../components";

const NoFound404 = () => {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <p className="text-center">No se ha encontrado resultados</p>
      </div>
      <Footer />
    </>
  )
}

export default NoFound404