import { Link } from "react-router-dom";
import { formatDate } from "../../utils/dateUtils";

function RaceCard({ race }) {
    const { circuit, raceName, round, schedule, teamWinner, winner, raceId } =
        race;

    let status = "Completed";

    if (!winner) status = "Upcoming";

    function getStatusColor() {
        if (status === "Completed") return "#10b981";
        return "#ef4444";
    }

    return (
        <div
            className="bg-neutral-900 text-center space-y-3 py-5 px-6 rounded-3xl shadow-md hover:shadow-red-600/30 transition-all duration-300 border border-neutral-800 flex flex-col"
            style={{ boxShadow: `0 4px 6px -1px ${getStatusColor()}4D` }}
        >
            <div
                className="w-3/4 mx-auto h-[2px] bg-red-500/70 rounded-full"
                style={{ backgroundColor: getStatusColor() }}
            ></div>
            <h3 className="text-xl font-semibold text-white tracking-wide">
                Race {round}
            </h3>
            <p className="text-slate-300">
                {circuit.city}, {circuit.country}
            </p>
            <p className="text-lg text-red-500 font-medium">📍 {raceName}</p>
            <p className="text-slate-400 text-sm">
                📅
                {formatDate(schedule.race.date)}
            </p>
            <p className="font-medium">
                <p className="font-medium" style={{ color: getStatusColor() }}>
                    Status: {status}
                </p>
            </p>
            <p className="text-slate-300">
                {winner && (
                    <>
                        🏆 Winner:{" "}
                        <strong>
                            {winner.name} {winner.surname}
                        </strong>
                    </>
                )}
            </p>
            <p className="text-slate-300">
                {winner && (
                    <>
                        🏎️ Team: <strong>{teamWinner.teamName}</strong>
                    </>
                )}
            </p>

            {/* I made two buttons and not two texts because later depending on the text, we will navigate the user either to the results or the circuit information - We will use Link component later */}
            {race.winner ? (
                <Link
                    to={`/race/${round}`}
                    className="mt-auto bg-red-600 text-white font-semibold py-2 px-auto rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 cursor-pointer"
                >
                    View Results
                </Link>
            ) : (
                <Link
                    to={`/races/${circuit.circuitId}?raceId=${raceId}`}
                    className="mt-auto bg-red-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 cursor-pointer"
                >
                    View Circuit
                </Link>
            )}
        </div>
    );
}

export default RaceCard;
