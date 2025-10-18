import Main from "../../ui/Main";

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
        <Main>
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
        </Main>
    );
}

export default TeamOverview;
