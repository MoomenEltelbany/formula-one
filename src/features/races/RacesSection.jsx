import { useState } from "react";
import RaceCard from "./RaceCard";
import RacesFilter from "./RacesFilter";

function RacesSection({ races }) {
    const [raceStatus, setRaceStatus] = useState("all");

    return (
        <main className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider">
            <RacesFilter raceStatus={raceStatus} onRaceStatus={setRaceStatus} />
            <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold uppercase">
                {raceStatus === "all" ? "All Races" : ""}
                {raceStatus === "completed" ? "Completed Races" : ""}
                {raceStatus === "upcoming" ? "Upcoming Races" : ""}
            </h2>
            {races.length === 0 ? (
                <p className="text-slate-400">No races found</p>
            ) : (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {races.races.map((race) => (
                        <RaceCard race={race} key={race.id} />
                    ))}
                </section>
            )}
        </main>
    );
}

export default RacesSection;
