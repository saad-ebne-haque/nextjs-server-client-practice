
import Image from "next/image";
import { notFound } from "next/navigation";








const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `http://localhost:3001/products/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        notFound();
    }

    const product = await res.json();

    return (
        <main className="mx-auto max-w-5xl px-5 py-10">
            <div className="grid grid-cols-1 gap-8 rounded-xl bg-white p-6 shadow-lg md:grid-cols-2">
                {/* Product Image */}
                <div>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={400}
                        className="h-80 w-full rounded-xl object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase text-blue-600">
                        {product.category}
                    </p>

                    <h1 className="text-3xl font-bold text-gray-800">
                        {product.title}
                    </h1>

                    <p className="text-gray-500">
                        Brand: {product.brand}
                    </p>

                    <p className="text-gray-600">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-4">
                        <p className="text-3xl font-bold text-green-600">
                            ৳{product.price}
                        </p>

                        <p className="text-yellow-600">
                            ⭐ {product.rating}
                        </p>
                    </div>

                    <p className="font-medium text-gray-700">
                        Available Stock: {product.stock}
                    </p>

                    <p className="text-sm text-gray-500">
                        Product ID: {product.id}
                    </p>

                    <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ProductDetailsPage;