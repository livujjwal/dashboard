export default function ProductCardSkeleton() {
  return (
    <div className="border rounded-lg p-4 animate-pulse">
      <div className="h-40 bg-gray-200 rounded mb-4" />
      <div className="h-4 bg-gray-200 rounded mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  )
}
