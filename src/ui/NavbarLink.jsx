import { NavLink } from "react-router-dom";

function NavbarLink({ text, to }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `text-gray-300 hover:text-red-600 transition ${
                    isActive ? "text-red-600" : ""
                }`
            }
        >
            {text}
        </NavLink>
    );
}

export default NavbarLink;
