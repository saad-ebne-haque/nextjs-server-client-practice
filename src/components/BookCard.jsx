import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";




const BookCard = ({ book }) => {

    const { id, title, author, price, category, rating, stock, image } = book;
    // console.log(book );

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Book Image */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                />

                {/* Category Badge */}
                <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    {category}
                </span>

                {/* Rating Badge */}
                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-800 shadow">
                    ⭐ {rating}
                </span>
            </div>

            {/* Book Details */}
            <div className="space-y-3 p-5">
                <div>
                    <h2 className="line-clamp-1 text-xl font-bold text-gray-800 transition group-hover:text-blue-600">
                        {title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        By {author}
                    </p>
                </div>

                {/* Price and Stock */}
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-green-600">
                        ${price}
                    </p>

                    <p className="text-sm text-gray-500">
                        {stock} available
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-2">

                    <div className="flex-1">

                        <Link href={`books/${id}`}>
                            <button
                                className="w-full rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                                View Details
                            </button>
                        </Link>
                    </div>

                    <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};



export default BookCard;