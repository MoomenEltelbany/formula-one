function TeamOverview({
    teamName,
    teamNationality,
    constructorsChampionships,
    driversChampionships,
    position,
    season,
    points,
    wins,
}) {
    return (
        <section className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider text-center">
            <h2 className="font-semibold text-3xl text-red-600 uppercase tracking-wide">
                Welcome to {teamName}
            </h2>

            <p className="text-red-600">
                <span className="text-slate-300 font-semibold">Country:</span>{" "}
                {teamNationality}
            </p>

            <p className="text-red-600">
                <span className="text-slate-300 font-semibold">
                    Constructors' Championships:
                </span>{" "}
                🏆 {constructorsChampionships || 0}
            </p>

            <p className="text-red-600">
                <span className="text-slate-300 font-semibold">
                    Drivers' Championships:
                </span>{" "}
                🏁 {driversChampionships || 0}
            </p>

            <p className="text-red-600">
                <span className="text-slate-300 font-semibold">Position:</span>{" "}
                {position} in Constructors' Standings
            </p>

            <p className="text-red-600">
                <span className="text-slate-300 font-semibold">
                    Total Points ({season}):
                </span>{" "}
                {points}
            </p>

            <p className="text-red-600">
                <span className="text-slate-300 font-semibold">
                    Season Wins:
                </span>{" "}
                {wins || 0}
            </p>
        </section>
    );
}

export default TeamOverview;
