"use client"

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
        Something went wrong
      </h2>

      <p className="text-gray-600 mb-6">
        Failed to load products. Please try again.
      </p>

      <button
        onClick={reset}
        className="px-6 py-3 bg-blue-600 text-white rounded-md"
      >
        Retry
      </button>
    </main>
  )
}
