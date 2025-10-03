import LoadingSpinner from "./LoadingSpinner";

function LoadingPage({ message = "Loading..." }) {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <div className="text-7xl mb-6">🏎️</div>
            <LoadingSpinner size="large" />
            <p className="text-2xl mt-6 text-gray-400">{message}</p>
        </div>
    );
}

export default LoadingPage;
