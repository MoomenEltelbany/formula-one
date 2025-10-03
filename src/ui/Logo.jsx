import { NavLink } from "react-router-dom";

function Logo() {
    return (
        <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-3xl">🏎️</span>
            <span className="text-xl font-bold text-red-600">F1 Dashboard</span>
        </NavLink>
    );
}

export default Logo;
