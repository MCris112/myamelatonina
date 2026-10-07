import React, { useMemo, useState } from "react";

import { vproducts, categories } from "../../public/assets/products";
import { ProductItem } from "../../components";
import { Navbar, Footer, HeadComponent } from "../../components";

const Productos = () => {
  const [category, setCategory] = useState("");

  const productKeys = useMemo(
    () =>
      Object.keys(vproducts).filter(
        (key) => !category || vproducts[key].categories?.includes(category)
      ),
    [category]
  );

  const options = [["", "Todas"], ...Object.keys(categories).map((key) => [key, categories[key].title])];

  return (
    <div>
      <HeadComponent page="Productos" description="Somos una empresa importadora de melatonina americana. Estamos comprometidos a mejorar la salud y esperanza de vida aprovechando los beneficios que ofrece la propia naturaleza." keywords="suplementos para dormir, melatonina, natrol, medicina, no puedo dormir, antibioticos, medicina a delivery, todo el peru" />

      <Navbar />

      <section className="border-b border-line bg-surface/60">
        <div className="container py-14 md:py-20">
          <span className="mb-5 block h-[3px] w-12 bg-accent" />
          <h1 className="heading text-ink md:text-5xl">Productos</h1>
          <p className="lead mt-4">{productKeys.length} productos disponibles</p>
        </div>
      </section>

      <div className="container grid gap-10 py-12 sm:grid-cols-[220px_1fr] md:grid-cols-[240px_1fr] md:gap-14 md:py-16">
        <aside className="sm:sticky sm:top-32 sm:self-start">
          <h2 className="text-sm font-semibold text-ink">Categorias</h2>
          <ul className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-col sm:gap-0.5 sm:overflow-visible sm:px-0">
            {options.map(([key, title]) => {
              const active = category === key;
              return (
                <li key={key || "all"} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setCategory(key)}
                    aria-pressed={active}
                    className={`w-full whitespace-nowrap rounded-sm border px-3 py-2 text-left text-sm capitalize transition-colors sm:border-transparent ${
                      active
                        ? "border-primary bg-primary text-white sm:border-primary"
                        : "border-line text-muted hover:bg-surface hover:text-ink"
                    }`}
                  >
                    {title}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="grid grid-cols-2 content-start gap-4 sm:gap-6 md:grid-cols-3">
          {productKeys.map((key) => (
            <ProductItem product={vproducts[key]} slug={key} key={key} />
          ))}
          {productKeys.length === 0 ? (
            <p className="col-span-full rounded-sm bg-surface p-10 text-center text-muted">
              No se ha encontrado resultados
            </p>
          ) : null}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Productos;
