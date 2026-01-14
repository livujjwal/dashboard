"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types/product"
import { toggleFavorite } from "@/lib/favorites"

interface ProductCardProps {
  product: Product
  favorites: number[]
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>
}

export default function ProductCard({
  product,
  favorites,
  setFavorites,
}: ProductCardProps) {
  const isFav = favorites.includes(product.id)

  const handleFavorite = () => {
    setFavorites(toggleFavorite(product.id))
  }

  return (
    <div
      className="
        relative
        border border-gray-200 dark:border-slate-700
        rounded-xl
        bg-white dark:bg-slate-900
        p-4
        flex flex-col
        hover:shadow-xl
        hover:-translate-y-0.5
        transition-all duration-300
      "
    >
      {/* Heart button (unchanged if already correct) */}

      <Link href={`/products/${product.id}`} className="block flex-1">
        {/* Image container */}
        <div
          className="
            relative
            h-48 w-full mb-4
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
        <h3 className="
          text-sm font-medium
          text-gray-900 dark:text-slate-100
          line-clamp-2 min-h-[2.5rem]
          transition-colors duration-300
        ">
          {product.title}
        </h3>
      </Link>

      {/* Price */}
      <p className="
        mt-auto text-sm font-semibold
        text-gray-900 dark:text-slate-100
        transition-colors duration-300
      ">
        ${product.price}
      </p>
    </div>
  )
}
