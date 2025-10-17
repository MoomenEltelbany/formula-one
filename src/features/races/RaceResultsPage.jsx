/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { fetchCompletedRace } from "../../services/racesMockDetails";

import RaceResultHeader from "./RaceResultHeader";
import RaceResultSummary from "./RaceResultSummary";

function RaceResultsPage() {
    const { races } = useLoaderData();

    const { results } = races;

    return (
        <section className="bg-black py-12">
            <RaceResultHeader races={races} />
            <RaceResultSummary results={results} />
        </section>
    );
}

export async function loader({ params }) {
    const data = await fetchCompletedRace(params.completedRaceId);

    return data;
}

export default RaceResultsPage;
