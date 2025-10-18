/* eslint-disable react-refresh/only-export-components */
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
import Main from "../../ui/Main";

function DriverDetailsPage() {
    // driverData: Will return the results about the driver's races with many useful information about the races that we will use to make the race card of each race for every driver
    //driverChampionshipStats: This will return all the possible information about the driver, like his points, wins, team, etc

    const { driverData, driverChampionshipStats } = useLoaderData();

    const { results: raceResults } = driverData;

    // !Function used to retrieve the information of the driver based on the ID
    const currentDriverStats = driverChampionshipStats.data[
        "drivers_championship"
    ].find((d) => driverData.driver.driverId === d.driverId);

    const { driver, position, team, wins, points } = currentDriverStats;

    // The helper function that we use to get the image of the driver
    const image = getDriverImage(`${driver.name} ${driver.surname}`);

    // A helper function so that we can customize the summary of each driver depending on his position in the Championship standings
    const seasonSummary = getDriverSeasonSummary(
        driver,
        position,
        points,
        wins
    );

    return (
        <div className="bg-black py-12">
            <Main>
                <DriverHeader driver={driver} image={image} />
                <DriverInfo
                    driver={driver}
                    team={team}
                    seasonSummary={seasonSummary}
                />
                <DriverRaceResults raceResults={raceResults} />
            </Main>
        </div>
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
