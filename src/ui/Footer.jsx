import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-red-600">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {currentYear} F1 Dashboard.
                    </p>
                    <p>© Moomen Eltelbany</p>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/MoomenEltelbany"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            GitHub
                        </a>
                        <Link
                            to="/about"
                            className="text-gray-400 hover:text-white transition"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
