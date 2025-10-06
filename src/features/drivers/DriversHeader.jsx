import DriversFilter from "./DriversFilter";

function DriversHeader() {
    return (
        <section className="bg-black py-16 text-white">
            <main className=" bg-neutral-900 m-4 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold">
                    🏎️ F1 DRIVERS - 2025 SEASON
                </h2>
                <p className="text-slate-300 text-lg my-7">
                    Explore all the drivers competing in the 2025 Formula 1
                    season — from rising talents to world champions. Get stats,
                    team info, and season highlights in one place.
                </p>
                <div className="flex justify-center items-center gap-5 text-red-500 font-semibold my-5">
                    <p>Total Drivers: 20</p>
                    <span>|</span>
                    <p>Active Teams: 10</p>
                </div>
                <DriversFilter />
            </main>
        </section>
    );
}

export default DriversHeader;
