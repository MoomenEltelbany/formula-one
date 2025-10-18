/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import DriversHeader from "../features/drivers/DriversHeader";
import DriversList from "../features/drivers/DriversList";
import { fetchAllDrivers } from "../services/driversService";
import { fetchAllTeams } from "../services/teamsService";
import { useState } from "react";

function DriversPage() {
    const [selectedDrivers, setSelectedDrivers] = useState("all");

    const { allDrivers, allTeams } = useLoaderData();
    const { drivers, total, season } = allDrivers;

    const filteredDrivers = drivers.filter(
        (driver) => driver.teamId === selectedDrivers
    );

    const shownDrivers = selectedDrivers === "all" ? drivers : filteredDrivers;

    return (
        <div>
            <DriversHeader
                total={total}
                season={season}
                allTeams={allTeams}
                onSelectedDrivers={setSelectedDrivers}
            />
            <DriversList drivers={shownDrivers} />
        </div>
    );
}

export async function loader() {
    const [allDrivers, allTeams] = await Promise.all([
        fetchAllDrivers(),
        fetchAllTeams(),
    ]);

    return { allDrivers, allTeams };
}

export default DriversPage;
