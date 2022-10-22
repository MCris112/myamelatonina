import Image from "next/image";
import { useRouter } from "next/router";
import { Navbar, Footer, Button } from "../../components";
import { vproducts } from "../../public/assets/products";

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

  return {
    // Passed to the page component as props
    props: { product },
  };
}

const Productos = ({product}) => {
  
  return (
    <>
      <Navbar />

      <div className="container py-9 flex flex-col md:flex-row md:justify-start">
        <div className="w-full flex justify-center max-h-[500px]">
          <Image
            src={product.image}
            className="block w-full mx-auto object-contain"
          />
        </div>

        <div className="w-full order-first text-center md:order-last md:text-start">
          <h1 className="text-primary font-bold text-5xl mb-3">
            {product.title}
          </h1>
          <hr className="border-t-[6px] border-accent w-1/3 mx-auto mb-6 md:ml-0" />

          <span className="block text-primary mb-3 text-2xl">
            Contiene {product.content.text + product.content.type}{" "}
            {product.content.size + " " + product.content.size_type}
          </span>
          <p className="mb-6">{product.description}</p>
          <Button label="Pedir ahora" icon="whatsapp" />

          <h2 className="mt-6 text-primary font-bold text-5xl mb-3">
            Beneficios
          </h2>
          <ul className="flex flex-col gap-3">
            {product.benefits.map((feature, index) => (
              <li
                key={index}
                className="flex items-center justify-center md:justify-start"
              >
                <box-icon name="chevron-right" type="solid"></box-icon>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Productos;
