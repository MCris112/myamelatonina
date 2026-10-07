import Image from "next/legacy/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

import { formatContent } from "./productContent";

const ProductItem = ({ product, slug }) => {
  const href = `/productos/${slug ?? ""}`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-20px_rgba(30,26,77,0.35)]"
    >
      <div className="relative aspect-square bg-surface p-6 sm:p-8">
        <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
          {product.image ? (
            <Image src={product.image} alt={product.title} layout="fill" objectFit="contain" />
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="text-base font-semibold leading-snug text-ink sm:text-lg">{product.title}</h3>
        <p className="mt-1.5 text-xs text-muted sm:text-sm">
          {formatContent(product.content)}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <p className="text-lg font-bold text-primary sm:text-xl">
            {product.price ? `S/ ${product.price}` : <span className="text-sm font-semibold text-muted">Consultar precio</span>}
          </p>
          <span className="flex items-center gap-1 text-xs font-semibold text-muted transition-colors group-hover:text-primary sm:text-sm">
            <span className="hidden ss:inline">Más informacion</span>
            <HiArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
