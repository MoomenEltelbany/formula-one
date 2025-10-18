import Main from "../../ui/Main";
import RaceCard from "./RaceCard";

function RacesSection({ races }) {
    return (
        <Main>
            <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold uppercase">
                Check our Races
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
        </Main>
    );
}

export default RacesSection;
