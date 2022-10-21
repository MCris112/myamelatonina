import React from "react";
import Image from 'next/image'

import Button from './Button';

const ProductItem = (props) => {
  const product = props.product;
  console.log(product);

  return (
    <div className="">
<a className="text-center w-full h-full grid">
      <Image src={product.image ?? ''} alt="" className="aspect-image w-full h-[300px] object-contain object-center" width="300px" height="300px"/>
      <p className="text-primary font-bold text-2xl">{product.title}</p>
      <span className="text-primary">Contiene {product.content.text + product.content.type} {product.content.size + product.content.size_type}</span>
      <p className="text-accent text-2xl font-bold mb-3">s/.{product.price}</p>

      <Button label="Más informacion" type="primary" link={`/productos/${props.slug ?? ''}`} />
    </a>
    </div>
    
  );
};

export default ProductItem;
