function RaceCard({ race }) {
    function getStatusColor() {
        if (race.status === "completed") return "#10b981";
        if (race.status === "next") return "#f59e0b";
        return "#ef4444";
    }

    return (
        <div
            className="bg-neutral-900 text-center space-y-3 py-5 px-6 rounded-3xl shadow-md hover:shadow-red-600/30 transition-all duration-300 border border-neutral-800"
            style={{ boxShadow: `0 4px 6px -1px ${getStatusColor()}4D` }}
        >
            <div
                className="w-3/4 mx-auto h-[2px] bg-red-500/70 rounded-full"
                style={{ backgroundColor: getStatusColor() }}
            ></div>
            <h3 className="text-xl font-semibold text-white tracking-wide">
                Race {race.round}
            </h3>
            <p className="text-lg text-red-500 font-medium">{race.raceName}</p>
            <p className="text-slate-300">
                {race.flag} {race.country}
            </p>
            <p className="text-slate-400 text-sm">📍 {race.circuitName}</p>
            <p className="text-slate-400 text-sm">
                📅{" "}
                {new Date(race.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}
            </p>
            <p className="font-medium" style={{ color: getStatusColor() }}>
                Status:{" "}
                {race.status.charAt(0).toUpperCase() + race.status.slice(1)}
            </p>
            <p className="text-slate-300">
                🏆 Winner:{" "}
                <strong>{race.winner || "We will wait to know"}</strong>
            </p>

            {/* I made two buttons and not two texts because later depending on the text, we will navigate the user either to the results or the circuit information - We will use Link component later */}
            {race.winner ? (
                <button className="mt-3 bg-red-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-700 transition-all duration-200 cursor-pointer">
                    View Results
                </button>
            ) : (
                <button className="mt-3 bg-red-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-700 transition-all duration-200 cursor-pointer">
                    View Circuit
                </button>
            )}
        </div>
    );
}

export default RaceCard;
