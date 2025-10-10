import { Link } from "react-router-dom";

const CIRCUIT_IMAGE =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2022_F1_CourseLayout_Australia.svg/1920px-2022_F1_CourseLayout_Australia.svg.png";

function NextRace() {
    return (
        <section className="bg-black py-12">
            <main className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider">
                <h2 className="text-4xl mb-6 text-red-500 font-bold text-center tracking-wide uppercase">
                    🏆 Next race
                </h2>
                <p className="text-4xl font-semibold">
                    🌍 Australian Grand Prix
                </p>
                <p className="text-xl text-gray-300">
                    📍 Albert Park Grand Prix Circuit
                </p>
                <p className="text-2xl">📅 December 26, 2025</p>
                <p className="text-2xl text-red-500 font-medium">
                    ⏰ 15 days remaining
                </p>
                <div
                    className="bg-black max-w-2xl rounded-lg border-2 border-red-500/50 shadow-md hover:scale-105 transition-transform duration-300
"
                >
                    <img src={CIRCUIT_IMAGE} alt="Circuit Australia Image" />
                </div>
                <Link
                    to="/races/:123"
                    className="mt-4 bg-red-500 text-slate-300 py-1.5 px-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-300"
                >
                    View Race Details
                </Link>
            </main>
        </section>
    );
}

export default NextRace;
