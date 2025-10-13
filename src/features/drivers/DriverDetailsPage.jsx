import { useLoaderData } from "react-router-dom";
import {
    fetchDriverById,
    fetchDriverChampionshipStats,
    getDriverImage,
} from "../../services/driversMockDetails";
import DriverRaceSummary from "./DriverRaceSummary";

/* eslint-disable react-refresh/only-export-components */
function DriverDetailsPage() {
    const { driverData, driverChampionshipStats } = useLoaderData();

    const { results: raceResults } = driverData;

    const wantedDriver = driverChampionshipStats.data[
        "drivers_championship"
    ].filter((d) => driverData.driver.driverId === d.driverId);

    const { driver, position, team, wins, points } = wantedDriver[0];

    const image = getDriverImage(`${driver.name} ${driver.surname}`);

    let paragraphTone;

    if (position <= 3) {
        paragraphTone = `With ${points} points and ${wins} victories so far this season, ${driver.name} ${driver.surname} is holding a commanding position in the standings — currently sitting in position n°${position}. His ability to consistently deliver high-level performances has kept him firmly in the spotlight, as he continues to challenge the front-runners and push the limits of what's possible on race day.`;
    } else if (position > 3 && position <= 10) {
        paragraphTone = `With ${points} points and a string of competitive finishes, ${driver.name} ${driver.surname} currently holds position n°${position} in the championship standings. His season has been marked by consistency and resilience, keeping him well within reach of the leaders and firmly in the mix for podium contention.`;
    } else {
        paragraphTone = `With ${points} points to his name, ${driver.name} ${driver.surname} sits in position n°${position} in the standings — a position that reflects steady effort and determination throughout the season. While not yet among the front-runners, his performances show promise and potential for climbing higher as the season unfolds.`;
    }

    return (
        <section className="bg-black py-12">
            <main className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider text-center">
                <h2 className="text-4xl mb-6 text-red-500 font-extrabold text-center tracking-widest uppercase drop-shadow-md">
                    🏎️ Driver Spotlight: {driver.name} {driver.surname}
                </h2>
                <img
                    src={image}
                    alt={`Photo of ${driver.name} ${driver.surname}`}
                    className="w-80 h-80 object-cover object-top rounded-lg border-2 border-red-500 shadow-md"
                />
                <p className="text-slate-300 text-lg">{paragraphTone}</p>
                <p className="text-slate-300 text-lg">
                    Driving for {team.teamName}, the team is from
                    {team.country} that made its Formula 1 debut in
                    {team.firstAppareance}, {driver.surname} represents a legacy
                    of speed and innovation. Racing under the number{" "}
                    {driver.number} and born in {driver.nationality}, he brings
                    a blend of precision, experience, and intensity to every
                    race weekend — contributing to the team's pursuit of
                    excellence and championship glory.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {raceResults.map((race) => (
                        <DriverRaceSummary raceData={race} />
                    ))}
                </div>
            </main>
        </section>
    );
}

export async function loader({ params }) {
    const [driverData, driverChampionshipStats] = await Promise.all([
        fetchDriverById(params.driverId),
        fetchDriverChampionshipStats(),
    ]);

    return { driverData, driverChampionshipStats };
}

export default DriverDetailsPage;
