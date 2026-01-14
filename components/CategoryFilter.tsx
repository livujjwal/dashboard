"use client"

import { capitalizeWords } from "@/lib/format"

interface CategoryFilterProps {
  categories: string[]
  value: string
  onChange: (value: string) => void
}

export default function CategoryFilter({
  categories,
  value,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="w-full md:w-48">
      <label
        htmlFor="category"
        className="sr-only"
      >
        Filter by category
      </label>

      <select
        id="category"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Filter by category"
        className="
          w-full
          rounded-md
          border
          border-gray-300
          px-3
          py-2
          text-sm
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      >
        <option value="all">All Categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {capitalizeWords(cat)}
            </option>
        ))}
      </select>
    </div>
  )
}
