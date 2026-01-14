"use client"

import { useEffect, useState } from "react"
import { Product } from "@/types/product"
import { getFavorites, clearFavorites } from "@/lib/favorites"
import ProductCard from "@/components/ProductCard"
import ProductCardSkeleton from "@/components/ProductCardSkeleton"
import Navbar from "@/components/Navbar"

interface Props {
  products: Product[]
}

export default function FavoritesClient({ products }: Props) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setFavorites(getFavorites())
    setLoading(false)
  }, [])

  const favProducts = products.filter(p => favorites.includes(p.id))

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
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-slate-100">
            Your Favorites
          </h1>

          {/* Clear all */}
          {!loading && favorites.length > 0 && (
            <button
              onClick={() => setFavorites(clearFavorites())}
              className="
                mb-6 px-4 py-2 rounded-md
                border border-red-500
                text-red-600 dark:text-red-400
                hover:bg-red-50 dark:hover:bg-red-950
                transition-colors duration-300
              "
            >
              Clear all favorites
            </button>
          )}

          {/* Content */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : favProducts.length === 0 ? (
            <div className="text-center mt-20">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                No favorites yet
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Tap the heart icon to save products
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
