// import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";


const loadBook = async (id) => {
    const res = await fetch(`http://localhost:3001/books/${id}`);
    return res.json();
}

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const book = await loadBook(id);
    return {
        title: `Book | ${book.title}`,
        description: book.description,
    }

}

export async function generateStaticParams() {
    const res = await fetch('http://localhost:3001/books');
    const books = await res.json();

    return books.slice(0, 3).map(book => ({
        id: book.id,
    }))
}


const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const book = await loadBook(id);
    const { title, description, image, category, author, rating, stock, price } = book;

    return (
        <>

            <main className="min-h-screen bg-gray-50 px-5 py-10">
                <div className="mx-auto max-w-6xl">
                    {/* Back Button */}
                    <Link
                        href="/books"
                        className="mb-8 inline-block text-sm font-semibold text-blue-600 hover:underline"
                    >
                        ← Back to Books
                    </Link>

                    {/* Book Details Card */}
                    <div className="grid gap-10 overflow-hidden rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
                        {/* Book Image */}
                        <div className="relative h-112.5 overflow-hidden rounded-xl bg-gray-100">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Book Information */}
                        <div className="flex flex-col justify-center">
                            {/* Category */}
                            <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
                                {category}
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl font-bold leading-tight text-gray-900">
                                {title}
                            </h1>

                            {/* Author */}
                            <p className="mt-3 text-lg text-gray-500">
                                By {author}
                            </p>

                            {/* Rating */}
                            <div className="mt-5 flex items-center gap-3">
                                <span className="text-xl font-semibold text-yellow-500">
                                    ⭐ {rating}
                                </span>

                                <span className="text-sm text-gray-500">
                                    1,245 Reviews
                                </span>
                            </div>

                            {/* Price */}
                            <p className="mt-6 text-4xl font-bold text-green-600">
                                ${price}
                            </p>

                            {/* Stock */}
                            <p className="mt-3 text-sm font-medium text-green-600">
                                ✓ In Stock — {stock} available
                            </p>

                            {/* Description */}
                            <p className="mt-6 leading-7 text-gray-600">
                                {description}
                            </p>

                            {/* Book Information */}
                            <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-5">
                                <div className="flex justify-between gap-4">
                                    <span className="font-medium text-gray-600">
                                        Category
                                    </span>

                                    <span className="text-gray-900">
                                        {category}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <span className="font-medium text-gray-600">
                                        Author
                                    </span>

                                    <span className="text-gray-900">
                                        {author}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <span className="font-medium text-gray-600">
                                        Language
                                    </span>

                                    <span className="text-gray-900">
                                        English
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <span className="font-medium text-gray-600">
                                        Format
                                    </span>

                                    <span className="text-gray-900">
                                        Paperback
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <button className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                                    Add to Cart
                                </button>

                                <button className="flex-1 rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default BookDetailsPage;
























