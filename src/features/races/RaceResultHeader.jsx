import { formatDate } from "../../utils/dateUtils";

function RaceResultHeader({ races }) {
    const { circuit, raceName, round, date, raceId } = races;
    return (
        <main className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider">
            <h2 className="text-4xl mb-6 text-red-500 font-bold text-center tracking-wide uppercase">
                🏁 Lights Out and Results In!
            </h2>
            <p className="text-4xl font-semibold text-slate-400">
                🌍 {circuit?.city}, {circuit?.country}
            </p>
            <p className="text-xl text-gray-300">📍 {raceName}</p>
            <p className="text-xl text-gray-300"> Round: {round}</p>
            <p className="text-2xl">📅 {formatDate(date)}</p>
            <h3 className="text-2xl text-red-500">
                From Circuit to Glory: Race Results Unleashed
            </h3>
            <p className="text-slate-300 tracking-wide text-xl">
                The battle on track has ended, and the numbers are in. Discover
                how each driver fared on this iconic circuit, from qualifying
                grid to final lap. Whether its a home hero or a surprise
                underdog, the results speak volumes.
            </p>
            <div className="bg-black max-w-2xl rounded-lg border-2 border-red-500/50 shadow-md hover:scale-105 transition-transform duration-300">
                <img
                    src={`/images/circuits/${raceId}.png`}
                    alt={`${raceName} Circuit photo`}
                    loading="lazy"
                />
            </div>
        </main>
    );
}

export default RaceResultHeader;
