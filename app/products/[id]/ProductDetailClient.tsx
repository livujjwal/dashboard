"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import SuggestionCard from "@/components/SuggestionCard"
import { Product } from "@/types/product"
import { getFavorites, toggleFavorite } from "@/lib/favorites"
import { capitalizeWords } from "@/lib/format"

interface Props {
  product: Product
  suggestedProducts: Product[]
}

export default function ProductDetailClient({
  product,
  suggestedProducts,
}: Props) {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  const isFav = favorites.includes(product.id)

  const handleFavorite = () => {
    setFavorites(toggleFavorite(product.id))
  }

  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-gray-50 dark:bg-gradient-to-b
          dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
          transition-colors duration-300
        "
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Image + Heart */}
            <div
              className="
                relative
                bg-white dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-xl
                p-6
                transition-colors duration-300
              "
            >
              <button
                onClick={handleFavorite}
                aria-label="Toggle favorite"
                tabIndex={0}
                className="
                  absolute top-4 right-4 z-10
                  w-10 h-10 rounded-full
                  bg-white dark:bg-slate-800
                  border border-gray-200 dark:border-slate-700
                  shadow
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-105
                  active:scale-90
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-red-400
                "
              >
                <span
                  className={`transition-transform duration-200 ${
                    isFav ? "scale-110" : "scale-100"
                  }`}
                >
                  {isFav ? (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-red-500">
                      <path d="M12 21.35l-1.45-1.32C5.4 
                        15.36 2 12.28 2 8.5 
                        2 5.42 4.42 3 7.5 3
                        c1.74 0 3.41.81 4.5 2.09
                        C13.09 3.81 14.76 3 16.5 3
                        19.58 3 22 5.42 22 8.5
                        c0 3.78-3.4 6.86-8.55
                        11.54L12 21.35z" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 stroke-gray-700 dark:stroke-slate-300 fill-none"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61c-1.54-1.34-3.77-1.34-5.31 
                        0L12 7.09l-3.53-2.48c-1.54-1.34-3.77-1.34-5.31 
                        0-1.54 1.34-1.54 3.52 0 4.86L12 
                        21.35l8.84-11.88c1.54-1.34 
                        1.54-3.52 0-4.86z" />
                    </svg>
                  )}
                </span>
              </button>

              {/* Image */}
              <div
                className="
                  relative
                  h-[420px] w-full
                  rounded-lg
                  bg-gray-100 dark:bg-slate-800
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
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-slate-100 transition-colors">
                {product.title}
              </h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 transition-colors">
                {capitalizeWords(product.category)}
              </p>

              <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                {product.description}
              </p>

              <div className="mt-8 flex items-center gap-6">
                <span className="text-3xl font-semibold text-gray-900 dark:text-slate-100 transition-colors">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          {suggestedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-slate-100 transition-colors">
                More in {capitalizeWords(product.category)}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {suggestedProducts.map(item => (
                  <SuggestionCard key={item.id} product={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  )
}
