import NavbarLink from "./NavbarLink";
import Logo from "./Logo";

const LINKS = [
    { text: "Home", to: "/" },
    { text: "Drivers", to: "/drivers" },
    { text: "Teams", to: "/teams" },
    { text: "Races", to: "/races" },
    { text: "Standings", to: "/standings" },
];

function Navbar() {
    return (
        <nav className="bg-neutral-900 text-gray-100 border-b border-neutral-700">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    {/* Navigation Links */}
                    <ul className="flex space-x-8">
                        {LINKS.map((link) => (
                            <NavbarLink
                                text={link.text}
                                to={link.to}
                                key={link.text}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
