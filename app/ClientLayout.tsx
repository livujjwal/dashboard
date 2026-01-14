"use client"

import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black transition-colors">
      {children}
    </main>
  )
}

