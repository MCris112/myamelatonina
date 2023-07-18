import Image from "next/image";
import { useRouter } from 'next/router'

import Button from "./Button";

const ProductItem = ({product, slug}) => {
  let router = useRouter();
  
  const handleClick = (e, href) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <div className="flex flex-col">
      <a className="text-center w-full h-full grid" href={`/productos/${slug ?? ""}`} onClick={(e) => {handleClick(e, `/productos/${slug ?? ""}`)}} >
        <Image
          src={product.image ?? ""}
          alt=""
          className="aspect-image w-full h-[300px] object-contain object-center"
          width="300px"
          height="300px"
        />
        <p className="text-primary font-bold text-2xl">{product.title}</p>
        <span className="text-primary">
          {`Contiene ${product.content.text + product.content.type} ${product.content.size + " " + product.content.size_type}`}
        </span>
        <p className="text-accent text-2xl font-bold mb-3">
        {product.price ? `s/. ${product.price}` : ''}
        </p>
      </a>

      <Button
          label="Más informacion"
          type="primary"
          link={`/productos/${slug ?? ""}`}
        />
    </div>
  );
};

export default ProductItem;
