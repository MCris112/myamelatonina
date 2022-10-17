import React from "react";
import { Link } from "react-router-dom";

import Button from './Button';

const ProductItem = (props) => {
    const product = props.product;

  return (
    <Link className="text-center w-full h-full grid">
      <img src={product.image} alt="" className="aspect-image w-[300px] max-w-full h-[300px] object-contain"/>
      <p className="text-primary font-bold text-2xl">{product.title}</p>
      <span className="text-primary">Contiene {product.content.text + product.content.type} {product.content.size + product.content.size_type}</span>
      <p className="text-accent text-2xl font-bold mb-3">s/.{product.price}</p>

      <Button label="Más informacion" type="primary" link={`/productos/${props.slug ?? ''}`} />
    </Link>
  );
};

export default ProductItem;