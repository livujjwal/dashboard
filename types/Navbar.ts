interface NavbarProps {
  showSearch?: boolean
  search?: string
  onSearchChange?: (value: string) => void
  category?: string
  onCategoryChange?: (value: string) => void
  categories?: string[]
}
