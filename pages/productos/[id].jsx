import { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { HiArrowLeft, HiArrowRight, HiCheck, HiChevronDown } from "react-icons/hi";
import { Navbar, Footer, Button, HeadComponent, ProductItem } from "../../components";
import { formatContent, toParagraphs } from "../../components/productContent";
import { vproducts, categories } from "../../public/assets/products";
import { sitevars } from "../../constants";

export async function getStaticPaths() {
    const products = Object.keys(vproducts)

    var paths = [];

    for (var i = 0; i < products.length; i++) {
        var item = {
            params: { id: products[i] }
        }

        paths.push(item)
    }

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const { params }  = context;

  const id = params.id

  const product = vproducts[id];

  // Up to 4 other products sharing a category, closest match first
  const related = Object.keys(vproducts)
    .filter((key) => key !== id)
    .map((key) => [key, vproducts[key].categories.filter((cat) => product.categories.includes(cat)).length])
    .filter(([, shared]) => shared > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([key]) => key);

  return {
    // Passed to the page component as props
    props: { product, related },
  };
}

const PREVIEW_PARAGRAPHS = 2;

const Productos = ({product, related}) => {
  const [expanded, setExpanded] = useState(false);

  const content = formatContent(product.content);
  const paragraphs = toParagraphs(product.description);
  const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, PREVIEW_PARAGRAPHS);
  const tags = product.categories.filter((key) => categories[key]).map((key) => categories[key].title);

  return (
    <>
      <HeadComponent page={product.title} description={[].concat(product.desc).join(" ")} keywords="suplementos para dormir, melatonina, natrol, medicina, no puedo dormir, antibioticos, medicina a delivery, todo el peru" />

      <Navbar />

      <section className="pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="container">
          <nav aria-label="Ruta" className="mb-8 flex min-w-0 items-center gap-2 text-sm text-muted md:mb-12">
            <Link href="/productos" className="flex shrink-0 items-center gap-1 transition-colors hover:text-primary">
              <HiArrowLeft size={16} /> Productos
            </Link>
            <span>/</span>
            <span className="truncate text-ink">{product.title}</span>
          </nav>

          <div className="grid items-start gap-10 md:grid-cols-[1.05fr_1fr] md:gap-16">
            <div className="rounded-sm border border-line bg-surface p-8 sm:p-14 md:sticky md:top-32">
              <div className="relative mx-auto aspect-square w-full max-w-[460px]">
                <Image src={product.image} alt={product.title} layout="fill" objectFit="contain" priority />
              </div>
            </div>

            <div>
              {tags.length ? (
                <p className="text-sm font-medium capitalize text-primary">{tags.join(" · ")}</p>
              ) : null}
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
                {product.title}
              </h1>
              {content ? <p className="mt-3 text-lg text-muted">Contiene {content}</p> : null}

              <div className="mt-8 border-y border-line py-6">
                {product.price ? (
                  <p className="text-3xl font-bold text-ink">
                    S/ {product.price}
                  </p>
                ) : (
                  <p className="text-xl font-semibold text-ink">Consultar precio</p>
                )}
                <p className="mt-1 text-sm text-muted">Envíos a todo el Perú · Pago contra entrega</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button label="Pedir ahora" icon="whatsapp" type="dark" link={`https://wa.me/${sitevars.phone_url}`} className="flex-1 sm:flex-none" />
                  <Button label="Ver más productos" type="line" link="/productos" className="flex-1 sm:flex-none" />
                </div>
              </div>

              {product.benefits?.length ? (
                <div className="mt-10">
                  <h2 className="font-serif text-2xl font-semibold text-ink">Beneficios</h2>
                  <ul className="mt-5 flex flex-col gap-3">
                    {product.benefits.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 leading-relaxed text-ink/80">
                        <HiCheck size={20} className="mt-0.5 shrink-0 text-accent-dark" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {paragraphs.length ? (
                <div className="mt-10">
                  <h2 className="font-serif text-2xl font-semibold text-ink">Descripción</h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-muted">
                    {visibleParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  {paragraphs.length > PREVIEW_PARAGRAPHS ? (
                    <button
                      type="button"
                      onClick={() => setExpanded(!expanded)}
                      aria-expanded={expanded}
                      className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      {expanded ? "Leer menos" : "Leer más"}
                      <HiChevronDown size={18} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                    </button>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section border-t border-line bg-surface/60">
          <div className="container">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
              <div>
                <span className="mb-5 block h-[3px] w-12 bg-accent" />
                <h2 className="heading text-ink">También te puede interesar</h2>
              </div>
              <Link href="/productos" className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark">
                Todos los productos <HiArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {related.map((key) => (
                <ProductItem product={vproducts[key]} slug={key} key={key} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </>
  );
};

export default Productos;
