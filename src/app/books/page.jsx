import BookCard from "@/components/BookCard";
import Loading from "@/components/Loading";
import { error } from "next/dist/build/output/log";
import { Suspense } from 'react';

const loadBooks = async () => {
    try {
        const res = await fetch('http://localhost:3001/books/', {
            next: { revalidate: 30 }
        });
        if (!res.ok) {
            throw new Error('Faild to fetch Books');
        }
        return res.json();
    } catch (err) {
        console.log(err);
        throw err;
    }

}

export const metadata = {
    title: 'Books Page',
    description: 'This is Books Page',
}
const BooksPage = async () => {

    const books = await loadBooks();



    return (
        <>
            <h1 className="text-center my-10 font-bold text-5xl">Books Page</h1>

            <Suspense fallback={<Loading></Loading>}>
                <div className="container mx-auto grid grid-cols-3 gap-4">
                    {
                        books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                    }
                </div>
            </Suspense>
        </>
    );
};

export default BooksPage;