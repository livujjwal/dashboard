import { fetchProducts } from "@/lib/product";
import FavoritesClient from "./FavoriteClient";

export default async function FavoritesPage() {
  const products = await fetchProducts();
  return <FavoritesClient products={products} />;
}
