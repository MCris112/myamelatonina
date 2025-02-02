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

  name: string;
  price: number;
  image: string;
}
