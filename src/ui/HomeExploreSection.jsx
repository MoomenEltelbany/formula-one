import { Link } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { FaFlagCheckered } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";

const ALL_LINKS = [
    {
        id: 1,
        to: "/drivers",
        icon: FaRegUser,
        label: "Check our drivers",
        text: "View all drivers",
    },
    {
        id: 2,
        to: "/teams",
        icon: RiTeamLine,
        label: "Check our teams",
        text: "View all teams",
    },
    {
        id: 3,
        to: "/races",
        icon: FaFlagCheckered,
        label: "Check our races",
        text: "View all races",
    },
    {
        id: 4,
        to: "/standings",
        icon: CiViewTable,
        label: "Check the standing",
        text: "View our Standing",
    },
];

function HomeExploreSection() {
    return (
        <section className="bg-black py-12">
            <main className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white text-center">
                <h2 className="text-3xl font-title mb-6 text-red-500 font-bold uppercase text-center tracking-wide">
                    🏆 Explore the World of F1
                </h2>
                <p className="text-2xl text-gray-300 font-semibold">
                    The Race Doesn't End Here 🏁
                </p>
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6 mt-10">
                    {ALL_LINKS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li
                                className="flex flex-col items-center gap-4 bg-neutral-800 py-8 rounded-xl shadow-md hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1"
                                key={item.id}
                            >
                                <Icon className="text-red-500 text-5xl mb-2" />
                                <p className="text-xl font-semibold">
                                    {item.label}
                                </p>
                                <Link
                                    to={item.to}
                                    aria-label={`Navigate to ${item.label}`}
                                    className="bg-red-600 py-2 px-5 rounded-3xl font-semibold transition-all duration-200 hover:bg-white hover:text-red-600"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </section>
    );
}

export default HomeExploreSection;
