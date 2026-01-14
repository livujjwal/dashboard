"use client"

import { useMemo, useState, useEffect } from "react"
import { Product } from "@/types/product"
import ProductCard from "@/components/ProductCard"
import { getFavorites } from "@/lib/favorites"

interface ProductGridProps {
  products: Product[]
}

const PAGE_SIZE = 12

const capitalize = (v: string) =>
  v.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")

export default function ProductGrid({ products }: ProductGridProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState<"none" | "asc" | "desc">("none")
  const [page, setPage] = useState(1)

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  useEffect(() => {
    setPage(1)
  }, [search, category, sort])

  const categories = useMemo(
    () => Array.from(new Set(products.map(p => p.category))),
    [products]
  )

  /* ---------- Filter + Sort ---------- */
  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory =
        category === "all" || p.category === category

      return matchesSearch && matchesCategory
    })

    if (sort === "asc") {
      result = [...result].sort((a, b) => a.price - b.price)
    }

    if (sort === "desc") {
      result = [...result].sort((a, b) => b.price - a.price)
    }

    return result
  }, [products, search, category, sort])

  /* ---------- Pagination ---------- */
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE)

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return filteredProducts.slice(start, start + PAGE_SIZE)
  }, [filteredProducts, page])

  return (
    <>
      {/* Controls */}
      <div
        className="
          bg-white dark:bg-slate-900
          border border-gray-200 dark:border-slate-700
          rounded-xl
          p-4
          mb-10
          shadow
          transition-colors duration-300
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Search – 2/3 */}
          <div className="md:col-span-2">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              className="
                w-full
                px-3 py-2
                rounded-md
                border
                bg-white dark:bg-gray-800
                border-gray-200 dark:border-gray-700
                text-gray-900 dark:text-gray-100
                placeholder-gray-400 dark:placeholder-gray-500
                transition-colors duration-300
              "
            />
          </div>

          {/* Category + Sort – 1/3 */}
          <div className="flex gap-2">
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="
                w-full
                px-3 py-2
                rounded-md
                border
                bg-white dark:bg-gray-800
                border-gray-200 dark:border-gray-700
                text-gray-900 dark:text-gray-100
                transition-colors duration-300
              "
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {capitalize(cat)}
                </option>
              ))}
            </select>

            <select
              value={sort}
              onChange={e =>
                setSort(e.target.value as "none" | "asc" | "desc")
              }
              className="
                w-full
                px-3 py-2
                rounded-md
                border
                bg-white dark:bg-gray-800
                border-gray-200 dark:border-gray-700
                text-gray-900 dark:text-gray-100
                transition-colors duration-300
              "
            >
              <option value="none">Sort</option>
              <option value="asc">Price ↑</option>
              <option value="desc">Price ↓</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No products found.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12 flex-wrap">
              <button
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
                className="
                  px-4 py-2 rounded-md
                  bg-white dark:bg-slate-800
                  text-gray-900 dark:text-slate-200
                  border border-gray-200 dark:border-slate-700
                  hover:bg-gray-100 dark:hover:bg-slate-700
                  transition-colors duration-300
                  disabled:opacity-40
                "
              >
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                    page === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-200 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
                className="
                  px-4 py-2 rounded-md
                  bg-white dark:bg-slate-800
                  text-gray-900 dark:text-slate-200
                  border border-gray-200 dark:border-slate-700
                  hover:bg-gray-100 dark:hover:bg-slate-700
                  transition-colors duration-300
                  disabled:opacity-40
                "
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}
