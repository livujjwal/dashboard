"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Left */}
        <Link
          href="/"
          className={`font-semibold transition-colors
            ${pathname === "/"
              ? "text-blue-600"
              : "text-gray-900 dark:text-gray-100"}
          `}
        >
          Shop
        </Link>

        {/* Right */}
        <div className="flex items-center gap-4">

          <Link
            href="/favorites"
            className={`transition-colors
              ${pathname === "/favorites"
                ? "text-blue-600"
                : "text-gray-900 dark:text-gray-100"}
            `}
          >
            ❤️ Favorites
          </Link>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="
              w-9 h-9 rounded-full
              flex items-center justify-center
              border border-gray-300 dark:border-gray-600
              text-gray-900 dark:text-gray-100
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-colors
            "
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  )
}
