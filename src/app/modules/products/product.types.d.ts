export type Product = {
  id: number;
  slug: string;
  name: string;
  // price: number;
  introduction: string;
  description: string;

  image: string;

  variations: ProductVariation[]
  // image: string;
}

export type ProductVariation = {
  mg: number;
  pills: number;

  price: number;
  image: string;
}

export type ProductItem = {
  id: string;
  slug: string;
  name: string;
  introduction: string;
  image: string;

  mg: number;
  pills: number;
  price: number;
}
