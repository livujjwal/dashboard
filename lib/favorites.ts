const STORAGE_KEY = "favorite_products"

export function getFavorites(): number[] {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
}

export function toggleFavorite(id: number): number[] {
  const favorites = getFavorites()

  const updated = favorites.includes(id)
    ? favorites.filter(f => f !== id)
    : [...favorites, id]

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  return updated
}

export function isFavorite(id: number): boolean {
  return getFavorites().includes(id)
}

export function clearFavorites(): number[] {
  if (typeof window === "undefined") return []
  localStorage.removeItem(STORAGE_KEY)
  return []
}

