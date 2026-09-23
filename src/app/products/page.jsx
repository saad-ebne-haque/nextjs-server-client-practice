import ProductCard from "@/components/ProductCard";


export const metadata = {
  title: "Products Page",
  description: "This is Products Page",
};

const ProductsPage = async () => {
  const res = await fetch("http://localhost:3001/products", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold">
        All Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;