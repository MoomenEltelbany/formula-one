import TeamsFilter from "./TeamsFilter";

function TeamsHeader() {
    return (
        <section className="bg-black py-16 text-white">
            <main className=" bg-neutral-900 m-4 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold">
                    🏎️ F1 TEAMS - 2025 SEASON
                </h2>
                <p className="text-slate-300 text-lg my-7">
                    Explore all the teams battling for glory in the 2025 Formula
                    1 season — from legendary constructors to ambitious
                    newcomers. Dive into team profiles and race results —
                    everything you need to follow the action, all in one place.
                </p>
                <p className="text-center text-red-500 text-xl font-semibold my-5">
                    Active Teams: 10
                </p>
                <TeamsFilter />
            </main>
        </section>
    );
}

export default TeamsHeader;
