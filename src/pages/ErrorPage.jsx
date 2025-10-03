import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
            <div className="text-center max-w-2xl">
                <div className="text-8xl mb-6">💥</div>
                <h1 className="text-5xl font-bold text-red-600 mb-4">
                    Oops! Something Went Wrong
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                    {error?.statusText ||
                        error?.message ||
                        "An unexpected error occurred"}
                </p>
                <Link
                    to="/"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
