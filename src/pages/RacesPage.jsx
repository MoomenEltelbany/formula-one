/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import NextRace from "../features/races/NextRace";
import RacesHeader from "../features/races/RacesHeader";
import RacesSection from "../features/races/RacesSection";
import { fetchAllRaces } from "../services/racesService";

function RacesPage() {
    const { completedRacesCount, nextRaceData, races } = useLoaderData();

    return (
        <>
            <RacesHeader
                races={races}
                completedRacesCount={completedRacesCount}
            />
            <NextRace raceData={nextRaceData} />
            <RacesSection races={races} />
        </>
    );
}

export async function loader() {
    const data = await fetchAllRaces();

    return data;
}

export default RacesPage;
