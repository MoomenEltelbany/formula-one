import { NavLink } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
            <div className="text-center max-w-2xl">
                {/* Big 404 */}
                <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>

                {/* Message */}
                <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
                <p className="text-xl text-gray-400 mb-8">
                    Looks like this page went off track! 🏎️💨
                </p>

                {/* Illustration */}
                <div className="text-8xl mb-8">🏁</div>

                {/* Back Home Button */}
                {/* <NavLink
                    to="/"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition text-xl"
                >
                    Back to Home
                </NavLink> */}
            </div>
        </div>
    );
}

export default NotFoundPage;
