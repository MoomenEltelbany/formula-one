import { useLoaderData } from "react-router-dom";

import DriverHeader from "./DriverHeader";
import DriverInfo from "./DriverInfo";
import DriverRaceResults from "./DriverRaceResults";

import {
    fetchDriverById,
    fetchDriverChampionshipStats,
    getDriverImage,
} from "../../services/driversMockDetails";
import { getDriverSeasonSummary } from "../../utils/driverHelpers";

/* eslint-disable react-refresh/only-export-components */
function DriverDetailsPage() {
    const { driverData, driverChampionshipStats } = useLoaderData();

    const { results: raceResults } = driverData;

    const wantedDriver = driverChampionshipStats.data[
        "drivers_championship"
    ].filter((d) => driverData.driver.driverId === d.driverId);

    const { driver, position, team, wins, points } = wantedDriver[0];

    const image = getDriverImage(`${driver.name} ${driver.surname}`);
    const seasonSummary = getDriverSeasonSummary(driver, position, points, wins);

    return (
        <section className="bg-black py-12">
            <main className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider text-center">
                <DriverHeader driver={driver} image={image} />
                <DriverInfo
                    driver={driver}
                    team={team}
                    seasonSummary={seasonSummary}
                />
                <DriverRaceResults raceResults={raceResults} />
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
