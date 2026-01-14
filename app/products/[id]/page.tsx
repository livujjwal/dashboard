import { fetchProducts, fetchProductById } from "@/lib/product"
import ProductDetailClient from "./ProductDetailClient"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = await fetchProductById(id)
  const allProducts = await fetchProducts()

  const suggestedProducts = allProducts
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 4)

  return (
    <ProductDetailClient
      product={product}
      suggestedProducts={suggestedProducts}
    />
  )
}
