export type SchemaBase = {
  "@context": "https://schema.org";
  "@type": string
}  & SchemaType

export type SchemaType = {
 "@type": string
} & ( SchemaWebSite | SchemaItemList | SchemaProduct )

export type SchemaWebSite = {
  "@type": "WebSite",
  name: string;
  url: string;
  description: string;
  mainEntity?: SchemaType
}

export type SchemaItemList = {
  "@type": "ItemList",
  numberOfItems: number;
  itemListElement: SchemaType[]
}

export type SchemaProduct = {
  "@type": "Product",
  name: string;
  image: string;
  sku: string;
  url: string;
  aggregateRating?: SchemaAggregateRating;
  offers: SchemaOffer
}

export type SchemaOffer = {
  "@type": "Offer";
  priceCurrency: string;
  price: number;
  availability: SchemaItemAvailability
}

export type SchemaAggregateRating = {
  "@type": "AggregateRating",
  "ratingValue": number,
  "reviewCount": number
}

export type SchemaItemAvailability = "https://schema.org/InStock" | "https://schema.org/SoldOut"
