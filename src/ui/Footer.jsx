function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {currentYear} F1 Dashboard. Data from various F1
                        sources.
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/MoomenEltelbany"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="/about"
                            className="text-gray-400 hover:text-white transition"
                        >
                            About
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
