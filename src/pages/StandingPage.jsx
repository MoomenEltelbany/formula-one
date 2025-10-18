/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import ConstructorStanding from "../features/standings/ConstructorStanding";
import DriversStandingTable from "../features/standings/DriversStandingTable";
import StandingHeader from "../features/standings/StandingHeader";
import { fetchDriverChampionshipStats } from "../services/driversMockDetails";
import { fetchAllRaces } from "../services/racesMockDetails";
import { fetchAllTeams } from "../services/teamsMockDetails";

function StandingPage() {
    const { allRaces, allTeams, allDrivers } = useLoaderData();

    // console.log(allDrivers);

    return (
        <>
            <StandingHeader allRaces={allRaces} />
            <DriversStandingTable allDrivers={allDrivers} />
            <ConstructorStanding />
        </>
    );
}

export async function loader() {
    const [allRaces, allTeams, allDrivers] = await Promise.all([
        fetchAllRaces(),
        fetchAllTeams(),
        fetchDriverChampionshipStats(),
    ]);

    return { allRaces, allTeams, allDrivers };
}

export default StandingPage;
