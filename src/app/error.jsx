
"use client";

import { useEffect } from "react";

const ErrorPage = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="my-10 flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
            <h1 className="text-5xl font-bold text-red-600">
                Tui beta error khaisos 
            </h1>

            {/* Dynamic Error Message */}
            <p className="mt-5 text-xl font-semibold text-gray-700">
                {error.message}
            </p>

            {/* Try Again Button */}
            <button
                onClick={() => reset()}
                className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
                Try Again
            </button>
        </div>
    );
};

export default ErrorPage;