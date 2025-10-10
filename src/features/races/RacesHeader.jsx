function RacesHeader() {
    return (
        <section className="bg-black py-16 text-white">
            <main className=" bg-neutral-900 m-4 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold">
                    🏁 F1 RACE CALENDAR - 2025 SEASON
                </h2>
                <p className="text-slate-300 text-2xl my-7">
                    Your complete guide to every Grand Prix of the season —
                    dates, circuits, and results all in one place.
                </p>
                <div className="flex justify-center items-center gap-8">
                    <p className="text-center text-red-500 font-semibold my-5">
                        Total: 24
                    </p>
                    <p className="text-center text-red-500 font-semibold my-5">
                        Completed: 18
                    </p>
                    <p className="text-center text-red-500 font-semibold my-5">
                        Remaining: 6
                    </p>
                </div>
            </main>
        </section>
    );
}

export default RacesHeader;
