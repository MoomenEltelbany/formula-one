function LoadingSpinner({ size = "medium" }) {
    const sizeClasses = {
        small: "w-8 h-8",
        medium: "w-16 h-16",
        large: "w-24 h-24",
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div
                className={`${sizeClasses[size]} border-4 border-gray-700 border-t-red-600 rounded-full animate-spin`}
            ></div>
        </div>
    );
}

export default LoadingSpinner;
