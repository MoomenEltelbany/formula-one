/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import DriversHeader from "../features/drivers/DriversHeader";
import DriversList from "../features/drivers/DriversList";
import { fetchAllDrivers } from "../services/driversMockDetails";

function DriversPage() {
    const { drivers, total, season } = useLoaderData();

    return (
        <div>
            <DriversHeader total={total} />
            <DriversList drivers={drivers} />
        </div>
    );
}

export async function loader() {
    const data = await fetchAllDrivers();

    return data;
}

export default DriversPage;
