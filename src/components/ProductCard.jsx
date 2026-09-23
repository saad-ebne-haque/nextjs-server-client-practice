
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
    const {
        id,
        title,
        price,
        category,
        brand,
        rating,
        stock,
        description,
        image,
    } = product;

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-md transition hover:shadow-xl">
            {/* Product Image */}
            <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="h-48 w-full rounded-lg object-cover"
            />

            {/* Product Information */}
            <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-gray-800">
                    {title}
                </h2>

                <p className="text-sm text-gray-500">
                    Brand: {brand}
                </p>

                <p className="text-sm text-gray-500">
                    Category: {category}
                </p>

                <p className="text-gray-600">
                    {description}
                </p>

                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-green-600">
                        ৳{price}
                    </p>

                    <p className="text-sm text-yellow-600">
                        ⭐ {rating}
                    </p>
                </div>

                <p className="text-sm text-gray-500">
                    Stock: {stock}
                </p>

                {/* Details Button */}
                <Link
                    href={`/products/${id}`}
                    className="mt-3 block rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;