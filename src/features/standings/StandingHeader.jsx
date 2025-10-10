function StandingHeader() {
    return (
        <section className="bg-black py-16 text-white">
            <main className=" bg-neutral-900 m-4 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold">
                    🏆 F1 CHAMPIONSHIP STANDINGS - 2025
                </h2>
                <p className="text-slate-300 text-2xl my-7">
                    Track who's leading the fight for glory
                </p>
                <p className="text-center text-red-500 text-xl font-semibold my-5">
                    Updated: After Round 18 of 24
                </p>
            </main>
        </section>
    );
}

export default StandingHeader;
