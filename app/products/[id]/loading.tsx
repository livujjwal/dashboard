export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="h-[420px] bg-gray-200 rounded animate-pulse" />

        <div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6 animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  )
}
