"use client"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="w-full md:w-64">
      <label
        htmlFor="search"
        className="sr-only"
      >
        Search products
      </label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
        className="
          w-full
          rounded-md
          border
          border-gray-300
          px-3
          py-2
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  )
}
