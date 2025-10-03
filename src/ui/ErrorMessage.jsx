function ErrorMessage({ message, onRetry }) {
    return (
        <div className="bg-red-900/20 border border-red-600 rounded-lg p-6 text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-2xl font-bold text-red-500 mb-2">
                Oops! Something went wrong
            </h3>
            <p className="text-gray-300 mb-4">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
                >
                    Try Again
                </button>
            )}
        </div>
    );
}

export default ErrorMessage;
