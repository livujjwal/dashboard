import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function HomeClient({ products }: Props) {
  return (
    <>
      <Navbar />

      <main
        className="
            min-h-screen
            bg-gray-50
            dark:bg-gradient-to-b
            dark:from-slate-950
            dark:via-slate-900
            dark:to-slate-950
            transition-colors duration-300
        "
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          <ProductGrid products={products} />
        </div>
      </main>
    </>
  );
}
