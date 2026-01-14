import { fetchProducts } from "@/lib/product";
import HomeClient from "./HomeClient";

export default async function HomePage() {
  const products = await fetchProducts();
  return <HomeClient products={products} />;
}
