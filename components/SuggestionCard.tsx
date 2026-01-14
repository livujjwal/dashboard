import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types/product"

interface SuggestionCardProps {
  product: Product
}

export default function SuggestionCard({ product }: SuggestionCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="
        block
        border border-gray-200 dark:border-slate-700
        rounded-xl
        p-4
        bg-white dark:bg-slate-900
        hover:shadow-lg
        hover:-translate-y-0.5
        transition-all duration-300
      "
    >
      {/* Image */}
      <div
        className="
          relative
          h-40 w-full mb-3
          rounded-lg
          bg-gray-100 dark:bg-slate-800
          flex items-center justify-center
          transition-colors duration-300
        "
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Title */}
      <p
        className="
          text-sm font-medium
          text-gray-900 dark:text-slate-100
          line-clamp-2
          transition-colors duration-300
        "
      >
        {product.title}
      </p>

      {/* Price */}
      <p
        className="
          mt-1 text-sm font-semibold
          text-gray-700 dark:text-gray-300
          transition-colors duration-300
        "
      >
        ${product.price}
      </p>
    </Link>
  )
}
