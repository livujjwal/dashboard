"use client"

import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Product not found
      </h2>

      <p className="text-gray-600 mb-6">
        We couldn’t load this product.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 text-white rounded-md"
        >
          Retry
        </button>

        <Link
          href="/"
          className="px-6 py-3 border rounded-md"
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}
